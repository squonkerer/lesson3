function makeGreeting1(name) {
    return 'Hello ' + name
}

const makeGreeting2 = (name) => {
    return 'Hello ' + name
}

const makeGreeting3 = name => 'Hello ' + name

console.log(makeGreeting1('John'))
console.log(makeGreeting2('John2'))
console.log(makeGreeting3('John3'))

const greet1 = () => {
    console.log(makeGreeting3('John4'))
}

greet1()
//setTimeout(greet1, 3000)

//setTimeout(() =>{console.log(makeGreeting3('John3'))} , 6000)

const colors = [
    'Red',
    'Green',
    'Blue',
    'White',
    'Black'
]

colors.forEach((color) => {console.log(`Base color ${color}`)})

let elements = colors.map((color => {
    return `<div>${color}<div/>`
}))

console.log(elements)

//desctruck
const greet = [
    'Blizzard',
    (name) => "Hello, " + name
]

const name1 = greet[0]
const makeGreeting4 = greet[1]

const [name2, makeGreeting5] = greet

console.log(makeGreeting4(name1))
console.log(makeGreeting4(name2))