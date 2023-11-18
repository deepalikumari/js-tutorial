//below code wont merge the array but put array inside an array
const marvel = ["aa","ab","cd"]
const dc = ["ok","ij","ll"]
//marvel.push(dc)
//console.log(marvel); //[ 'aa', 'ab', 'cd', [ 'ok', 'ij', 'll' ] ]

//to access element we have to 
//console.log(marvel[3][1]); //ij

//same as push operation we can use concat , concat will work if we r creating new array
//marvel.concat(dc)
//console.log(marvel); //[ 'aa', 'ab', 'cd', [ 'ok', 'ij', 'll' ] ]


const all = marvel.concat(dc)
console.log(all);
//[ 'aa', 'ab', 'cd', 'ok', 'ij', 'll' ]

//spreading the individual elemnts of array
const all_new = [...marvel, ...dc]
console.log(all_new);

