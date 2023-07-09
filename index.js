// Iteration 1: Names and Input

let hacker1 = "Angel"
console.log(`The driver's name is ${hacker1}`)

let hacker2 = "Jose"
console.log(`The navigator's name is ${hacker2}`)

//Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters!`)
}
else if (hacker2.length > hacker1.length) {
  console.log(`The navigator has the longest name, it has ${hacker2.length} characters!`)
}
else {
  console.log("We both have equally long names")
}

// Iteration 3: Loops

let driversName=""
let navigatorsName=""
for (let i=0; i<=hacker1.length; i++) {
  console.log(driversName.toUpperCase())
  driversName += hacker1[i] + " "
}

// //Iteration #3.2
let reversedHacker2=""
for (let i=hacker2.length-1; i>=0; i--) {
  reversedHacker2 += hacker2[i];
  console.log(reversedHacker2)
}

//Iteration #3.3

let result

  if(hacker1 < hacker2){
    result = "Driver name goes first."
  } else if (hacker2 < hacker1){
    result = "Yo, navigator goes first, definitely."
  } else {
    result = "What?! You both have the same name?"
  }

console.log(result)

/*** */


//Iteration Bonus#1 

// let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sapien velit, ornare vel purus id, lacinia pellentesque mi. Nam ut metus eu est condimentum varius. Integer condimentum mattis massa sit amet imperdiet. Mauris posuere, elit id condimentum venenatis, urna turpis dictum mi, vel blandit tortor ante at magna. Integer sit amet consequat libero, nec mollis magna. Quisque et nibh aliquam, pulvinar massa vitae, suscipit arcu. Pellentesque porta blandit velit, a blandit mauris tempor eu. Proin in tellus ut turpis condimentum iaculis. Sed ullamcorper iaculis justo, sed congue mauris blandit vitae. Nulla vel luctus mi. Proin quis sem porttitor, mattis orci in, consectetur risus. Nulla facilisi. Phasellus commodo fringilla felis blandit aliquet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam facilisis felis sed iaculis venenatis. Quisque eget hendrerit tellus.Proin et ac fermentum augue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer lorem nunc, rhoncus vitae finibus ac, porta sed lacus. Proin ac lobortis diam, placerat auctor velit. In eget tellus arcu. Curabitur elementum, quam et interdum consequat, libero quam luctus est, sed iaculis orci nulla quis tortor. Nam non erat metus. Phasellus laoreet orci tortor, at feugiat massa accumsan vel. Ut ut convallis libero. Nulla imperdiet eros erat, dapibus pharetra augue finibus eu. Aliquam eget finibus massa, in porttitor nulla. Curabitur ut scelerisque arcu.
//  Morbi non risus vitae nibh lacinia pulvinar. Aenean pharetra lorem in fermentum maximus. In hac habitasse platea dictumst. Donec viverra eros turpis, sed congue arcu cursus in. Nulla a arcu sed ligula semper mattis vitae nec ligula. Phasellus hendrerit quis quam et varius. Vivamus quis velit sagittis, fringilla purus a, vehicula justo. Curabitur non urna eget arcu suscipit tincidunt sit amet at risus. Vestibulum in consectetur ligula. Nullam vulputate magna nisi, eget ultrices nisl mattis et. Nam lobortis nibh nunc, quis feugiat leo porttitor eget. Proin mauris ex, lobortis consequat dapibus mollis, sollicitudin scelerisque ipsum. Suspendisse porta erat neque, egestas pharetra dui pharetra a. Phasellus venenatis nulla sed dictum blandit. Sed id ex posuere, aliquam risus sit amet, egestas lectus.`

//~~~solution 1: WRONG
// let etWords= 0;

// for (i=0; i<longText.length; i++) {
//   if (longText[i].indexOf(`et`)) {
//     etWords++;
//      }
// }
// console.log("Et words is equal to: " + etWords);

// ~~~solution 2: WRONG
// while (let i < longText.length -1; i=0; i++) {
// 	if (longText[i] === "et") {
// 		// Go to the next iteration
// 		etWords++
// 	}
// }
// 	console.log("Et words is equal to: " + etWords);


// CORRECT SOLUTION: Iteration Bonus #1 
let wordToCount = "et"
let words = longText.split(" ")
let count = 0

for (let i = 0; i < words.length; i++){
  if (words[i] === wordToCount) {
    count++
  }
}

console.log(`The word "${wordToCount}" appeared ${count} times.`)

//Iteration Bonus#2


let phraseToCheck= "wolf flow"
let isPalindrome = true;

for (let i=0; i< phraseToCheck.length; i++) {
  let j=phraseToCheck.length - 1 -i;
   if(i>=j) {
    break;
 }
  if (phraseToCheck[i] !== phraseToCheck[j]) {
     isPalindrome=false;
     continue
   }
 }
 if (isPalindrome) {
   console.log ("The phrase is a Palindrome.")
 } else {
   console.log("The phrase is not a Palindrome.")
 }
