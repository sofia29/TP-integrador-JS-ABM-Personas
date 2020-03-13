//CODIGO PARA INTERACTUAR CON API
//CON FOREACH RECORRO ARRAY PARA ARMAR HTML CON INFO DE USUARIOS


 fetch('https://tp-js-2-api-wjfqxquokl.now.sh/users?')
 .then(res => res.json())
 .then(usuarios => {
  
  const contenedorInfoUsuarios = document.getElementById("contenedorInfoUsuarios")
  let acumuladoraUsuarios = ""
  let fullName = ""
  let email = ""
  let address = ""
  let phone = ""

usuarios.forEach(usuario => {
  fullName = usuario.fullname;
  email = usuario.email;
  address = usuario.address;
  phone = usuario.phone; 
})

acumuladoraUsuarios +=  `
  <td><input type="checkbox" class="checkbox"></td>
           <td>${fullName}</td>
          <td>${email}</td>
           <td>${address}</td>
           <td>${phone}</td>
           <td>
 <div class="contenedorIconoEditar"><i class="material-icons" id="editIcon" title="Edit">&#xE254;</div>
 <div class="contenedorIconoBorrar"><i class="material-icons" id="deleteIcon" title="Delete">&#xE872;</div>
 </td>`

 contenedorInfoUsuarios.innerHTML = acumuladoraUsuarios

 //CODIGO PARA ABRIR Y CERRAR MODALES (AGREGAR, EDITAR Y BORRAR)


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


})  

 
//  //CODIGO PARA VALIDAR LOS CAMPOS DEL FORMULARIO DE AGREGAR
 
//  const formAdd = document.forms[0]
 
//  const inputNombre = document.getElementById("name")
//  const inputEmail = document.getElementById("email")
//  const inputPhone = document.getElementById("phone")
//  const inputAddress = document.getElementById("address")
 
//  formAdd.onsubmit = (e) => {
//  e.preventDefault();
//  const mensajeErrorNombre = document.getElementById("mensajeErrorNombre")
//  const mensajeErrorEmail = document.getElementById("mensajeErrorEmail")
//  const mensajeErrorDireccion = document.getElementById("mensajeErrorDireccion")
//  const mensajeErrorTelefono = document.getElementById("mensajeErrorTelefono")
 
//  if (!inputNombre.value)     {
//  mensajeErrorNombre.innerHTML = `<p>Please fill out this field.</p>`
//  }
 
//  else if (!inputEmail.value) {
//    mensajeErrorEmail.innerHTML = `<p>Please fill out this field.</p>`
//  }
 
//  else if (!inputAddress.value) {
//    mensajeErrorDireccion.innerHTML = `<p>Please fill out this field.</p>`
//  }
 
//  else if (!inputPhone.value) {
//    mensajeErrorTelefono.innerHTML = `<p>Please fill out this field.</p>`
//  }
 
//  }
 
//  //CODIGO PARA VALIDAR LOS CAMPOS DEL FORMULARIO DE EDITAR
 
//ojo que en algun lugar ya declare variable const con formulario
//  //console.log(formEdit)
 
 
 
//  ///-------------------------------------------------------
//CODIGO PARA IDENTIFICAR DISTINTOS BOTONES Y ASIGNARLES EVENTOS
const formAdd = document.forms[0]
const cancelAdd = document.getElementById("cancelAdd")

const formEdit = document.forms[1]
const cancelEdit = document.getElementById("cancelEdit")


formAdd.onsubmit = e => {
    e.preventDefault();
    console.log("hola, apretaste confirmar agregar")
  //aca puedo llamar una funcion que haya sido declarada abajo
}

cancelAdd.onclick = () => {
  console.log("hola, queres cancelar agregar")
//aca puedo llamar una funcion que haya sido declarada abajo
}

formEdit.onsubmit = e => {
  e.preventDefault();
  console.log("hola, apretaste confirmar editar")
//aca puedo llamar una funcion que haya sido declarada abajo
}

cancelEdit.onclick = () => {
  console.log("hola, queres cancelar editar")
//aca puedo llamar una funcion que haya sido declarada abajo
}


const boxFilter = document.getElementById("boxFilter")

boxFilter.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
      event.preventDefault();
      console.log(`hola, entraste al filtro`)
//aca meter el codigo que filtre

  }
});

