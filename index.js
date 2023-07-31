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

// var etiqueta = document.querySelector("h1")
// var etiquetaTitulo = document.querySelector(".titulo")
// var etiquetaId = document.querySelector("#id")


// etiqueta.innerHTML = "despedida"
// etiquetaTitulo.style.color = "red"
// etiquetaId.innerHTML = "otra despedida"


// 2 ejercicio Heladería

// Crear un programa que pida al usuario ingresar, por separado, tres gustos de helado, y luego muestre un mensaje que diga, por ejemplo, "Aquí tiene su helado de chocolate, dulce de leche y menta granizada".

// var gustoUno = prompt("primer gusto")
// var gustoDos = prompt("segundo gusto")
// var gustoTres = prompt("tercer gusto")

// alert("Aquí tiene su helado de " + gustoUno + ", " + gustoDos + " y " + gustoTres)

// 3 Ejercicio Datos personales

// Crear un programa que pida al usuario ingresar, por separado, nombre, apellido, edad, nacionalidad, documento, y muestre luego un mensaje que diga: "Nuevo usuario agregado al sistema:" y liste todos los datos juntos.

// var nombre = prompt("ingrese su nombre")
// var apellido = prompt("ingrese su apellido")
// var edad = prompt("ingrese su edad")
// var nacionalidad = prompt("ingrese su nacionalidad")
// var documento = prompt("ingrese su documento")



// alert("Nuevo usuario agregado al sistema: " + nombre + ", " + apellido + ", " + edad + ", " + nacionalidad + " y " + documento)

// Años perro

// Crear un programa que pida ingresar una edad y devuelva el equivalente de esas edad en años perro.

// var edad = prompt("escriba la edad")

// var resultado = edad * 7

// alert("la edad ingresada es: " + edad + " y la edad perro es: "+ resultado)


// Días a segundos

// Crear un programa que pida ingresar una cantidad de días y muestre un mensaje con el resultado de la conversión en segundos.

// opcion 1

// var dias = prompt("ingrese numero de dia")

// var horas = dias * 24
// var minutos = horas * 60
// var segundos = minutos * 60

// alert("los dias ingresados fueron: " + dias + " y los segundos son: " + segundos)

// //opcion 2
// var segundo = dias * 86400
// alert("los dias ingresados fueron: " + dias + " y los segundos son: " + segundo)


// Área de un triangulo

// Crear un programa que pida al usuario ingresar el valor de la base y el valor de la altura de un triangulo, calcular su área y mostrarlo en un mensaje.

// var base = prompt("escribir la base")
// var altura = prompt("escribir la altura")

// alert("el area es: " + base * altura)