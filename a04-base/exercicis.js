/***********************************************************************************/

// -------------------
// Codi exercici E1...
// -------------------


const links = document.querySelectorAll('.list-group-item');

links.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.textTransform = 'uppercase';
        link.style.backgroundColor = 'red';
    });

    link.addEventListener('mouseout', () => {
        link.style.textTransform = 'none';
        link.style.backgroundColor = ''; 
    });
});


/***********************************************************************************/

// -------------------
// Codi exercici E2...
// -------------------


let clickBoton = 0;

document.querySelectorAll(".cross-game").forEach(celda =>

    celda.addEventListener("click", () => {
        if (celda.textContent !== "?") {
            alert("No puedes utilizar esta posición");
            celda.style.backgroundColor = "black"
            return;
        }

        if (clickBoton % 2 === 0) {
            celda.textContent = "X"; 
            celda.style.backgroundColor = "blue" // Par
        } else {
            celda.textContent = "O";  
            celda.style.backgroundColor = "yellow" // Impar
        }

        clickBoton++;
    })
);

let reset = document.getElementById("ex02-reset");

reset.addEventListener("click", function() {
    let celdas = document.querySelectorAll(".cross-game");
    celdas.forEach(function(celda) {
        celda.textContent = "?";
    });
});



/***********************************************************************************/

// -------------------
// Codi exercici E3...
// -------------------

const imagesList = [
    "img/ex04/planta1.jpg",
    "img/ex04/planta2.jpg",
    "img/ex04/planta3.jpg",

    "img/ex04/zombie1.jpg",
    "img/ex04/zombie2.jpg",
    "img/ex04/zombie3.jpg",
];

let coincidencias = 0;

function iniciarJuego() {
    const celdas = document.querySelectorAll(".count-game");
    const seleccionadas = {}; 

    coincidencias = 0;
    document.getElementById("ex03-result").innerText = "Coincidencies: " + coincidencias;

    celdas.forEach(celda => {
        const imgSrc = imagesList[Math.floor(Math.random() * imagesList.length)];
        celda.src = imgSrc;

        seleccionadas[imgSrc] = (seleccionadas[imgSrc] || 0) + 1;
    });

    for (const key in seleccionadas) {
        if (seleccionadas[key] > 1) {
            coincidencias += seleccionadas[key] - 1;
        }
    }

    document.getElementById("ex03-result").innerText = "Coincidencies:" + coincidencias;
}

function reiniciarJuego() {
    const celdas = document.querySelectorAll('.count-game');

    celdas.forEach(celda => {
        celda.src = "img/ex04/interrogant.png"; 
    });

    coincidencias = 0;
    document.getElementById("ex03-result").innerText = "Coincidencies:" + coincidencias;
}


document.getElementById("ex03-start").addEventListener("click", iniciarJuego);
document.getElementById("ex03-reset").addEventListener("click", reiniciarJuego);



/***********************************************************************************/

// -------------------
// Codi exercici E4...
// -------------------

document.querySelector("#ex04-parent").addEventListener("click", function(event) {
    alert("⚠️⚠️⚠️ Esdeveniment element PARE!!! ⚠️⚠️⚠️");
});

document.querySelector("#ex04-child").addEventListener("click", function(event) {
    alert("Esdeveniment element fill! 👶");
    
    event.stopPropagation(); // <-- Gracies a aquest codi

    const pregunta = "Com podem evitar que un esdeveniment es propagui d'un element pare a fill?";
    const resposta = "Podem utilitzar la funcio stopPropagation() en l'esdeveniment del fill per evitar que es propagui cap al pare";

    alert("Pregunta:" + pregunta + "\n" + "Resposta:" + resposta);

});




/***********************************************************************************/

// -------------------
// Codi exercici E1...
// -------------------

document.querySelector("#exE1").addEventListener("click", function(event) {
	// NO TOCAR
	location.href="exE1.html";
})