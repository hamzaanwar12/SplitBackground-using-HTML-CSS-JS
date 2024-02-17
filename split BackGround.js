let side1 = document.getElementById("side1")
let side2 = document.getElementById("side2")
console.log(side1)
console.log(side2)

let hoverEffect = (element1,element2)=>
{
    if(element2.classList.contains("sideActive"))
        element2.classList.remove("sideActive")
    element1.classList.add("sideActive")
}

side1.addEventListener("mouseenter",()=>{hoverEffect(side1,side2)})
side2.addEventListener("mouseenter",()=>{hoverEffect(side2,side1)})

side1.addEventListener("mouseleave",()=>side1.classList.remove("sideActive"))
side2.addEventListener("mouseleave",()=>side2.classList.remove("sideActive"))
