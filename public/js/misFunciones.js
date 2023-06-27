function cerrarPagina() {
    window.close();    
}

// // Ejemplo de evento de envío del formulario
// document.querySelector('#formSubscripcion').addEventListener('submit', (event) => {
//     event.preventDefault(); // Evitar el envío del formulario normal
  
//     // Obtener los datos del formulario y crear el objeto formData
//     const formData = new FormData(event.target);
  
//     // Realizar la petición AJAX con fetch
//     fetch('/subscribirme', {
//       method: 'POST',
//       body: formData
//     })
//       .then(response => response.json())
//       .then(data => {
//         // Manejar la respuesta del servidor y actualizar el contenido del modal
  
//         // Obtener el elemento del modal donde se mostrará el mensaje
//         const modalBody = document.querySelector('.modal-body');
  
//         // Verificar si la respuesta indica un mensaje de éxito o error
//         if (data.success) {
//           // Mensaje de éxito
//           modalBody.innerHTML = '<p>' + data.mensaje + '</p>';
//         } else {
//           // Mensaje de error
//           modalBody.innerHTML = '<p>' + data.error + '</p>';
//         }
  
//         // Abrir el modal si no está abierto
//         const myModal = new bootstrap.Modal(document.getElementById('exampleModal'));
//         myModal.show();
//       })
//       .catch(error => {
//         // Manejar el error de la petición AJAX
//         console.log(error);
//       });
//   });