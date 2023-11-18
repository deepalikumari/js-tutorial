const score = 400
console.log(score);

const blnc = new Number(200);
console.log(blnc);
console.log(blnc.toString().length);
console.log(typeof blnc);
console.log(blnc.toFixed(2)); //get fix value after dceimal place
const otherNum = 123.8675439
console.log(otherNum.toPrecision(3));

const hundreads = 100000000
console.log(hundreads.toLocaleString());//by default it will give foreign standard
//for indian standard
console.log(hundreads.toLocaleString('en-IN'));

//max value min value
//Number contains many different types for Number
Number.MIN_VALUE
/////
//maths library come by default in JAVA



console.log(Math);
//math is an object which itself contains many values
//PI, SQRT,sign,round

console.log(Math.abs(-4));//absolute value, - becomes +
console.log(Math.round(4.3));//round is function
console.log(Math.ceil(4.2));//choose high value as name suggest
console.log(Math.floor(6.78));// gives low value
console.log(Math.min(9,7,88,2,3));
console.log(Math.max(9,2,3,1,4,56,8));
console.log(Math.random()); //always gives value between 0 and 1
console.log((Math.random()*10) + 1); //this gives value between 1 to 9


// to get values between and a particular range (max-min) is used, 
//to avoid 0 +1 is used
//to get the range from min is used

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
