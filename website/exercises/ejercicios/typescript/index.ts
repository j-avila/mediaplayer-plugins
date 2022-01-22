// boolean

let muted: boolean = true
muted = false


// numeros
let age = 6
let numerador: number = 42
let denominador: number = age
let resultado = numerador / denominador

// string
let nombre: string = "Jose"
let saludo: string = `Hola, me llamo ${nombre}`


// arreglos
let people: string[] = []
people = ['isabel', 'nicole', 'raul']
// people.push(400)

let pepopleAndNumbers: Array<string | number> = []
pepopleAndNumbers.push(400)
pepopleAndNumbers.push("Ricardo")


// Enun
enum Color {

  Rojo = "Rojo",
  Verde = "Verde",
  Azul = "Azul"
}

let colorFavorito: Color = Color.Verde
console.log(`Micolor favorito es ${colorFavorito}`)

// any
let comodin: any = "joker"
comodin = { type: 'WildCard' }

// Object
let someObject: object = { type: 'WildCard' }
someObject = { ...someObject, color: 'red' }


function add(a: number, b: number): number {
  return a + b
}

const sum = add(3, 4)

function createAdder(a: number): (number) => number {
  return function (b: number) {
    return b + a
  }
}

const addFour = createAdder(4)
const fourPlus6 = addFour(6)
console.log(fourPlus6)

// parametros opcionales
function fullName(firstName: string, lastName?: string, charge: string = 'agente') {
  return `${charge}: ${firstName} ${lastName}`
}

const jose = fullName('jose', 'avila',)

console.log(jose)