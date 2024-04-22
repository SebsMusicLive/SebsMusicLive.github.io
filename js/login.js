function getEstudiantes(){
    fetch('https://24a0dac0-2579-4138-985c-bec2df4bdfcc-00-3unzo70c406dl.riker.replit.dev/students', {
        headers: {
            Accept: 'application/json',
        }
    })
    .then((response) => response.json())
    .then(res => {
        console.log(res);
        compararEstudiantes(res);
    })
    .catch(error => {
        console.error(error);
    })
}

function compararEstudiantes(estudiantes){
    const codigo = document.querySelector("#codigo").value;
    const contrasena = document.querySelector("#contrasena").value;

    for(let i = 0; i < estudiantes.length ; i++){
        if(estudiantes[i].codigo == codigo && estudiantes[i].clave == contrasena){
            console.log("ingreso exitoso");
        }
    }
    
}
