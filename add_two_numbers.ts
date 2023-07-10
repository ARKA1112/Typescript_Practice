function add_two_number(a: number, b:number): number {
    return a+b;
}


const num1: number = parseFloat(prompt("enter the first number:"));
const num2: number = parseFloat(prompt("Enter the second number:"));

const sum: number = add_two_number(num1, num2);


console.log(`The sum of ${num1} and ${num2} is ${sum}`);