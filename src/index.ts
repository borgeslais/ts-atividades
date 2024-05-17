let sales = 123_456_789;
let course = 'TypeScript';
let is_published = true;
let level;
level = 1;
level = "a";

function render(document: any){
    console.log(document);
}

// Arrays
// Viável em js mas inviável em ts porque há mistura de tipos de variáveis
let numbers = [1, 2, 3, "4"];

// Correction
let numbers: number[] = [1, 2, 3];
// ou
let numbers= [1, 2, 3];

// Empty array
// Not correct:
let numbers = [];

 // Correct
 let numbers: number[] = [];

 // Code completion: ao adicionar "." se observa métodos e propriedades do objeto número 
numbers.forEach(n => n.)

// Tuples - Útil com 2 valores
// 1, 'Mosh'
let user: [number, string] = [1, "Mosh"]; // Se adicionar mais um elemento terá erro
user.push(1);

// Enums - Related constants

const small = 1;
const medium = 2;
const large = 3;
    //PascalCase
    enum Size {Small, Medium, Large};
    // Renumeração de index
    enum Size {Small = 1, Medium, Large};
    // Renumeração para string
    enum Size {Small = "s", Medium = "m", Large = "l"};

// How to use enums:
enum Size {Small = 1, Medium, Large};
let mySize: Size = Size.Medium;
console.log(mySize);

// Constante = código otimizado
const enum Size {Small = 1, Medium, Large};
let mySize: Size = Size.Medium;
console.log(mySize);

// Functions - Specify the return type

function calculateTax(income: number, taxYear: number): number{
    if (taxYear < 50_000)
        return income * 1.2;
        // By deafult returns 'undefined' - not correct - we need a number
    return income * 1.3;
}
// Arguments = Parameters
calculateTax(10_000, 2022);

// Giving only one argument:

function calculateTax(income: number, taxYear?: number): number{
    if ((taxYear || 2022) < 50_000) // If the value of taxYear is not passed, 2022 will be used
        return income * 1.2;
        // By deafult returns 'undefined' - not correct - we need a number
    return income * 1.3;
}
// Arguments = Parameters
calculateTax(10_000);

// Setting the value of a parameter as default:

function calculateTax(income: number, taxYear = 2022): number{
    if (taxYear < 50_000)
        return income * 1.2;
    return income * 1.3;
}
// 2023 will override 2022
calculateTax(10_000, 2023);



// Objects

let employee = { id: 1 };
employee.name = "Mosh"; // Not correct because mosh is not a number
