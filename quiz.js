//Cuestionario

const contenedor = document .getElementById ("cuestionario");
const botonRespuesta = document .getElementById ("boton");
const resultadoQuiz = document .getElementById ("resultado");

const preguntas = [ 
    {
        pregunta : "1. ¿Cuál es el mensaje principal de la serie Scooby-Doo?",
        respuestas: { 
            a: "Todos necesitamos una scooby galleta.",
            b: "No dejes que el miedo te detenga.",
            c: "Los monstruos no existen.",
            d: "En equipo las cosas son siempre más faciles."
        },
        respuestaCorrecta: "c"
    },

    {
        pregunta : "2. ¿Cuál de estas frases en Looney tunes no es correcta",
        respuestas: {
            a: "¡Temporada de Conejos!",
            b: "Hoy es un buen día para intentarlo",
            c: "¿Qué hay de nuevo viejo?",
            d: "eh... ¡Esto es todo amigos!"
        },
        respuestaCorrecta: "b"
    },

    {
        pregunta: "3. Cómo nació Jake en Hora de Aventura?",
        respuestas: {
            a: "Nació en un experimento de la Dulce Princesa",
            b: "Nació de una protuberancia en la cabeza de su padre",
            c: "Siempre se mantuvo en secreto su procedencia",
            d: "Nació por obra y creación del dios Grob Gob Glob Grod"
        },
        respuestaCorrecta: "b"
    },

    {
        pregunta: "4. ¿En la serie Laboratorio de Dexter, cuál es la edad del protagonista?",
        respuestas: {
            a: "13",
            b: "9",
            c: "10",
            d: "12"
        },
        respuestaCorrecta: "c"
    },

    {
        pregunta: "5. ¿Para qué Jack de Samurai Jack viaja al futuro?",
        respuestas: {
            a: "Para derrotar a Akku",
            b: "Para derrotar a Odín",
            c: "Para derrotar a Ice King",
            d: "Ninguna de las anteriores"
        },
        respuestaCorrecta: "a"
    },

    {
        pregunta: "6. ¿Qué paso con la familia del Perro Coraje?",
        respuestas: {
            a: "Murieron en un accidente de tránsito",
            b: "Su familia lo abandona",
            c: "Sus padres fueron asesinados",
            d: "Un veterinario secuestra a su familia"
        },
        respuestaCorrecta: "d"
    },

    {
        pregunta: "7. ¿Por qué Puro hueso se une a los protagonistas en Las Sombrías Aventuras de Billy/Mandy?",
        respuestas: {
            a: "Lo hace por voluntad propia",
            b: "Pierde un combate",
            c: "Pierde una apuesta",
            d: "Para que Billy & Mandy sean sus esclavos"
        },
        respuestaCorrecta: "c"
    },

    {
        pregunta: "8. ¿Dónde vive Patricio en Bob Esponja?",
        respuestas: {
            a: "En una ostra marina",
            b: "Dentro de una Perla",
            c: "Abajo de una roca",
            d: "En una piña"
        },
        respuestaCorrecta: "c"
    },

    {
        pregunta: "9. ¿Por qué los Simpsons son amarillos",
        respuestas: {
            a: "Por la contaminación",
            b: "Por ser diferente a comparación de otras series",
            c: "Por la genética",
            d: "Nunca se supo el motivo"
        },
        respuestaCorrecta: "b"
    },

    {
        pregunta: "10. ¿Cuál de estas frases del Tio Iroh en La Leyenda de Aang no es suya?",
        respuestas: {
            a: "En los tiempos más oscuros, la esperanza es algo que te das a ti mismo. Ese es el significado de la fuerza interior",
            b: "Si bien siempre es mejor creer en uno mismo, un poco de ayuda de los demás puede ser una gran bendición",
            c: "Es importante obtener sabiduría de diferentes lugares. Si lo tomas de un solo lugar, se vuelve rígido y rancio",
            d: "El pasado puede doler, pero... Tal y como yo lo veo, puedes o huir de el o aprender de ello"
        },
        respuestaCorrecta: "d"
    },

    {
        pregunta: "11. Cómo es la personalidad de Bojack Horseman?",
        respuestas: {
            a: "Lógica",
            b: "Amigable",
            c: "Tímido",
            d: "Autodestructiva"
        },
        respuestaCorrecta: "d"
    },

    {
        pregunta: "12. ¿Cuál es el objetivo principal de johnny bravo?",
        respuestas: {
            a: "Tener una novia",
            b: "Ser fuerte",
            c: "Ser deportista",
            d: "Ganar musculos"
        },
        respuestaCorrecta: "a"
    },

    {
        pregunta: "13. ¿En los Padrinos Mágicos cuál es el deseo que no se puede conceder?",
        respuestas:{
            a: "Viajar en el tiempo",
            b: "Explorar el interior del cuerpo humano",
            c: "Dinero",
            d: "Comida"
        },
        respuestaCorrecta: "c"
    },

    {
        pregunta: "14. ¿Quién es la líder en las chicas Superpoderosas?",
        respuestas:{
            a: "Bellota",
            b: "Bombón",
            c: "Burbuja",
            d: "No tienen líder"
        },
        respuestaCorrecta: "b"
    },

    {
        pregunta: "15. ¿Cómo termina la serie Tom & Jerry?",
        respuestas: {
            a: "Los dos rivales tienen una ultima batalla",
            b: "Tom muere de viejo y Jerry va a su funeral",
            c: "Ambos se convierten en mejores amigos",
            d: "los dos sentados en las vías del tren, esperando la muerte"
        },
        respuestaCorrecta: "d"
    },
];

//------JSON------//

let preguntas_JSON = JSON.stringify(preguntas);;

console.log (preguntas);
console.log (preguntas_JSON);

//--LocalStorage--//

localStorage.setItem("preguntas", preguntas_JSON);

//Mostrar el cuestionario

function mostrarCuestionario(){
    const preguntasYrespuestas = [];

    preguntas.forEach((preguntaActual, numerodePregunta) =>{
        const respuestas = [];
        for(letraRespuesta in preguntaActual.respuestas){
            respuestas.push(
                `<label>
                    <input type="radio" name="${numerodePregunta}" value="${letraRespuesta}">
                    ${letraRespuesta} :${preguntaActual.respuestas[letraRespuesta]}

                </label>`
            );
        }
        preguntasYrespuestas.push(
            `<div class="cuestionario"> ${preguntaActual.pregunta} </div>
                <div class="respuestas"> ${respuestas.join('')}</div>
            `
        );
    })
    contenedor.innerHTML = preguntasYrespuestas.join('');
}

mostrarCuestionario();

//Mostrar los resultados

function mostrarResultado(){
    const respuestas = contenedor.querySelectorAll(".respuestas");
    let respuestasCorrectas = 0;

    preguntas.forEach((preguntaActual, numerodePregunta) =>{
        const todaslasRespuestas = respuestas[numerodePregunta];
        const checkboxRespuestas = `input[name='${numerodePregunta}']:checked`;
        const respuestaElegida = (todaslasRespuestas.querySelector(checkboxRespuestas)|| {}).value;
        
        if(respuestaElegida === preguntaActual.respuestaCorrecta){
            respuestasCorrectas++;

            respuestas[numerodePregunta].style.color = `blue`;

        } else{
            respuestas[numerodePregunta].style.color = `red`;
        }
    })

    resultadoQuiz.innerHTML = 'Usted acerto' + respuestasCorrectas + 'preguntas de un total de' + preguntas.length

}

botonRespuesta.addEventListener('click', mostrarResultado);




