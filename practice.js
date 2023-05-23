
/*Exercise 1: Counting from 1 to 10
Write a program that uses a for loop to print the numbers from 1 to 10.*/
// for (let num = 1; num <= 10; num++) {
//     console.log(num);
// }

/* Exercise 2: Summing numbers
Write a program that calculates the sum of numbers from 1 to 10 using a for loop and prints the result.*/

// let sum = 0;
// for (i = 1; i <= 10; i++) {
//     sum += i;

// }
// console.log("The sum is: ", sum);

/*Exercise 3: Printing even numbers
Write a program that uses a for loop to print all even numbers from 2 to 20.*/

// for (let even = 2; even <= 20; even++) {
//     if (even % 2 == 0) {
//         console.log(even)
//     }

// }

/*Exercise : Printing odd numbers
Write a program that uses a for loop to print all odd numbers from 1 to 50.*/

// for (let odd = 1; odd <= 50; odd++) {
//     if (odd % 2 == 1) {
//         console.log(odd);
//     }

// }

/*Exercise 4: Repeating a string
Write a program that asks the user for a string and a number, and then prints the string that many times using a for loop. */

let inputA = prompt("Give a string: ");
let inputB = parseInt(prompt("Give a number: "));
let repeate = "";

if (isNaN(inputB) || inputB <= 0) {                      //NaN = Not a Number
    console.log("Invalid input, Try again!!!");
}
else {
    for (let i = 0; i < inputB; i++) {
        repeate += inputA;
    }
    console.log("repeated : ", repeate)
}

