//CODIGO PARA INTERACTUAR CON API

 fetch('https://tp-js-2-api-wjfqxquokl.now.sh/users?')
 .then(res => res.json())
 .then(usuario => {
  
  //FOREACH PARA RECORRER ARRAY DE USUARIOS Y RELLENAR EL HTML DE LA TABLA

  const contenedorInfoUsuarios = document.getElementById("contenedorInfoUsuarios")
 
usuario.forEach(() => {
  contenedorInfoUsuarios.innerHTML = `
  <td><input type="checkbox" class="checkbox"></td>
           <td>${usuario[0].fullname}</td>
          <td>${usuario[0].email}</td>
           <td>${usuario[0].address}</td>
           <td>${usuario[0].phone}</td>
           <td>
 <div class="contenedorIconoEditar"><i class="material-icons" id="editIcon" title="Edit">&#xE254;</div>
 <div class="contenedorIconoBorrar"><i class="material-icons" id="deleteIcon" title="Delete">&#xE872;</div>
 </td>`

}) 
 
  




 //CODIGO PARA ABRIR Y CERRAR MODALES 
//(PARA AGREGAR, EDITAR Y BORRAR)

 const modal = document.getElementById("modal")
 const iconoAbrirModal = document.getElementById("mostrarModal")
 const botonCerrarModal = document.getElementById("cerrarModal")
 
 const body = document.getElementById("body")
 
 const modalEditar = document.getElementById("modalEditar")
 const botonEditar = document.getElementById("editIcon")
 const botonCerrarModalEditar = document.getElementById("cerrarModalEditar")
 
 const botonBorrar = document.getElementById("deleteIcon")
 const modalBorrar = document.getElementById("modalBorrar")
 const botonCerrarModalBorrar = document.getElementById("cerrarModalBorrar")
 
 
 iconoAbrirModal.onclick = () => {
     modal.classList.remove("nomostrar")
     body.classList.add("opacityGeneral")
     modal.classList.add("opacityModal")
 }
 
 botonCerrarModal.onclick = () => {
     modal.classList.add("nomostrar")
     body.classList.remove("opacityGeneral")
     
 }
 
 
 botonEditar.onclick = () => {
 modalEditar.classList.remove("nomostrar")
 body.classList.add("opacityGeneral")
 }
 
 botonCerrarModalEditar.onclick = () => {
   modalEditar.classList.add("nomostrar")
   body.classList.remove("opacityGeneral")
   
 }
 
 botonBorrar.onclick = () => {
   modalBorrar.classList.remove("nomostrar")
   body.classList.add("opacityGeneral")
 }
 
 botonCerrarModalBorrar.onclick = () => {
   modalBorrar.classList.add("nomostrar")
   body.classList.remove("opacityGeneral")
 }
 
 
 //CODIGO PARA VALIDAR LOS CAMPOS DEL FORMULARIO DE AGREGAR
 
 const formAdd = document.forms[0]
 
 const inputNombre = document.getElementById("name")
 const inputEmail = document.getElementById("email")
 const inputPhone = document.getElementById("phone")
 const inputAddress = document.getElementById("address")
 
 formAdd.onsubmit = (e) => {
 e.preventDefault();
 const mensajeErrorNombre = document.getElementById("mensajeErrorNombre")
 const mensajeErrorEmail = document.getElementById("mensajeErrorEmail")
 const mensajeErrorDireccion = document.getElementById("mensajeErrorDireccion")
 const mensajeErrorTelefono = document.getElementById("mensajeErrorTelefono")
 
 if (!inputNombre.value)     {
 mensajeErrorNombre.innerHTML = `<p>Please fill out this field.</p>`
 }
 
 else if (!inputEmail.value) {
   mensajeErrorEmail.innerHTML = `<p>Please fill out this field.</p>`
 }
 
 else if (!inputAddress.value) {
   mensajeErrorDireccion.innerHTML = `<p>Please fill out this field.</p>`
 }
 
 else if (!inputPhone.value) {
   mensajeErrorTelefono.innerHTML = `<p>Please fill out this field.</p>`
 }
 
 }
 
 //CODIGO PARA VALIDAR LOS CAMPOS DEL FORMULARIO DE EDITAR
 
 //const formEdit = document.forms[1]
 //console.log(formEdit)
 

}
 )







