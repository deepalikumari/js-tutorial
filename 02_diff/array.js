const myArr = [0,1,2,3,4,9,5,6]
const myheros = ["shaktiman","nagrajj","naggin"]
const myArr2 = new Array(1,2,3,4)
console.log(myArr[1]);
myArr.push(6)
console.log(myArr);
myArr.unshift(9)//puts in beginning of array
console.log(myArr);
myArr.shift()
console.log(myArr);//9 which is added above get removes

//we can also ask some questions in array like
console.log(myArr.includes(9));
console.log(myArr.indexOf(3));


//using join operator in array will make the array type as string
const newArr = myArr.join()
console.log(myArr);
console.log(newArr);
console.log(typeof newArr);//string

//slice ans splice method
//interview
//in splice original array gets manipulated

console.log("A ",myArr);//original array

const myArr1 = myArr.slice(1,3)//perform slice operation
console.log(myArr1);//print after applying slice operation
console.log("B ",myArr);//print original array after modification

const myArr62 = myArr.splice(1,3) //splice
console.log(myArr62);
console.log("C ",myArr);//slice part gets remove. change in original array



