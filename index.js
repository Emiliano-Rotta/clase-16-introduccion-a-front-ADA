//var let y const

//concatenacion



// var nombre = prompt("Por favor escriba su nombre")

// concatenacion de string
// console.log("Hola" -"Emiliano" + "! " )

// var a = 2 + 2   // 4
// console.log("a", a)

// var b = "2" + 2   // 22
// console.log("b", b)

// var c = "2" + "2"  // 22
// console.log("c", c)

// var d = 2 - 2  // 0
// console.log("d", d)

// var e = "2" - 2  // 0
// console.log("e", e)

// var f = "2" - "2" // 0
// console.log("f", f)

// var g = "a" + "a" // aa
// console.log("g", g)

// var h = "a" - "a" // NaN
// console.log("h", h)

// https://github.com/Ada-IT/ejercicios-frontend/blob/master/modulo-2/ejercicios/13-variables-datos-operadores.md

// Saludo

// Crear un programa que pida al usuario ingresar un nombre y apellido por separado, y luego muestre un mensaje que diga, "Hola {nombre} {apellido}, bienvenida a Ada".

// var nombre = prompt("Escribe tu nombre")
// var apellido = prompt("Escribe tu apellido")

// alert("Hola " + nombre + " " + apellido + " bienvenida a Ada."  )



// DOM

var etiqueta = document.querySelector("h1")
var etiquetaTitulo = document.querySelector(".titulo")
var etiquetaId = document.querySelector("#id")


etiqueta.innerHTML = "despedida"
etiquetaTitulo.style.color = "red"
etiquetaId.innerHTML = "otra despedida"