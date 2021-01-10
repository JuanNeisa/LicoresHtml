//Obtener un elemento del DOM mediante el id
var lista = document.getElementById("listado");
var boton = document.getElementById("boton");



function reqListener () {
    //La peticion llega como texto en el momento que se usa 'responseText'
    //console.log(this.responseText);

    //Se puede castear los objetos a formato JSON
    //Ademas se puede adignar el objeto a una variable
    var usuarios =JSON.parse(this.responseText);
    console.log(usuarios)

    //Mapeadno el objeto JSON para listarlo
    var listaUsuarios = usuarios.map(x => `<li>${x.nombre}</li>`).join('');
    //Mostrar en consola el listado
    console.log(listaUsuarios)
    
    //Agregar el listado de usuarios mediante 'innherHTML'
    lista.innerHTML=listaUsuarios;

  }
  
  //Crear la variable tipo 'XMLHttpRequest'
  var peticion = new XMLHttpRequest();
  //Listener para que cada que cargue el documento realice el callback 'reqListener'
  peticion.addEventListener("load", reqListener);
  this.refrescar();
  
function enviarDatos() {
  peticion.open(
    "POST",
    "https://bootcamp-dia-3.camilomontoyau.now.sh/usuarios",
    true
  );
  peticion.setRequestHeader(
    "Content-type",
    "application/x-www-form-urlencoded"
  );
  peticion.send("nombre=LUNES24");
  setTimeout(refrescar, 1000);
}

function refrescar() {
  peticion.open("GET", "https://bootcamp-dia-3.camilomontoyau.now.sh/usuarios");
  peticion.send();
}

boton.onclick = enviarDatos;