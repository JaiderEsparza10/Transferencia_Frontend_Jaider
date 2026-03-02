// ============================================================
// PUNTO DE ENTRADA — main.js
// Responsabilidad: conectar la interfaz con los servicios.
// Aquí se define el estado global, las reglas de validación
// y los event listeners de los formularios.
// ============================================================

import { validar } from './utils/validaciones.js';
import {
    mostrarErroresTarea,
    limpiarErroresTarea,
    limpiarErrorCampo,
    errorBusqueda,
    inputDocumento,
    inputTitulo,
    inputDescripcion,
    selectorEstado,
    selectorPrioridad
} from './ui/tareasUI.js';
import {
    buscarUsuario,
    cargarTareasDeUsuario,
    crearNuevaTarea,
    editarTarea,
    eliminarTarea
} from './services/tareasService.js';

// --- Formularios del HTML ---
const formularioBusqueda = document.getElementById('searchForm');
const formularioTarea = document.getElementById('messageForm');

// ============================================================
// ESTADO GLOBAL DE LA APLICACIÓN
// Centraliza los datos que cambian durante el uso de la app.
// ============================================================
const estadoApp = {
    usuarioActual: null,  // Objeto usuario encontrado en el servidor
    cantidadTareas: 0,     // Cuántas tarjetas hay visibles en pantalla
    idTareaEditando: null,  // ID de la tarea en modo edición (null = modo creación)
    alEditar: null,  // Manejador de edición (se define abajo)
    alEliminar: null   // Manejador de eliminación (se define abajo)
};

// --- Manejadores de acciones de las tarjetas ---
// Se definen aquí porque necesitan acceso al estado y al formulario.

estadoApp.alEditar = function (tarea) {
    // Cargar los datos de la tarea en el formulario para editarlos
    inputTitulo.value = tarea.titulo;
    inputDescripcion.value = tarea.descripcion;
    selectorEstado.value = tarea.estado;
    selectorPrioridad.value = tarea.prioridad;
    estadoApp.idTareaEditando = tarea.id;
    inputTitulo.focus(); // Llevar el cursor al primer campo
};

estadoApp.alEliminar = function (id, elementoTarjeta) {
    eliminarTarea(id, elementoTarjeta, estadoApp);
};

// ============================================================
// REGLAS DE VALIDACIÓN
// Cada clave es el atributo "name" del campo en el HTML.
// ============================================================

const reglasDocumento = {
    documento: {
        required: true,
        min: 3,
        max: 15,
        mensaje: 'El documento es obligatorio'
    }
};

const reglasTarea = {
    usertarea: { required: true, min: 3, max: 100, mensaje: 'El título de la tarea es obligatorio' },
    userMessage: { required: true, min: 5, max: 500, mensaje: 'La descripción es obligatoria' },
    taskStatus: { required: true, mensaje: 'Selecciona el estado de la tarea' },
    taskPriority: { required: true, mensaje: 'Selecciona la prioridad de la tarea' }
};

// ============================================================
// LIMPIAR ERRORES AL ESCRIBIR (feedback inmediato al usuario)
// ============================================================

inputDocumento.addEventListener('input', () => {
    errorBusqueda.textContent = '';
    inputDocumento.classList.remove('error');
});

inputTitulo.addEventListener('input', () => limpiarErrorCampo('usertarea'));
inputDescripcion.addEventListener('input', () => limpiarErrorCampo('userMessage'));
selectorEstado.addEventListener('change', () => limpiarErrorCampo('taskStatus'));
selectorPrioridad.addEventListener('change', () => limpiarErrorCampo('taskPriority'));

// ============================================================
// FORMULARIO DE BÚSQUEDA DE USUARIO
// ============================================================

formularioBusqueda.addEventListener('submit', async (evento) => {
    evento.preventDefault();

    // Validar antes de hacer la petición al servidor
    const { valido, errores } = validar(formularioBusqueda, reglasDocumento);
    if (!valido) {
        inputDocumento.classList.add('error');
        errorBusqueda.textContent = errores.documento ?? 'Documento inválido';
        return;
    }

    inputDocumento.classList.remove('error');
    const documento = inputDocumento.value.trim();
    await buscarUsuario(documento, estadoApp);
});

// ============================================================
// FORMULARIO DE CREACIÓN / EDICIÓN DE TAREAS
// ============================================================

formularioTarea.addEventListener('submit', async (evento) => {
    evento.preventDefault();

    if (!estadoApp.usuarioActual) {
        alert('Primero debes buscar un usuario para asignarle tareas.');
        return;
    }

    // Validar el formulario antes de enviar
    const { valido, errores } = validar(formularioTarea, reglasTarea);
    if (!valido) {
        mostrarErroresTarea(errores);
        return;
    }

    limpiarErroresTarea();

    // Construir el objeto con los datos del formulario
    const datosTarea = {
        userId: estadoApp.usuarioActual.id,
        titulo: inputTitulo.value.trim(),
        descripcion: inputDescripcion.value.trim(),
        estado: selectorEstado.value,
        prioridad: selectorPrioridad.value
    };

    try {
        if (estadoApp.idTareaEditando) {
            // --- MODO EDICIÓN ---
            await editarTarea(estadoApp.idTareaEditando, datosTarea, estadoApp);
            estadoApp.idTareaEditando = null; // Volver al modo creación
        } else {
            // --- MODO CREACIÓN ---
            await crearNuevaTarea(datosTarea, estadoApp);
        }

        formularioTarea.reset();
        limpiarErroresTarea();
    } catch (error) {
        alert('No se pudo guardar la tarea en el servidor.');
    }
});