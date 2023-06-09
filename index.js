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

// let elem = document.getElementById('click');
// console.log(elem);
// let elemClass = document.getElementsByClassName('container')
// console.log(elemClass);

// elemClass[0].style.background = "Yellow";
// elemClass[0].classList.add("bg-primary")
// elemClass[0].classList.add("text-success")
// console.log(elem.innerHTML);
// console.log(elem.innerText);

// console.log(elemClass[0].innerHTML);
// console.log(elemClass[0].innerText);

// tn = document.getElementsByTagName('div')
// console.log(tn)

// createdElement = document.createElement('p');
// createdElement.innerText = "This is a created paragraph!!!";
// tn[0].appendChild(createdElement);

// createdElement2 = document.createElement('b');
// createdElement2.innerText = "This is a created bold!!!";

// tn[0].replaceChild(createdElement2, createdElement);

// // Selecting using Query
// sel = document.querySelector('.container');
// console.log(sel)

// sel = document.querySelectorAll('.container');
// console.log(sel)




/*#################################################################################### */
// Events in JavaScript

/*Events in JavaScript are actions or occurrences that happen within a web page.They allow you to respond to user interactions,
browser actions, or other events that occur in the DOM(Document Object Model).You can attach event handlers, also known as event
listeners, to elements on the page to specify what should happen when an event occurs.
Event handlers are functions that are executed when an event is triggered. They are typically written as
callback functions, which means they are passed as arguments to event listener methods and executed when the event is fired.

To attach an event handler to an element, you can use the addEventListener() method.
This method takes two arguments: the event type (e.g., "click", "keyup", "submit") and the callback function to be executed when the event occurs.

*/

/*############################################################################################# */
//Arrow function
// function summ(a, b) {
//     return (a + b);
// }

// summ = (a, b) => {
//     return (a + b);
// }
// log_gar = () => {
//     console.log("I am your log")
// }
// SetTimeout and setInterval in javaScript
//setTimeout(log_gar, 2000);
// clr = setInterval(log_gar, 2000);

// Use clearInterval(clr) /clearTimeout(clr) to cancel setInterval/setTimeout

// JavaScript localStorage:

/*
Local storage is a feature provided by modern web browsers that allows web applications to store 
data locally on a user's device. It provides a simple key-value storage mechanism and is typically 
used to store small amounts of data that need to persist across multiple visits or page refreshes.

Here's an example of how to use local storage in JavaScript:

1. Storing data:
To store data in local storage, you can use the localStorage.setItem() method. 
It takes two parameters: the key and the value you want to store.

localStorage.setItem('username', 'John');

This will store the value 'John' with the key 'username' in the local storage.

2. Retrieving data:
To retrieve data from local storage, you can use the localStorage.getItem() method. 
It takes the key as a parameter and returns the corresponding value.

var username = localStorage.getItem('username');
console.log(username);  // Output: John

This will retrieve the value associated with the key 'username' 
from local storage and assign it to the variable username.

3. Removing data:
To remove data from local storage, you can use the localStorage.removeItem() method. 
It takes the key as a parameter and removes the corresponding key-value pair.

localStorage.removeItem('username');

This will remove the key-value pair with the key 'username' from local storage.

4. Clearing all data:
If you want to remove all data stored in local storage, you can use the localStorage.clear() method.

localStorage.clear();


NOTE!!! ---> This will remove all key-value pairs stored in local storage.

It's important to note that the data stored in local storage is specific to the domain and protocol of 
the web page. Each domain and protocol combination has its own separate local storage space, so data stored 
by one website will not be accessible by another.

Also, be mindful of the storage limit imposed by the browser, which is typically around 5-10MB. 
If you exceed this limit, attempting to store more data may result in an error.

Local storage is a convenient tool for storing small amounts of data on the client-side, 
but it's not suitable for sensitive information or large datasets. For those use cases, 
server-side storage or databases are more appropriate.
*/


// JSON
obj = { name: "Aayush", age: 20 }
jso = JSON.stringify(obj);
console.log(typeof jso)