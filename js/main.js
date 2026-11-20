// Bygger det blinkande dansgolvet i bakgrunden, samma idé som i spelet.
const golv = document.getElementById("golv");

const morkaFarger = ["#0b0720", "#120a35", "#1a0f4d", "#2a1070"];
const neonFarger = ["#19e6ff", "#19e6ff", "#2f7bff", "#8a3dff", "#8a3dff", "#c026d3", "#ff3fb4"];

// väljer en slumpad färg ur en lista
function slumpaFarg(lista) {
    return lista[Math.floor(Math.random() * lista.length)];
}

function byggGolv() {
    golv.innerHTML = "";   // töm först, annars blir det dubbletter när fönstret ändrar storlek

    // så många rutor som behövs för att täcka hela skärmen (varje ruta är 100px)
    const antal = Math.ceil(window.innerWidth / 100) * Math.ceil(window.innerHeight / 100);

    for (let i = 0; i < antal; i++) {
        const ruta = document.createElement("div");
        ruta.className = "ruta-golv";
        const mork = slumpaFarg(morkaFarger);

        if (Math.random() < 0.7) {
            ruta.classList.add("blinkar");
            ruta.style.setProperty("--fran", mork);
            ruta.style.setProperty("--till", slumpaFarg(neonFarger));
            ruta.style.animationDuration = (3 + Math.random() * 4) + "s";
            ruta.style.animationDelay = (-Math.random() * 7) + "s";
        } else {
            ruta.style.background = mork;
        }
        golv.appendChild(ruta);
    }
}

byggGolv();
window.addEventListener("resize", byggGolv);   // bygg om om fönstret ändrar storlek
