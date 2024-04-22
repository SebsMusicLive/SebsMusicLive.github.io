const urlStudents = "https://24a0dac0-2579-4138-985c-bec2df4bdfcc-00-3unzo70c406dl.riker.replit.dev/students";
const codigo = document.querySelector("#codigo").value;
const contrasena = document.querySelector("#contrasena").value;

fetch(urlStudents)
    .then(res => res.json())
    .then(data => {
        console.log(compararEstudiantes(data));
    })

function compararEstudiantes(data){
    for(let i = 0; i <= data.length; i++){
        if(data[i].codigo == codigo && data[i].clave == contrasena){
            return "Inicio sesión";
        }
    }
}