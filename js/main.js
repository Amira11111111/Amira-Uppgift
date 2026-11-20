
// ==========================================
// GET HER OUT THE CLUB
// BLINKANDE DANSGOLV
// ==========================================


// Hämta dansgolvet från HTML
const golv = document.getElementById("golv");


// Färger till dansgolvet
const morkaFarger = [
    "#0b0720",
    "#120a35",
    "#1a0f4d",
    "#2a1070"
];


// Neonfärger
const neonFarger = [
    "#19e6ff",
    "#19e6ff",
    "#2f7bff",
    "#8a3dff",
    "#8a3dff",
    "#c026d3",
    "#ff3fb4"
];


// Väljer en slumpmässig färg från en lista
function slumpaFarg(lista) {
    return lista[Math.floor(Math.random() * lista.length)];
}


// Bygger det blinkande dansgolvet
function byggGolv() {

    // Kontrollera att elementet finns
    if (!golv) return;

    // Töm golvet först
    golv.innerHTML = "";

    // Beräkna hur många rutor som behövs
    const antalKolumner = Math.ceil(window.innerWidth / 100);
    const antalRader = Math.ceil(window.innerHeight / 100);

    const antal = antalKolumner * antalRader;


    // Skapa alla rutor
    for (let i = 0; i < antal; i++) {

        const ruta = document.createElement("div");

        ruta.className = "ruta-golv";

        // Slumpa en mörk grundfärg
        const mork = slumpaFarg(morkaFarger);


        // 70 procent av rutorna ska blinka
        if (Math.random() < 0.7) {

            ruta.classList.add("blinkar");

            // Startfärg
            ruta.style.setProperty("--fran", mork);

            // Slumpad neonfärg
            ruta.style.setProperty(
                "--till",
                slumpaFarg(neonFarger)
            );

            // Slumpmässig hastighet
            ruta.style.animationDuration =
                (3 + Math.random() * 4) + "s";

            // Olika starttider
            ruta.style.animationDelay =
                (-Math.random() * 7) + "s";

        } else {

            // Övriga rutor får en mörk färg
            ruta.style.background = mork;

        }


        // Lägg till rutan på dansgolvet
        golv.appendChild(ruta);

    }

}


// Bygg dansgolvet när sidan öppnas
byggGolv();


// Bygg om dansgolvet när fönstrets storlek ändras
window.addEventListener("resize", byggGolv);
