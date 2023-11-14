const name = "Deepali"
const repo = 30
console.log(name + repo + " value"); //old format
//new format 
console.log(`hello my name is ${name} and my repo count is ${repo}`);//string interpolation.use backtick esc below key

//declaring variable different method
const gameName = new String("deepalikumari")
console.log(gameName[0]);
console.log(gameName.__proto__);//can access prototype