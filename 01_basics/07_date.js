//read from mdn
//january 1,1970 start
let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toJSON());
console.log(typeof myDate);

let myCreated = new Date(2023, 0, 23)
console.log(myCreated.toDateString());

let mycretaedDate = new Date("01-14-2023")
console.log(mycretaedDate.toLocaleString());

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

`${newDate.getDay()} and the time`

newDate.toLocaleString('default',{
    weekday: "long"
})