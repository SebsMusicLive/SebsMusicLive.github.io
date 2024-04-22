function getEstudiantes(){
    fetch('https://24a0dac0-2579-4138-985c-bec2df4bdfcc-00-3unzo70c406dl.riker.replit.dev/students', {
        headers: {
            Accept: 'application/json',
        }
    })
    .then((response) => response.json())
    .then(res => {
        console.log(res);
        listadoEstudiantes(res);
    })
    .catch(error => {
        console.error(error);
    })
}

function listadoEstudiantes(estudiantes){
    const result = document.querySelector(".result").value;
    estudiantes.map((data , i) => {
        let nombre = document.createElement('h2');
        nombre.textContent = `${i} - ${data.name}, ${data.username}`;
        result.appendChild(nombre);
        load.style.display = 'none';
    });
}

getEstudiantes();