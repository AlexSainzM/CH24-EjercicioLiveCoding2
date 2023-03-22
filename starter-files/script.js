// API
const API_ENDPOINT = 'https://yesno.wtf/api';

const button = document.getElementById("button");
const divAnswer = document.getElementById("answer");

function traerRespuesta(answer){
    fetch('https://yesno.wtf/api') //peticion
    .then(answer => answer.json())
    .then((data) => {
        crearDiv(data);
    })
}

function crearDiv(answer){
    const respuesta = document.createElement("h6");
    h6.textContent = answer.answer;
}

console.log(h6.textContent);
