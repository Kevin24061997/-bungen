// Aufgabe 1;
// satz des herons
const triangleArea = (a, b, c) => {
    const p = (a + b + c) / 2;
    return Math.sqrt(p * (p - a) * (p - b) * (p - c));
  };
  
console.log(triangleArea(3, 4, 5));

// Aufgabe 2;

// const displayString = () => {
//     console.log("Techstarter");
//   };
  
//   setInterval(displayString, 2000);
// console.log(displayString)

// Aufgabe 3:


var num1, num2;
num1 = 15;
num2 = 13;
var difference = function (num1, num2) {
    return Math.abs(num1 - num2);
}
if(num1 > num2){
	console.log((difference(num1, num2)*2));

}
else{
	console.log("Die erste Zahl war kleiner amk")
}

// Aufgabe 4:

var num1 = 44
var num2 = 49
var minNum = 50
var maxNum = 99
if(num1 >= minNum && num1 <= maxNum || num2 >= minNum && num2 <= maxNum){
	console.log("wahr")
}
else{
	console.log("false")
}

// Aufgabe 5:

function jedesNteElement(arr, n) {
    var result = [];
    for (var i = n - 1; i < arr.length; i += n) {
      result.push(arr[i]);
    }
    return result;
  }
  
  var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  var n = 3;
  var result = jedesNteElement(arr, n);
  console.log(result); 

// Aufgabe 6:

var str = "racecars"
var strCheck = str.split('').reverse().join('');
if(str === strCheck){
	console.log("Das Wort ist ein Palindrom")
}
else{
	console.log("Das Wort ist kein Palindrom")
}

// Aufgabe 7:
let stringCombinations = (str) => {
  let strLength = str.length;
  let result = [];
  let currentIndex = 0;
  while (currentIndex < strLength) {
    let char = str.charAt(currentIndex);
    let x;
    let arrTemp = [char];
    for (x in result) {
      arrTemp.push("" + result[x] + char);
    }
    result = result.concat(arrTemp);
    currentIndex++;
  }
  return result;
};
console.log(stringCombinations("dog"));

// Aufgabe 8:

var array6 = [1, 2, 2, 3, 4, 4, 5];
console.log("Before filtering non unique values: " + array6);
 
var unique = array6.filter((value, index) => {
  return array6.indexOf(value) === array6.lastIndexOf(value);
});
console.log("After filtering non unique values: " + unique);

// Aufgabe 9:

function first(array, n) {
    if (!Array.isArray(array) || array.length === 0) return [];
    if (n === undefined) return array[0];
    if (n < 0) return [];
    return array.slice(0, n);
  }

console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));
  

// Aufgabe 10:
function shuffleMyArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); 
      [array[i], array[j]] = [array[j], array[i]];
    }
    console.log(array);
  }
  let array = [1, 2, 3, 4, 5];
  shuffleMyArray(array);
  


