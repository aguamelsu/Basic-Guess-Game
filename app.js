var numeroAleatorio = 0;
var intentos = 0;
var numeroSorteado = [];
let min = 1;
let max = 3;


function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function verificadorIntento() {
    asignarTextoElemento('#intento', 'Intentar')
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);

    if (numeroUsuario === numeroAleatorio) {
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${intentos == 1 ? " intento." : " intentos."}`);
        document.querySelector('#intento').setAttribute('disabled', 'true');
        document.querySelector('#reiniciar').removeAttribute('disabled'); // When selecting with querySelector by ID we use '#'
        
    } else {                                                                                                       
        if (numeroUsuario < numeroAleatorio) {
            asignarTextoElemento('p', 'El número secreto es mayor');
        } else {
            asignarTextoElemento('p', 'El número secreto es menor');
        }
        intentos++;
        cleanBox();
    }
}

function cleanBox() {
    document.getElementById('valorUsuario').value = "";
}

function randomNumber() {
    let randomNum =  Math.floor(Math.random() * (max - min + 1)) + min;

    if (numeroSorteado.includes(randomNum)) {
        return randomNumber(min, max);
    } else {
        numeroSorteado.push(randomNum);
        return randomNum;
    }
}

function newGame() {
    // Clean the box
    cleanBox();
    // Generate random num
    // Reset var intentos
    // Show initial messages

    // preconfig if numerosSorteados es 0 (juego nuevo) else: (inicital config)
    if (numeroSorteado.length == max) {
        numeroSorteado = [];
        asignarTextoElemento('p', 'Ya se sortearon todos los números del juego. Reinicialo para empezar de nuevo');
        asignarTextoElemento('#reiniciar', 'Nuevo juego');
        document.getElementById('#reiniciar').setAttribute('disabled', 'false'); // Reset game completely
    } else {
        initialConfig();
    }
    // Disable reset button after starting the new game
    document.getElementById('reiniciar').setAttribute('disabled', 'true'); 
}


function initialConfig(){

    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', 'Adivina el número secreto');
    asignarTextoElemento('#intento', 'Intentar');  

    numeroAleatorio = randomNumber();
    intentos = 1;
    document.querySelector('#intento').removeAttribute('disabled');
}

initialConfig();
    