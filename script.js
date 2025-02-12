const btn = document.querySelector("#btn-1");
let ultimoElemento = null;

function agregarFrase(){
    let frases = ["El éxito es la suma de pequeños esfuerzos diarios.","Cree en ti y todo será posible.", "Cada día es una nueva oportunidad.", "No cuentes los días, haz que los días cuenten.", "Los límites solo existen en tu mente.", "Si te caes siete veces, levántate ocho.", "La constancia vence al talento cuando el talento no se esfuerza.", "Tú decides qué tan lejos quieres llegar.", "Haz hoy lo que tu futuro agradecerá.", "Las grandes cosas toman tiempo, sigue adelante."];
    
    if (ultimoElemento){
        ultimoElemento.remove()
    }

    const randomNum = Math.floor(Math.random()*10);
    const newElement = document.createElement("p");
    let frase = frases[randomNum];
    newElement.textContent = frase;
    document.body.appendChild(newElement);
    ultimoElemento = newElement;

}

btn.onclick = agregarFrase;


