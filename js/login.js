function ingresar(){
    var codigo = document.querySelector("#codigo").value;
    var contrasena = document.querySelector("#contrasena").value;
}

function estudiantes(){
    fetch('https://24a0dac0-2579-4138-985c-bec2df4bdfcc-00-3unzo70c406dl.riker.replit.dev/students')
    .then(response =>{
        return response.json()
    })
    .then(data => {
        console.log(data);
    })

}