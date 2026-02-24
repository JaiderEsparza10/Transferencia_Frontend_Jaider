/**
//  * ============================================
//  * EJERCICIO DE MANIPULACIÓN DEL DOM
//  * ============================================
//  * 
//  * Objetivo: Aplicar conceptos del DOM para seleccionar elementos,
//  * responder a eventos y crear nuevos elementos dinámicamente.
//  * 
//  * Autor: [Tu nombre aquí]
//  * Fecha: [Fecha actual]
//  * ============================================
//  */

// // ============================================
// // 1. SELECCIÓN DE ELEMENTOS DEL DOM
// // ============================================

// /**
//  * Seleccionamos los elementos del DOM que necesitamos manipular.
//  * Usamos getElementById para obtener referencias a los elementos únicos.
//  */

// // Formulario
// const messageForm = document.getElementById('messageForm');

// // Campos de entrada
// const userNameInput = document.getElementById('userName');
// const userMessageInput = document.getElementById('userMessage');

// // Botón de envío
// const submitBtn = document.getElementById('submitBtn');

// // Elementos para mostrar errores
// const userNameError = document.getElementById('userNameError');
// const userMessageError = document.getElementById('userMessageError');

// // Contenedor donde se mostrarán los mensajes
// const messagesContainer = document.getElementById('messagesContainer');

// // Estado vacío (mensaje que se muestra cuando no hay mensajes)
// const emptyState = document.getElementById('emptyState');

// // Contador de mensajes
// const messageCount = document.getElementById('messageCount');

// // Variable para llevar el conteo de mensajes
// let totalMessages = 0;


// // ============================================
// // 2. FUNCIONES AUXILIARES
// // ============================================

// /**
//  * Valida que un campo no esté vacío ni contenga solo espacios en blanco
//  * @param {string} value - El valor a validar
//  * @returns {boolean} - true si es válido, false si no lo es
//  */
// function isValidInput(value) {
//     // TODO: Implementar validación
//     // Pista: usa trim() para eliminar espacios al inicio y final
//     // Retorna true si después de trim() el string tiene longitud > 0
// }

// /**
//  * Muestra un mensaje de error en un elemento específico
//  * @param {HTMLElement} errorElement - Elemento donde mostrar el error
//  * @param {string} message - Mensaje de error a mostrar
//  */
// function showError(errorElement, message) {
//     // TODO: Implementar función para mostrar error
//     // Pista: asigna el mensaje al textContent del elemento
// }

// /**
//  * Limpia el mensaje de error de un elemento específico
//  * @param {HTMLElement} errorElement - Elemento del que limpiar el error
//  */
// function clearError(errorElement) {
//     // TODO: Implementar función para limpiar error
//     // Pista: asigna un string vacío al textContent
// }

// /**
//  * Valida todos los campos del formulario
//  * @returns {boolean} - true si todos los campos son válidos, false si alguno no lo es
//  */
// function validateForm() {
//     // TODO: Implementar validación completa del formulario
//     // 1. Obtener los valores de los inputs usando .value
//     // 2. Crear una variable para saber si el formulario es válido (inicialmente true)
//     // 3. Validar el campo de nombre de usuario
//     //    - Si no es válido, mostrar error y cambiar la variable a false
//     //    - Si es válido, limpiar el error
//     // 4. Validar el campo de mensaje
//     //    - Si no es válido, mostrar error y cambiar la variable a false
//     //    - Si es válido, limpiar el error
//     // 5. Retornar si el formulario es válido o no
    
//     // Ejemplo de estructura:
//     /*
//     const userName = userNameInput.value;
//     const userMessage = userMessageInput.value;
//     let isValid = true;
    
//     // Validar nombre
//     if (!isValidInput(userName)) {
//         // Mostrar error
//         // Agregar clase 'error' al input
//         isValid = false;
//     } else {
//         // Limpiar error
//         // Remover clase 'error' del input
//     }
    
//     // Validar mensaje (estructura similar)
    
//     return isValid;
//     */
// }

// /**
//  * Obtiene la fecha y hora actual formateada
//  * @returns {string} - Fecha y hora en formato legible
//  */
// function getCurrentTimestamp() {
//     const now = new Date();
//     const options = { 
//         year: 'numeric', 
//         month: 'long', 
//         day: 'numeric',
//         hour: '2-digit',
//         minute: '2-digit'
//     };
//     return now.toLocaleDateString('es-ES', options);
// }

// /**
//  * Obtiene las iniciales de un nombre
//  * @param {string} name - Nombre completo
//  * @returns {string} - Iniciales en mayúsculas
//  */
// function getInitials(name) {
//     // TODO: Implementar función para obtener iniciales
//     // Pista: 
//     // 1. Separar el nombre por espacios usando split(' ')
//     // 2. Tomar la primera letra de cada palabra
//     // 3. Unirlas y convertirlas a mayúsculas
//     // 4. Si solo hay una palabra, retornar las dos primeras letras
// }

// /**
//  * Actualiza el contador de mensajes
//  */
// function updateMessageCount() {
//     // TODO: Implementar actualización del contador
//     // Pista: Usa template literals para crear el texto
//     // Formato: "X mensaje(s)" o "X mensajes"
// }

// /**
//  * Oculta el estado vacío (mensaje cuando no hay mensajes)
//  */
// function hideEmptyState() {
//     // TODO: Implementar función para ocultar el estado vacío
//     // Pista: Agrega la clase 'hidden' al elemento emptyState
// }

// /**
//  * Muestra el estado vacío (mensaje cuando no hay mensajes)
//  */
// function showEmptyState() {
//     // TODO: Implementar función para mostrar el estado vacío
//     // Pista: Remueve la clase 'hidden' del elemento emptyState
// }


// // ============================================
// // 3. CREACIÓN DE ELEMENTOS
// // ============================================

// /**
//  * Crea un nuevo elemento de mensaje en el DOM
//  * @param {string} userName - Nombre del usuario
//  * @param {string} message - Contenido del mensaje
//  */
// function createMessageElement(userName, message) {
//     // TODO: Implementar la creación de un nuevo mensaje
    
//     // PASO 1: Crear el contenedor principal del mensaje
//     // Pista: document.createElement('div')
//     // Asignar la clase 'message-card'
    
//     // PASO 2: Crear la estructura HTML del mensaje
//     // Puedes usar innerHTML con la siguiente estructura:
//     /*
//     <div class="message-card__header">
//         <div class="message-card__user">
//             <div class="message-card__avatar">[INICIALES]</div>
//             <span class="message-card__username">[NOMBRE]</span>
//         </div>
//         <span class="message-card__timestamp">[FECHA]</span>
//     </div>
//     <div class="message-card__content">[MENSAJE]</div>
//     */
    
//     // PASO 3: Insertar el nuevo elemento en el contenedor de mensajes
//     // Pista: messagesContainer.appendChild(nuevoElemento)
//     // O usar insertBefore para agregarlo al principio
    
//     // PASO 4: Incrementar el contador de mensajes
    
//     // PASO 5: Actualizar el contador visual
    
//     // PASO 6: Ocultar el estado vacío si está visible
// }


// // ============================================
// // 4. MANEJO DE EVENTOS
// // ============================================

// /**
//  * Maneja el evento de envío del formulario
//  * @param {Event} event - Evento del formulario
//  */
// function handleFormSubmit(event) {
//     // TODO: Implementar el manejador del evento submit
    
//     // PASO 1: Prevenir el comportamiento por defecto del formulario
//     // Pista: event.preventDefault()
    
//     // PASO 2: Validar el formulario
//     // Si no es válido, detener la ejecución (return)
    
//     // PASO 3: Obtener los valores de los campos
    
//     // PASO 4: Crear el nuevo elemento de mensaje
//     // Llamar a createMessageElement con los valores obtenidos
    
//     // PASO 5: Limpiar el formulario
//     // Pista: messageForm.reset()
    
//     // PASO 6: Limpiar los errores
    
//     // PASO 7: Opcional - Enfocar el primer campo para facilitar agregar otro mensaje
//     // Pista: userNameInput.focus()
// }

// /**
//  * Limpia los errores cuando el usuario empieza a escribir
//  */
// function handleInputChange() {
//     // TODO: Implementar limpieza de errores al escribir
//     // Esta función se ejecuta cuando el usuario escribe en un campo
//     // Debe limpiar el error de ese campo específico
// }


// // ============================================
// // 5. REGISTRO DE EVENTOS
// // ============================================

// /**
//  * Aquí registramos todos los event listeners
//  */

// // TODO: Registrar el evento 'submit' en el formulario
// // Pista: messageForm.addEventListener('submit', handleFormSubmit);

// // TODO: Registrar eventos 'input' en los campos para limpiar errores al escribir
// // Pista: userNameInput.addEventListener('input', handleInputChange);
// // Pista: userMessageInput.addEventListener('input', handleInputChange);


// // ============================================
// // 6. REFLEXIÓN Y DOCUMENTACIÓN
// // ============================================

// /**
//  * PREGUNTAS DE REFLEXIÓN:
//  * 
//  * 1. ¿Qué elemento del DOM estás seleccionando?
//  *    R: 
//  * 
//  * 2. ¿Qué evento provoca el cambio en la página?
//  *    R: 
//  * 
//  * 3. ¿Qué nuevo elemento se crea?
//  *    R: 
//  * 
//  * 4. ¿Dónde se inserta ese elemento dentro del DOM?
//  *    R: 
//  * 
//  * 5. ¿Qué ocurre en la página cada vez que repites la acción?
//  *    R: 
//  */


// // ============================================
// // 7. INICIALIZACIÓN (OPCIONAL)
// // ============================================

// /**
//  * Esta función se ejecuta cuando el DOM está completamente cargado
//  */
// document.addEventListener('DOMContentLoaded', function() {
//     console.log('✅ DOM completamente cargado');
//     console.log('📝 Aplicación de registro de mensajes iniciada');
    
//     // Aquí puedes agregar cualquier inicialización adicional
//     // Por ejemplo, cargar mensajes guardados del localStorage
// });


// ============================================
// 8. FUNCIONALIDADES ADICIONALES (BONUS)
// ============================================

/**
 * RETOS ADICIONALES OPCIONALES:
 * 
 * 1. Agregar un botón para eliminar mensajes individuales
 * 2. Implementar localStorage para persistir los mensajes
 * 3. Agregar un contador de caracteres en el textarea
 * 4. Implementar un botón para limpiar todos los mensajes
 * 5. Agregar diferentes colores de avatar según el nombre del usuario
 * 6. Permitir editar mensajes existentes
 * 7. Agregar emojis o reacciones a los mensajes
 * 8. Implementar búsqueda/filtrado de mensajes
 */


// **
//  * PROYECTO: GESTIÓN DE TAREAS - SENA
//  * Rama: componentes
//  * Objetivo: Cumplir con la lista de chequeo usando un único archivo JS organizado.
//  */
// --- 1. SELECCIÓN DE ELEMENTOS DEL DOM ---
const searchForm = document.getElementById('searchForm');
const userDocInput = document.getElementById('userDoc');
const searchError = document.getElementById('searchError');
const userInfo = document.getElementById('userInfo');

const messageForm = document.getElementById('messageForm'); 
const messagesContainer = document.getElementById('messagesContainer'); 
const emptyState = document.getElementById('emptyState');
const messageCountLabel = document.getElementById('messageCount'); 
const taskSection = document.getElementById('taskSection'); // Asegúrate de tener este ID en tu HTML

// --- 2. ESTADO GLOBAL ---
let currentUser = null;
let taskCounter = 0;

// --- 3. COMPONENTES ---

function UserComponent(user) {
    document.getElementById('infoNombre').textContent = user.nombre; 
    document.getElementById('infoCorreo').textContent = user.correo;
    userInfo.classList.remove('hidden');
    if(taskSection) taskSection.classList.remove('hidden'); // Muestra el formulario de tareas
    console.log("Usuario cargado:", user.nombre);
}

function TaskCardComponent(title, desc, status, priority) {
    const card = document.createElement('div');
    card.className = 'message-card'; 
    
    let priorityColor = priority === 'Alta' ? '#ef4444' : priority === 'Media' ? '#f59e0b' : '#10b981';

    card.style.borderLeft = `5px solid ${priorityColor}`;
    card.innerHTML = `
        <div class="message-card__header">
            <strong>${title}</strong>
            <span class="tag">${status}</span>
        </div>
        <p>${desc}</p>
        <small>Prioridad: <span style="color:${priorityColor}">${priority}</span></small>
    `;
    return card;
}

// --- 4. LÓGICA DEL SISTEMA ---

// Búsqueda de Usuario y sus Tareas
searchForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const docId = userDocInput.value.trim(); 
    if (!docId) return;

    try {
        // Buscar usuario por documento
        const response = await fetch(`http://localhost:3000/usuarios?documento=${docId}`);
        
        if (response.ok) {
            const users = await response.json(); 
            
            if (users.length > 0) {
                currentUser = users[0]; 
                UserComponent(currentUser);
                searchError.textContent = "";

                // --- NUEVO: Cargar tareas del usuario desde la DB ---
                const tasksResponse = await fetch(`http://localhost:3000/tasks?userId=${currentUser.id}`);
                const tasks = await tasksResponse.json();
                
                messagesContainer.innerHTML = ""; // Limpiar vista
                tasks.forEach(task => {
                    const card = TaskCardComponent(task.titulo, task.descripcion, task.estado, task.prioridad);
                    messagesContainer.appendChild(card);
                });
                
                taskCounter = tasks.length;
                updateUI();

            } else {
                showSearchError("No existe un usuario con ese documento.");
            }
        } else {
            showSearchError("Error al consultar la base de datos.");
        }
    } catch (error) {
        showSearchError("Error de conexión con el servidor.");
    }
});

// Registro de Tareas (Ahora guarda en la DB)
messageForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    if (!currentUser) {
        alert("Primero debes buscar un usuario para asignarle tareas.");
        return;
    }

    const title = document.getElementById('usertarea').value.trim();
    const desc = document.getElementById('userMessage').value.trim();
    const status = document.getElementById('taskStatus').value;
    const priority = document.getElementById('taskPriority').value;

    if (!title || !desc || !status || !priority) {
        alert("Por favor complete todos los campos.");
        return;
    }

    // Objeto para la base de datos
    const newTask = {
        userId: currentUser.id,
        titulo: title,
        descripcion: desc,
        estado: status,
        prioridad: priority
    };

    try {
        // Guardar en la base de datos (POST)
        const response = await fetch('http://localhost:3000/tasks', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newTask)
        });

        if (response.ok) {
            const taskSaved = await response.json();
            
            // Pintar en la UI
            const newCard = TaskCardComponent(taskSaved.titulo, taskSaved.descripcion, taskSaved.estado, taskSaved.prioridad);
            messagesContainer.appendChild(newCard);

            taskCounter++;
            updateUI();
            messageForm.reset();
        }
    } catch (error) {
        alert("No se pudo guardar la tarea en el servidor.");
    }
});

// Funciones de Utilidad
function updateUI() {
    messageCountLabel.textContent = `${taskCounter} Tareas`;
    if (taskCounter > 0) {
        emptyState.classList.add('hidden');
    } else {
        emptyState.classList.remove('hidden');
    }
}

function showSearchError(msg) {
    searchError.textContent = msg;
    userInfo.classList.add('hidden');
    if(taskSection) taskSection.classList.add('hidden');
    messagesContainer.innerHTML = "";
    taskCounter = 0;
    updateUI();
}

userDocInput.addEventListener('input', () => {
    searchError.textContent = "";
});