/* function pintar(){
ele.style.backgroundColor = 'yellow'
}
const ele = document.getElementById("ele1")
ele.addEventListener("click", pintar);
 */
// Solucion:
function pintar(element, color = "green") {
    element.style.backgroundColor = color;
}
const ele = document.getElementById("ele1");
ele.addEventListener("click", () => pintar(ele, "yellow"));