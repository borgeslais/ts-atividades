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

let employee: {
    readonly id: number,
    namer?: string // ? goes for optional, but not recommended
} = { id: 1, name: '' };
employee.name = "Mosh"; // Not correct because mosh is not a number
employee.id = 0;
// on current implementation employee can have changed id
// adding readonly modifier on id prevents this situation



// How to define a function or a method:

let employee: {
    readonly id: number,
    name: string
    retire: (date: Date) => void
} = { 
    id: 1,
    name: 'Mosh',
    retire: (date: Date) => { // arrow function
        console.log(date);
    }
};

// Type Aliases : to make structure more readable

type Employee = {
    readonly id: number,
    name: string
    retire: (date: Date) => void
}

let employee: Employee = {
    id: 1,
    name: 'Mosh',
    retire: (date: Date) => { // arrow function
        console.log(date);
    }
};

// Union Type

function kgToLbs(weight: number | string) {
    // Narrowing
    if (typeof weight === 'number') {
        return weight * 2.2;
    }
    else {
        return parseInt(weight) * 2.2;
    }
}

kgToLbs(10);
kgToLbs("10kg");


// Intersection Types

let weight: number | string; // number OR string
let weight: number & string; // number AND string at the same time

type Draggable = {
    drag: () => void
};

type Resizable = {
    resize: () => void
}

type UIWidget = Draggable & Resizable;
let textBox: UIWidget = {
    drag: () => {},
    resize: () => {}
}


// Literal Types - limit the values we can sign to a variable

type Quantity = 50 | 100; // Literal type here
let quantity: Quantity = 100;

type Metric = 'cm' | 'inch';

// Nullable Types

function greet(name: string) {
    console.log(name.toUpperCase());
}

greet(null) // Not correct - null is not a parameter of type string

// To make code be rendered even if the value is null:

function greet(name: string | null) {
    if(name)
        console.log(name.toLocaleUpperCase());
    else
        console.log('Hola!');
}

greet(null); // can't pass greet(undefined) unless if it is used in the union operator



// Optional Chaining

type Customer = {
    birthday: Date
};

function getCustomer(id: number): Customer | null | undefined {
    return id === 0 ? null : { birthday: new Date()};
}

let customer = getCustomer(0);
if(customer !== null && customer !== undefined) // if the value is not null AND not undefined
    console.log(customer.birthday);

// This also works - Optional property operator
let customer = getCustomer(0);
console.log(customer?.birthday);

// Optional element access operator
// instead of writing: if (customers !== null && customers !== undefined)
//                         customers[0]
// Write:
// customers?.[0]

// Optional call operator
let log: any = null;
log('a'); // gonna crash
// Write like this to make execution only if log is referencing an actual function, otherwise get 'undefined'
log?.('a');