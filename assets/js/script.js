// edad = 4
// if(edad<18) {
//     console.log("Lo siento, No puede pasar al club")
// }

// edad = prompt("Ingrese su edad")
// if(edad<18) {
    //     console.log("Lo siento, No puede pasar al club")
    // }

// edad = 4
// if (edad < 18) {
//     console.log("1")
//     console.log("2")
//     console.log("3")
//     a = 2 + 2
//     console.log(a)
// }

// temperatura = 30
// if (temperatura >= 25) {
//     console.log("Hace calor")
// }

// password = "secret"
// if (password == "secret") {
//     alert("conoces el password")
// }

// const pass=document.querySelector("#password")  //declaro el input
// const btn=document.querySelector("#btn")    //declaro el boton para escucharlo
// const result=document.querySelector("#result")  //declaro el texto de resultado

// btn.addEventListener("click", ()=> {
//     const value = pass.value    //me traigo el valor del password
//     if(value === "secret") {    //agrego la condicion y la comparo con el input
//         result.innerHTML = "Lo lograste"    //genero el resultado
//     } else {
//         result.innerHTML = "No lo lograste"
//     }            
// })

// pedazosDeTorta = 3
// invitados = 4

// cantidadDePedazosPorInvitado = pedazosDeTorta / invitados

// if(cantidadDePedazosPorInvitado >= 1) {
//     alert("Alcanza para todos")
// }
//     else {
//         alert("Anda a comprar mas torta por fa")
// }

// const torta = document.querySelector("#torta")
// const invitados = document.querySelector("#invitados")
// const btn = document.querySelector("#calculate")

// btn.addEventListener("click", () => {
//     const tortaValue = torta.value
//     const invitadosValue = invitados.value
//     const tortaPorInvitado = tortaValue / invitadosValue
//     if (tortaPorInvitado >= 1) {
//         alert("Alcanza para todos")
//     } else {
//         alert("Compra más torta pollo")
//     }
// })

// const width = document.querySelector("#width")
// const btn = document.querySelector("#send")

// btn.addEventListener("click", () => {
//     const widthValue = width.value 
//     if (widthValue < 576) {
//         alert("xs")
//     } else if (widthValue < 768) {
//         alert("sm")
//     } else if (widthValue < 962) {
//         alert("md")
//     } else if (widthValue < 1200) {
//         alert("xl")
//     } else {
//         alert("xxl")
//     }
// })

// const height = document.querySelector("#height")
// const weight = document.querySelector("#weight")
// const btn = document.querySelector("#calculate")

// btn.addEventListener("click", () => {
//     const heightValue = height.value
//     const weightValue = weight.value
//     const imc = weightValue / (heightValue * heightValue)
//     if (imc <= 24.9) {
//         alert("tienes un IMC normal")
//     } else if (imc > 25) {
//         alert("sos un gordo lechón")
//     } else {
//         alert("sos una máquina")
//     }
// })

// a = prompt("e-mail")
// b = prompt("password")

// if (a == "davchile@hotmail.com" && b == "secreto") {
//     alert("yes")
// } else {
//     alert("nop")
// }

// const current = document.querySelector("#current")
// const before = document.querySelector("#before")
// const btn = document.querySelector("#send")

// btn.addEventListener("click", () => {
//     const currentValue = current.value
//     const beforeValue = before.value
//     if (currentValue != "" || beforeValue != "") {
//         alert("Correcto")
//     } else {
//         alert("Incorrecto")
//     }
// })

const opt1 = document.querySelector("#opt1")
const opt2 = document.querySelector("#opt2")
const btn = document.querySelector("#send")

btn.addEventListener("click", () => {
    const opt1Checked = opt1.checked
    const opt2Checked = opt2.checked
if (opt1Checked == true && opt2Checked == true) {
    alert("Los dos elementos están marcados") 
} else {
    alert("Uno de los elementos no está marcado")
}
})