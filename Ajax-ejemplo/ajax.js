function reqListener () {
    //La peticion llega como texto en el momento que se usa 'responseText'
    console.log(this.responseText);
  }
  
  var oReq = new XMLHttpRequest();
  oReq.addEventListener("load", reqListener);
  //oReq.open("[Tipo_Peticion]", "Direccion_Servidor");
  oReq.open("GET", "https://bootcamp-dia-3.camilomontoyau.now.sh/usuarios");
  oReq.send();