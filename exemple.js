console.log("Hola!");
//un objecte ya definit, instancia d'una classe. representa l'html
//modificar html a través de document
// window.document...
let div = document.getElementById("div_text"); //retorna un objecte, vinculat directament amb el div
//per a accedir podem fer servir la variable "div"

div.innerHTML = "Hola <h1> HTML </h1>"; //innerHTML, és un atribut 
//dóna un error. se executa a dalt de tot JS. s'ha d'afegir defer, s'executa després de HTML

div.innerText += "Hola <h1> TEXT HTML </h1>"; //executa només aquest, no l'anterior

/*alert("Popupfeo alert");*/

//window.document --> no hace falta, porque ya está en el window
/*let numero = window.prompt("Indica un número"); //pedir información*/
let input_numero = document.getElementById("input_numero"); //retorna un input, no un número
// let numero = input_numero.innerText //accedint al text en el interior del tag 
let numero = input_numero.value //accedint al valor en el interior del tag 

//atributs són de lectura i escriptura

let resultat = document.getElementById("resultat");
resultat.innerText = numero;


function sumaValors() {
    // resultat.innerText = input_numero.value;
    let num1 = input_numero.value; //tinc la referència obtinguda a dalt
    let num2 = document.getElementById("input_numero2").value;

    if (isNaN(num1)) {
        num1 = 0;
    }
    if (isNaN(num2)) {
        num2 = 0;
    }

    resultat.innerText = parseFloat(num1) + parseFloat(num2);
}

let audio = document.getElementById("audio");
audio.addEventListener("canplaythrough", function(){
    timer.max = audio.duration;
    timer_span.max = audio.duration;
    let ref_interval = window.setInterval(function(){
        timer.value = audio.currentTime;
        timer_span.innerText = audio.currentTime;
        if(audio.currentTime == audio.duration){
            window.clearInterval(ref_interval)
        }
    }, 1000)
})
const timer = document.getElementById("timer");
const timer_span = document.getElementById("timer_span");

function playAudio() {
    audio.src = "";
    audio.play();
}

function playAudio2() {
    audio.src = "";
    audio.play();
}

function clk_btn_stopAudio() {
    audio.pause();
    audio.currentTime = 0;
}

function clk_btn_mute() {
    audio.muted = !audio.muted;
}

function clk_btn_volUp() {
    try {
        audio.volume += 0.2;
    } catch (e) {
        audio.volume = 1;
    }
    document.getElementById("vol").value = audio.volume;
}

function clk_btn_volDown() {
    try {
        audio.volume -= 0.2;
    } catch (e) {
        audio.volume = 0;
    }
    document.getElementById("vol").value = audio.volume;
}

function change_inp_vol() {
    audio.volume = document.getElementById("vol").value;
}

window.setTimeout(
    function(){
        document.getElementById("timer_span").innerText = audio.duration;
    },500
);


//JS, les funcions són objectes

//sumaValors = "Hola"; //sobreescribeix, variable executable

//let text = String("hola");

/*
let sumaValors = function () {
    resultat.innerText = input_numero.value;
}
*/

//function retorna objectes executables

mostraLlista();
window.setInterval(mostraLlista, 1000); //() perqué és un objecte executable, amb () executa

function mostraLlista() {
    let data = new Date();
    let llista = document.getElementById("llista_propietats");
    llista.innerHTML = `<ol> 
                            <li>Valor mínim que pot tenir un número JS: ` + Number.MIN_VALUE + `</li> 
                            <li>Amplada total de la pantalla: ` + screen.width + `</li>    
                            <li>Amplada interna de la finestra: `+ window.innerWidth + `</li>    
                            <li>Títol de la web: ` + document.title + `</li>
                            <li>Hora actual: `
                            + data.getDate()
                            + `/` + data.getMonth()
                            + `/` + data.getFullYear()
                            + ` - ` + data.getHours()
                            + `:` + data.getMinutes()
                            + `:` + data.getSeconds()
                            + `</li>
                        </ol>`;
}



