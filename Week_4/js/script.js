// LECTURE 40-41
/*
var message = "in global";
console.log("global: message = " + message);

var a = function () {
    var message = "inside a";
    console.log("a: message = " + message);

    function b(){
        console.log("b: message = " + message);
    }

    b();
}

a();
*/

// LECTURE 42
/* 
var x;
console.log(x);

if(x == undefined){
    console.log("x is undefined");
}

x = 5;
if(x == undefined){
    console.log("x is undefined");
}else {
    console.log("x has been defined");
}
*/

// LECTURE 43
/* 
// ***String concatination***
var string = "Hello";
string += " World";
console.log(string + "!");

// ***** Regular math operators: +, -, *, / *****
console.log((5+4)/3);
console.log(undefined/5);

// ***** Equality
var x = 4, y = 4;
if(x==y){
    console.log("x=4 is equal to y=4");
}
x = "4";
if(x==y){
    console.log("x='4' is equal to y=4");
}

// ***** Strict Equality
if(x===y){
    console.log("x='4' is equal to y=4");
}else {
    console.log("Strict: x='4' is NOT equal to y=4");
}

// ****** If statement (all false)
if(false || null || undefined || "" || 0 || NaN){
    console.log("This line won't ever execute");
}else {
    console.log("All false");
}

// ***** If statement (all true)
if(true && "hello" && 1 && -1 && "false"){
    console.log("All true");
}

// ****** Best practice for {} style
// Curly brace on the same or next line...
// Is it just a style?
function a()
{
    return
    {
        name: "Yaakov"
    };
}

function b() {
    return {
        name: "Yaakov"
    };
}

console.log(a());
console.log(b());

// ***** For loop
var sum = 0;
for(var i = 0; i < 10; i++){
    console.log(i);
    sum = sum + i;
}
console.log("Sum of 0 to 9 is: " + sum);
*/

// LECTURE 44
/* 
// Default values
function orderChickenWith(sideDish){
    // if(sideDish === undefined){
    //     sideDish = "whatever!";
    // }
    // OR
    sideDish = sideDish || "whatever!";
    console.log("Chicken with " + sideDish);
}
orderChickenWith("noodles");
orderChickenWith();
*/

// LECTURE 45
/* 
// Object creation
// var company = new Object();
// company.name = "Facebook";
// company.ceo = new Object();
// company.ceo.firstName = "Mark";
// company.ceo.favColor = "blue";


// console.log(company);
// console.log("Company CEO name is: " + company.ceo.firstName);

// console.log(company["name"]);
// var stockPropName = "stock of company";
// company[stockPropName] = 110;

// console.log("Stock price is: " + company[stockPropName]);

// Better way: object literal
var facebook = {
    name: "Facebook",
    ceo: {
        firstName: "Mark",
        favColor: "blue"
    },
    "stock of company": 110
};
console.log(facebook);
console.log(facebook.ceo.firstName);
*/

// LECTURE 46
/* 
// Functions are First-Class Data Types
// Functions are objects
function multiply(x , y){
    return x*y;
}
console.log(multiply(5,3));
multiply.version = "v.1.0.0";
console.log(multiply.version);

// Function factory
function makeMultiplier(multiplier){
    var myFunc = function(x){
        return multiplier * x;
    };
    return myFunc;
}
var multiplyBy3 = makeMultiplier(3);
console.log(multiplyBy3(10));
var doubleAll = makeMultiplier(2);
console.log(doubleAll(100));


// Passing functions as arguments
function doOperationOn(x , operation){
    return operation(x);
}
var result = doOperationOn(5,multiplyBy3);
console.log(result);
result = doOperationOn(100, doubleAll);
console.log(result);
*/

// LECTURE 47
/* 
// Copy by Reference vs by Value
var a = 7;
var b = a;
console.log("a: " + a);
console.log("b: " + b);

b = 5;
console.log("after b update:");
console.log("a: " + a);
console.log("b: " + b);


var a = { x: 7};
var b = a;
console.log(a);
console.log(b);

b.x = 5;
console.log("after b.x update:");
console.log(a);
console.log(b);


// Pass by reference vs by value
function changePrimitive(primitive){
    console.log("in changePrimitive...");
    console.log("before:");
    console.log(primitive);

    primitive = 5;
    console.log("after:");
    console.log(primitive);
}
var value = 7;
changePrimitive(value);
console.log("after changePrimitive, orig value:");
console.log(value);


function changeObject(objValue){
    console.log("in changeObject...");
    console.log("before:");
    console.log(objValue);

    objValue.x = 5;
    console.log("after:");
    console.log(objValue);
}
value = {x: 7};
changeObject(value);
console.log("after changeObject, orig value:");
console.log(value);
*/

// LECTURE 48
/* 
// Function constructors
function Circle(radius) {
    this.radius = radius;
}
Circle.prototype.getArea =
    function () {
        return Math.PI * Math.pow(this.radius, 2);
    };

var myCircle = new Circle(10);
console.log(myCircle);

var myOtherCircle = new Circle(20);
console.log(myOtherCircle);
*/

// LECTURE 49
/* 
// Object literals and "this"
var literalCircle = {
    radius: 10,

    getArea: function(){
        var self = this;
        console.log(this);

        var increaseRadius = function(){
            self.radius = 20;
        };
        increaseRadius();
        console.log(this.radius);
        return Math.PI * Math.pow(this.radius, 2);
    }
};

console.log(literalCircle.getArea());
*/

// LECTURE 50
/* 
// Arrays
var array = new Array();
array[0] = "Yaakov";
array[1] = 2;
array[2] = function (name) {
    console.log("Hello " + name);
};
array[3] = {course: "Html, CSS & JS"};

console.log(array);
array[2](array[0]);
console.log(array[3].course);

// Short hand array creation
// var names = ["Yaakov", "John", "Joe"];
// console.log(names);

// names[50] = "Jim";

// for(var i = 0; i < names.length; i++){
//     console.log("Hello " + names[i]);
// }

var names2 = ["Yaakov", "John", "Joe"];
var myObj = {
    name: "Yaakov",
    course: "Html/CSS/JS",
    platform: "Coursera"
};
// for(var prop in myObj){
//     console.log(prop + ": " + myObj[prop]);
// }
names2.greeting = "Hi!";
for( var nm in names2){
    console.log("Hello " + names2[nm]);
}
*/

// LECTURE 51
/* */
// Closures
function makeMultipliers (multiplier){
    return (
        function(x){
            return multiplier * x;
        }
    );
}

var doubleAll = makeMultipliers(2);
console.log(doubleAll(10));