// ============================================================
// CAPA SERVICIOS — tareasService.js
// ============================================================

import {
    obtenerUsuarioPorDocumento,
    obtenerTareasPorUsuario,
    crearTareaEnServidor,
    actualizarTareaEnServidor,
    borrarTareaEnServidor
} from '../api/tareasApi.js';

import {
    crearTarjetaTarea,
    mostrarInfoUsuario,
    actualizarContador,
    limpiarContenedorTareas,
    mostrarErrorBusqueda,
    contenedorTareas
} from '../ui/tareasUI.js';

// ============================================================
// BÚSQUEDA DE USUARIO
// ============================================================

/**
 * Busca un usuario por documento, lo muestra en pantalla y carga sus tareas.
 * Si no existe o hay error, muestra el mensaje correspondiente.
 *
 * @param {string} documento - Número de documento ingresado en el formulario.
 * @param {Object} estadoApp - Estado global compartido de la aplicación.
 */
export async function buscarUsuario(documento, estadoApp) {
    try {
        const usuario = await obtenerUsuarioPorDocumento(documento);

        if (usuario) {
            estadoApp.usuarioActual = usuario;
            mostrarInfoUsuario(usuario);
            await cargarTareasDeUsuario(usuario.id, estadoApp);
        } else {
            estadoApp.usuarioActual = null;
            mostrarErrorBusqueda('No existe un usuario con ese documento.');
            estadoApp.cantidadTareas = 0;
        }
    } catch (error) {
        estadoApp.usuarioActual = null;
        mostrarErrorBusqueda('Error de conexión con el servidor.');
        estadoApp.cantidadTareas = 0;
    }
}

// ============================================================
// CARGA DE TAREAS
// ============================================================

/**
 * Obtiene las tareas de un usuario y las renderiza en el contenedor.
 *
 * @param {number} idUsuario - ID del usuario cuyas tareas se van a mostrar.
 * @param {Object} estadoApp - Estado global (para actualizar cantidadTareas y manejadores).
 */
export async function cargarTareasDeUsuario(idUsuario, estadoApp) {
    const tareas = await obtenerTareasPorUsuario(idUsuario);

    // Limpiar tarjetas anteriores del DOM
    limpiarContenedorTareas();

    // Usar DocumentFragment para insertar todas las tarjetas de una sola vez
    const fragmento = document.createDocumentFragment();
    tareas.forEach(tarea => {
        const tarjeta = crearTarjetaTarea(tarea, {
            alEditar: estadoApp.alEditar,
            alEliminar: estadoApp.alEliminar
        });
        fragmento.appendChild(tarjeta);
    });
    contenedorTareas.appendChild(fragmento);

    estadoApp.cantidadTareas = tareas.length;
    actualizarContador(estadoApp.cantidadTareas);
}

// ============================================================
// CREAR TAREA
// ============================================================

/**
 * Envía una nueva tarea al servidor y agrega su tarjeta al DOM.
 *
 * @param {Object} datosTarea - Objeto con los campos de la tarea.
 * @param {Object} estadoApp - Estado global.
 */
export async function crearNuevaTarea(datosTarea, estadoApp) {
    const tareaCreada = await crearTareaEnServidor(datosTarea);
    const nuevaTarjeta = crearTarjetaTarea(tareaCreada, {
        alEditar: estadoApp.alEditar,
        alEliminar: estadoApp.alEliminar
    });
    contenedorTareas.appendChild(nuevaTarjeta);
    estadoApp.cantidadTareas++;
    actualizarContador(estadoApp.cantidadTareas);
}

// ============================================================
// EDITAR TAREA
// ============================================================

/**
 * Actualiza una tarea en el servidor y reemplaza su tarjeta en el DOM.
 *
 * @param {number} id - ID de la tarea a editar.
 * @param {Object} datosTarea - Nuevos valores de la tarea.
 * @param {Object} estadoApp - Estado global.
 */
export async function editarTarea(id, datosTarea, estadoApp) {
    const tareaActualizada = await actualizarTareaEnServidor(id, datosTarea);

    // Buscar la tarjeta en el DOM y reemplazarla por la versión actualizada
    const tarjetaAnterior = contenedorTareas.querySelector(`[data-id="${id}"]`);
    if (tarjetaAnterior) {
        const tarjetaNueva = crearTarjetaTarea(tareaActualizada, {
            alEditar: estadoApp.alEditar,
            alEliminar: estadoApp.alEliminar
        });
        tarjetaAnterior.replaceWith(tarjetaNueva);
    }
}

// ============================================================
// ELIMINAR TAREA
// ============================================================

/**
 * Pide confirmación, elimina la tarea del servidor y la remueve del DOM
 * con una animación de salida usando transitionend.
 *
 * @param {number} id - ID de la tarea a eliminar.
 * @param {HTMLElement} elementoTarjeta - El nodo DOM de la tarjeta.
 * @param {Object} estadoApp - Estado global.
 */
export async function eliminarTarea(id, elementoTarjeta, estadoApp) {
    const confirmado = confirm('¿Estás seguro de que deseas eliminar esta tarea?');
    if (!confirmado) return;

    try {
        const eliminado = await borrarTareaEnServidor(id);

        if (eliminado) {
            // Agregar clase CSS que dispara la animación de salida
            elementoTarjeta.classList.add('eliminando');

            // Remover del DOM cuando termine la transición CSS
            elementoTarjeta.addEventListener('transitionend', () => {
                elementoTarjeta.remove();
                estadoApp.cantidadTareas = Math.max(0, estadoApp.cantidadTareas - 1);
                actualizarContador(estadoApp.cantidadTareas);
            }, { once: true }); // once: true → el listener se limpia solo automáticamente
        } else {
            alert('No se pudo eliminar la tarea en el servidor.');
        }
    } catch (error) {
        alert('Error de conexión al intentar eliminar.');
    }
}