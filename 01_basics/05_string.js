const name = "Deepali"
const repo = 30
console.log(name + repo + " value"); //old format
//new format 
console.log(`hello my name is ${name} and my repo count is ${repo}`);//string interpolation.use backtick esc below key

//declaring variable different method
const gameName = new String("deepalikumari")
console.log(gameName[0]);
console.log(gameName.__proto__);//can access prototype
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));//says in which position available
//read string methods in nbm articles

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-7)
console.log(anotherString); //not working as the starting index should be less than the ending index.

//can give negative value in substring
const newStr = "    hitesh   "
console.log(newStr.trim());

const url = "https://deepali-kum-ariwert-@gmail.com"
console.log(url.replace('wer','-dk'));
console.log(url.includes('deep'));
console.log(url.split('-'));