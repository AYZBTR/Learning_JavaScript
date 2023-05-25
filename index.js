//*****JavaScript variables.
/*o declare a variable in JavaScript, you can use the var, let, or const keywords.*/
// What are variables? -> Containers to store data values

// var number1 = 34;
// var number2 = 56;

// console.log(number1 + number2)

// var myVar = 10; // using var
// let myLet = "Hello"; // using let
// const myConst = [1, 2, 3]; // using const

/* ################################################################################## */


// *****Data types in JavaScript
//Numbers:
var num1 = 455;
var num2 = 56.44;

// String:
var str1 = "This is a String"
var str2 = 'This is also a String'

// Objects
var marks = {
    ravi: 34,
    subham: 78,
    ram: 66.77

}

// console.log(marks);

// Booleans
var a = true;
var b = false;

// console.log(a);

// Undefined data types...
// var und = undefined;
var und;
// console.log(und);

//Null data types
var n = null;
// console.log(n);

/*At a very high level there are 2 types of data types in data types in data types:
1. Primitive data types: undefined, null, numbers, string, boolean, symbol
2. Reference data types: Arrays and Objects
*/

//arrays data types ----> Collections
var arr = [1, 2, "Hello World", 4, 5];
// console.log(arr);

/* ################################################################################## */


// Operators in JavaScript
// 1. Arithmetic Operators
var a = 100;
var b = 10;
// console.log("The value of a + b is", a+b);
// console.log("The value of a - b is", a-b);
// console.log("The value of a / b is", a/b);
// console.log("The value of a * b is", a*b);

//2. Assignment Operators:
var c = b;
//c +=2;
//c -=2; // c = c-2
//c /=2;
//c *=2;
//console.log(c);

// 3. comparision operators

var x = 34;
var y = 56;

/*console.log(x==y);
console.log(x>=y);
console.log(x<=y);
console.log(x>y);
console.log(x<y);
*/


// 4. Logical Operators

// A. Logical AND (&&) -> True && True is always only TRUE!!!
// console.log(true && true)   //Output is--> True
// console.log(true && false)  //Output is--> False
// console.log(false && true)  //Output is--> False
// console.log(false && false) //Output is--> False

/* B. Logical OR (||) --> Either one or the other must be true (Duita ma kunai 
eeuta true vayo vane true hunxa)*/
// console.log(true || true) //Output is --> True
// console.log(true || false) //Output is--> True
// console.log(false || true) //Output is--> True
// console.log(false || false) //Output is--> False


/* C. Logical NOT (!)  --> when you apply the logical NOT operator to a Boolean value, 
it will return the opposite value (False lai true... True lai False). For example:*/
// console.log(!false); //--> Output is True
// console.log(!true); //--> Output is False

/* ################################################################################## */

// FUNCTIONS in JavaScript

function avg(a, b) {
    return (a + b) / 2;
}
c1 = avg(4, 6);
c2 = avg(100, 200);
// console.log(c1,c2);

/* ########################################################################### */

//Conditional Statement in JavaScript

// var age = prompt("Input your age:");
// 1. Single if Statement
// if (age>=18){
//     console.log('You can drink! ');
// }


// 2. If-Else statement

// if (age>=18){
//     console.log('You can drink! ');
// }
// else{
//     console.log('You cannot drink!');
// }

// 3 .if-else ladder
// if (age >= 21){
//     console.log("You can buy high percent alcoholic drinks!  ");
// }
// else if(age == 18 || age ==19 || age ==20 || age ==21) {
//     console.log("You can buy alcoholic product up to 8% alcohol.");

// }
// else if(age > 30) {
//     console.log("You can definately buy high percent alcoholic drinks!");

// }
// else  {
//     console.log("You can get Milk!");

// }
// console.log("End of ladder!");

/*################################################################################ */

// Loops in JavaScript
// 1. For Loop
//var arr = ['cat', 'Dog', 'cow', 'Lion', 'Tiger', 'Cheetah']

// for(var i = 0; i<arr.length;i++){
//     console.log(arr[i])
// }


// 2. For each Loop
// arr.forEach(function(element){
//     console.log(element);
// })

// 3. While Loop:

// const ac = 0;
// ac = ac + 1;
// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let j = 0;
// while (j < arr.length) {
//     console.log(arr[j]);
//     j++;
// }

//4. Dowhile loop
// do {
//     console.log(arr[j]);
//     j++;

// } while (j < arr.length);

/*####################################################################################### */

// Break and Continue Statement:
//Break Examples:
// for (let i = 1; i <= 5; i++) {
//     if (i === 3) {
//         break; // terminates the loop when i equals 3
//     }
//     console.log(i);
// }



// //Continue example:
// let i = 0;
// while (i < 5) {
//     i++;
//     if (i === 3) {
//         continue; // skips the iteration when i equals 3
//     }
//     console.log(i);
// }

//In this example, when i becomes equal to 3, the continue statement is encountered,
//and the current iteration is skipped. The loop continues with the next iteration.

/*############################################################################################ */



// let myArr = ["Coke", "Fanta", "Sprite", 77, null, true];
// Array Methods in Javascript
//console.log(myArr.length); //--> Returning the length of the array.
//myArr.push("Aayush") //---> Returning Value Aayush to the Array
//myArr.pop() //---> Removing last element from array
//myArr.shift() //---> Removing first element from array
// const newLen = myArr.unshift("Aayush")
// console.log(newLen)

// console.log(myArr);

// Note: Explore other methods by yourself!!!

/*####################################################################################### */
//String Methods:

// let myString = "My name is Aayush"
// console.log(myString.length)
// console.log(myString.indexOf("Aayush"))
// console.log(myString.lastIndexOf("Aayush"))
// console.log(myString.slice(1, 12))
// console.log(myString.replace("Aayush", "Bhattarai"))

/*############################################################################################ */
// Dates in JavaScript
// let myDate = new Date()
// console.log(myDate.getDay());

// There are lots of dates method in js explore it!!

/*############################################################################################# */

// DOM Manipulation in Js (DOM stands for Document Object Model)

let elem = document.getElementById('click');
// console.log(elem);
let elemClass = document.getElementsByClassName('container')
// console.log(elemClass);

// elemClass[0].style.background = "Yellow";
elemClass[0].classList.add("bg-primary")
elemClass[0].classList.add("text-success")
// console.log(elem.innerHTML);
// console.log(elem.innerText);

// console.log(elemClass[0].innerHTML);
// console.log(elemClass[0].innerText);

tn = document.getElementsByTagName('div')
console.log(tn)

createdElement = document.createElement('p');
createdElement.innerText = "This is a created paragraph!!!";
tn[0].appendChild(createdElement);

createdElement2 = document.createElement('b');
createdElement2.innerText = "This is a created bold!!!";

tn[0].replaceChild(createdElement2, createdElement);

// Selecting using Query
sel = document.querySelector('.container');
console.log(sel)

sel = document.querySelectorAll('.container');
console.log(sel)