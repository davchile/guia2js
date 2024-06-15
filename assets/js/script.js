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

const pass=document.querySelector("#password")  //declaro el input
const btn=document.querySelector("#btn")    //declaro el boton para escucharlo
const result=document.querySelector("#result")  //declaro el texto de resultado

btn.addEventListener("click", ()=> {
    const value = pass.value    //me traigo el valor del password
    if(value === "secret") {    //agrego la condicion y la comparo con el input
        result.innerHTML = "Lo lograste"    //genero el resultado
    } else {
        result.innerHTML = "No lo lograste"
    }            
})


