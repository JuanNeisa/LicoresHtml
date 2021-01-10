const miPromesa = new Promise((resolve, reject) =>{
    //resolve("Promesa resuelta");
    reject("Fallo");
});

miPromesa.then(
    (respuesta)  => console.log(respuesta),
    (razon)  => console.log(razon)
);
