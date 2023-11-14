//primitive and non-primitive datatypes
//primitive 7types: string , number, boolean, null , undefined,symbol,BigInt
//reference type/non-primitive  (we can pass refernce in it) : Array,objects,functions
//js is dynamic type
//JavaScript is a dynamically typed language. This means that variable types are determined at runtime, and you do not need to explicitly declare the type of a variable before using it. You can assign different types of values to a variable during its lifetime.

//For example, in JavaScript, you can do the following:

//let x = 10; // x is now a number
//x = "Hello"; // x is now a string
//x = true; // x is now a boolean

const id = Symbol('123')
const anotherid = Symbol('123') // here return type is called as symbol
console.log(id == anotherid);
//here symbol wont give same value
let use; //here use value will be undefined

const bigNumber = 789983676542790879n //n denotes big int no.
const heros =["shaktiman","nagraj","doga"] //arrays


let myObj = {
    name: "hina",
    age: 22,

}


const myfun = function(){
    console.log('world');
}

console.log(typeof myfun);
console.log(typeof bigNumber);


/////memories
//satck memory & heap memory
//stack(primitive) copy of original value
//heap(non-primitive) reference of original value

let str2 = "deeplaikumari"


//use stck to hold value as it is string
let myyoutube = "dk@gmail.com"
let anothername = myyoutube
anothername = "deepali kumari"
console.log(myyoutube);
console.log(anothername);



//heap reference will be same, so same output
//since below is the structure of object we are creating an object so it uses an heap to store valu

let user1 = {
    email: "dhkl",
    upi : "hjki"
} 
let user2 = user1
user2.email = "hjgty@gmail.com"
console.log(user1.email);
console.log(user2.email);
