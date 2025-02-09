import { log } from 'console';

let found: boolean = true;
let grade: number = 88.6;
let firstName: string = 'Anup';
let lastName: string = 'Kumar';

// let's break it !

/*
found = 0;
grade = 'A';
firstName = 1;
lastName = true;
*/

console.log(found);
console.log('The grade is : ' + grade);
console.log('Hi ' + firstName + ' ' + lastName);

// Use template Strings
console.log(`Hello ${firstName} ${lastName}`);
