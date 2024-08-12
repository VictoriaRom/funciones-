// Cambio de color a negro
const divs = document.querySelectorAll(".box");
divs.forEach((div) => {
    div.addEventListener("click", () => {
        div.style.backgroundColor = "black";
    });
});

// Cambio de color según letras
const colores = [
    {
        a: "pink",
        s: "orange",
        d: "lightblue",
    },
    {
        q: "purple",
        w: "gray",
        e: "brown",
    },
];

const changeColorKey = () => {
    const boxKey = document.querySelector("#key");
    const boxCreate = document.querySelector(".boxCreate");

    const colorMap = colores[0];
    const colorMap2 = colores[1];

    document.addEventListener("keydown", function (event) {
        console.log("Tecla presionada:", event.key);
        if (colorMap[event.key]) {
            console.log("Cambiando color a:", colorMap[event.key]);
            boxKey.style.backgroundColor = colorMap[event.key];
        } else if (colorMap2[event.key]) {
            const nuevoDiv = document.createElement("div");
            nuevoDiv.classList.add("div-item");
            nuevoDiv.style.width = "200px";
            nuevoDiv.style.height = "200px";
            nuevoDiv.style.backgroundColor = colorMap2[event.key];
            nuevoDiv.style.border = "1px solid black";
            boxCreate.appendChild(nuevoDiv);
        }
    });
};

changeColorKey();
