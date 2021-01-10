//Obtener un elemento del DOM mediante el id
var lista = document.getElementById("listado");

function reqListener () {
    //La peticion llega como texto en el momento que se usa 'responseText'
    //console.log(this.responseText);

    //Se puede castear los objetos a formato JSON
    //Ademas se puede adignar el objeto a una variable
    var usuarios =JSON.parse(this.responseText);

    //Mapeadno el objeto JSON para listarlo
    var listaUsuarios = usuarios.map(x => `<li>${x.nombre}</li>`).join('');
    //Mostrar en consola el listado
    console.log(listaUsuarios)
    
    //Agregar el listado de usuarios mediante 'innherHTML'
    lista.innerHTML=listaUsuarios;

  }
  
  var oReq = new XMLHttpRequest();
  oReq.addEventListener("load", reqListener);
  //oReq.open("[Tipo_Peticion]", "Direccion_Servidor");
  oReq.open("GET", "https://bootcamp-dia-3.camilomontoyau.now.sh/usuarios");
  oReq.send();