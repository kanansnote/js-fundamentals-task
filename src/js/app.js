"use strict";

// Task 1

// const turnOffButton = document.getElementById('turnOffButton');
// const turnOnButton = document.getElementById('turnOnButton');
// const image = document.querySelector('img');

// turnOffButton.addEventListener("click", function () {
//     image.src = './src/img/pic_bulboff.gif';
// })

// turnOnButton.addEventListener("click", function () {
//     image.src = './src/img/pic_bulbon.gif';
// });

// Task 2

// function squareSum(numbers){
//     numbers = [1, 2, 2];
//     let sum = 0;

//     for (let i = 0; i < numbers.length; i++) {
//         let numbersPowed = numbers[i]**2;
//         sum += numbersPowed;
//         console.log(powedNumbersAdded);
//     }
// }

// squareSum();

// Other Version

// const arr =[1,2,3]

//  [1,2,3]  => 1*2 + 22 + 3*2 = 14
// 1) arrayin butun elementlerini gezmek ucun dongu (for) yaradiriq
// 2) her elenti kvadrata yukseldirik
// 3) her kvadrata yukseltikden sonra bir biri ile toplayib bir deyiskende
// - saxlayiriq

// function squareSum(arr) {
//     let sum = 0; // 1 + 4 + 9
//     for (let i = 0; i < arr.length; i++) {

//         // sum += Math.pow(arr[i], 2);

//         sum =sum + arr[i]**2;
//     }
//     return sum;
// }
// console.log(squareSum([1, 2, 2, 2]));
// console.log(squareSum([1, 2, 3]));
// console.log(squareSum([1, 2]));
// console.log(squareSum([0, 3, 4, 5]));

// Task 3

// function findUniqueElements(text) {
//     const arr = text.split(",");

//     const result = [];

//     // const alternateResult = new Set(arr);
//     // console.log([...alternateResult]);

//     for (let item of arr) {
//         if(!result.includes(item)) {
//             result.push(item);
//         }
//     }

//     console.log(result.join(","));
// }

// findUniqueElements('html, css, js, html, bootstrap, js, react');

// Task 4

// function camelize(text) {

// My Code
// let strArray = str.split('-');
// // console.log(strArray);
// let arrayCamelize = strArray[strArray.length - 1];
// let firstLetterUppercased = arrayCamelize.slice(0, 1).toUpperCase();
// let otherRemainingsFromSlice = arrayCamelize.slice(1);
// let remainingString = strArray[0] + firstLetterUppercased + otherRemainingsFromSlice;
// let firstDashedWord = ;
// console.log(remainingString);

// Mentor's Code

//     const arr = text.split('-');
//     const newArr = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (i == 0) {
//             newArr.push(arr[i]);
//         } else {
//             //newArr.push(arr[i][0].toUpperCase() + arr[i].slice(1));
//             newArr.push(arr[i].replace(arr[i][0], arr[i][0].toUpperCase()))
//         }
//     }

//     console.log(newArr.join(""));
// }

// camelize('background-color') == 'backgroundColor';
// camelize('list-style-image') == 'listStyleImage';
// camelize('-webkit-transition') == 'WebkitTransition';

// Task 5

// function minMax(arr) {
//     let min = arr[0];  //2
//     let max = arr[0];  // 445

//     for (let i = 0; i<arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i];
//         }

//         if (arr[i] < min) {
//             min = arr[i]; // 445 > 3
//         }
//     }

//     console.log(`Min: ${min}, max: ${max}`);
// }

// minMax([2, 3, 445, 6, 1]); //min 2, max 445

// Task 6

// function oddEvenNumbers(arr){

//     let newArr = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (!(i % 2 == 0)) {
//             newArr.push(arr[i]*2);
//         } else {
//             newArr.push(arr[i]);
//         }
//     }

//     console.log(newArr);
// }

// oddEvenNumbers([1,2,3,4]);

// Task 7

// function removeSmallest(arr) {
//     let smallNumber = arr[0];
//     let newArr = [];

//     for (let i = 0; i < arr.length; i++){

//         if (smallNumber < arr[i]) {
//             newArr.push(arr.slice(1))
//         }
//     }

//     console.log(newArr);
// }

// removeSmallest([1,2,3,4,5]);
// removeSmallest([5,4,3,2,1]);
// removeSmallest([2,2,1,2,1]);

// Task 8

// function alternativeKeysLetter(text){
//     // result [ExAmPlE, eXaMpLe]

//     let arr = text.split(',');
//     let arrIndex0 = arr[0];
//     let arrIndex1 = arr[1];

//     for (let i = 0; i < arr.length; i++){

//         if (i % 2 == 0){
//             arrIndex0[0].toUpperCase();
//             console.log(arrIndex0);
//         } else {
//             arrIndex1[1].toUpperCase();
//         }

//     }

//     console.log(arr);
// }

// alternativeKeysLetter('example');

// Task 9

// function minMax(arr){
//     // min and max

//     arr.sort(function(a,b){return a-b});
//     let min = arr[0];
//     let max = arr[arr.length - 1];
//     console.log(min);
//     console.log(max);

// }

// minMax([2, 34, 1, 45, 99]);

// Task 10

// function sumArray(arr){
//     return arr.reduce((sum, item) => sum + item, 0);
// }

// console.log(sumArray[1,2,3,4]);

// Task 11

// function filterEvenNumbers(arr){
//     return arr.filter(element=>element % 2 == 0);
// }

// console.log(filterEvenNumbers([1,2,3,4])); // [2,4]

// Task 12

// function reverseArray(arr){
//     let reverse = arr.toReversed();
//     return reverse;
// }

// const numbers = [1,2,3,4];
// console.log(reverseArray(numbers));

// Task 13

// function flattenArray(arr){
//     return arr.flat(Infinity);
// }

// console.log(flattenArray([1, [2, [3, 4], 5]]));

// Task 14

// function isSorted(arr){
//     // kod

//     const newArr = [];

//     for (let i = 0; i < arr.length-1; i++) {

//         if (arr[i] < arr[i+1]) {
//             newArr.push(true);
//         } else {
//             newArr.push(false);
//         }

//     }

//     if (newArr.includes(false)) {
//         return false;
//     } else {
//         return true;
//     }

// }

// console.log(isSorted([1,2,3,4])); // Output: true;
// console.log(isSorted([1,3,2,4])); // Output: false;

// Task 15
// Write a function that takes two arrays and returns an array of elements that are present in both arrays.

// function arrayIntersection(arr1, arr2) {

//     return arr1.filter((el) => arr2.includes(el));
// }

// // Example usage:
// console.log(arrayIntersection([1, 2, 3], [2, 3, 4])); // Output: [2, 3]

// Task 16

// Write a function that removes all falsy values from an array.

// function removeFalsyValues(arr) {
//     // const value = false;

//     // if (value) {
//     //     console.log(true);
//     // } else {
//     //     console.log(false);
//     // }

//     // console.log(arr);
//     return arr.filter((value) => value);

// }

// // Example usage:
// console.log(removeFalsyValues([0, 1, false, 2, '', 3, 'a', 'e'*23, NaN, 's', 34])); // Output: [1, 2, 3, 'a', 's', 34]

// Task 17
// Write a function that takes an array of numbers from 1 to n with one missing number, and finds the missing number.

// function findMissingNumber(arr, n) {

//     for (let i = 1; i <= n; i++){
//         if (!arr.includes(i)) {
//             return i;
//         }
//     }

// }

// // Example usage:
// console.log(findMissingNumber([1, 2, 4, 5, 6], 6)); // Output: 3

// function filterArray(arr){

//     let newArr = [];

//     arr.forEach((el) => {
//         if (!isNaN(el) && !newArr.includes(+(el))) {
//             newArr.push(+(el));
//         }
//     })

//     return newArr;
// }

// console.log(filterArray([1, 2, "a", "b"])) // [1, 2]
// console.log(filterArray([1, "a", "b", 0, 15])) // [1, 0, 15]
// console.log(filterArray([1, 2, "aasf", "1", "123", 123])) // [1, 2, 123]

// Task 18

// function sumAndProduct(arr){
//     // 15, 120
//     let addition = arr.reduce((total, value) => total + value, 0);
//     let multiply = arr.reduce((total, value) => total * value, 1);
//     console.log(`Addition: ${addition}, multiplication: ${multiply}`);
// }

// sumAndProduct([1,2,3,4,5]);

// Task 19
// function deleteItem(arr, item){

// my code
//     for (let i = 0; i < arr.length; i++){
//         if (arr[i] == item) {
//             arr.splice(i, 1);
//         }
//     }

//     console.log(arr);
// }
// Mentor's code
// const index = arr.indexOf(item);
// arr.splice(index, 1);
// console.log(arr);

// deleteItem([2,3,4,6,10],10);

// Task 20

// function findMissing(arr, item){
//     let əslindəOlmalıİdi = (item * (item + 1) / 2);
//     console.log(əslindəOlmalıİdi);

//     let cariOlan = arr.reduce((sum, item) => sum + item, 0);
//     console.log(cariOlan);

//     let fərq = əslindəOlmalıİdi - cariOlan;
//     console.log(fərq);
// }

// findMissing([1,3,4,5], 5);

// Task 21

// function selectNumbers(text){
//     const arr = text.split('');
//     console.log(arr);

//     const deleteValue = arr.filter((i) => !isNaN(i));
//     console.log(deleteValue);
// }

// selectNumbers('lorem20ipsim34dolor40');

// Task 22

// function formatPhoneNumber(numbers) {

//     let format = "(xxx) xxx-xxxx";
//     return numbers.map((item) => (format = format.replace('x', item)))[numbers.length-1];
// }

// console.log(formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])) // "(123) 456-7890"
// console.log(formatPhoneNumber([5, 1, 9, 5, 5, 5, 4, 4, 6, 8])) // "(519) 555-4468"
// console.log(formatPhoneNumber([3, 4, 5, 5, 0, 1, 2, 5, 2, 7])) // "(345) 501-2527"

// Task 23

// function isAvgWhole(arr) {
//     let sum = arr.reduce((sum, el) => sum + el, 0);
//     let average = sum / arr.length;
//     return Number.isInteger(average);
// }

// console.log(isAvgWhole([1, 3])); // true
// console.log(isAvgWhole([1, 2, 3, 4])); // false
// console.log(isAvgWhole([1, 5, 6])); // true
// console.log(isAvgWhole([1, 1, 1])); // true
// console.log(isAvgWhole([9, 2, 2, 5])); // false

// Task 24
// Objects

// const game = {
// 	team1: "Bayern Munich",
// 	team2: "Borrussia Dortmund",
// 	players: [
// 		[
// 			"Neuer",
// 			"Pavard",
// 			"Martinez",
// 			"Alaba",
// 			"Davies",
// 			"Kimmich",
// 			"Goretzka",
// 			"Coman",
// 			"Muller",
// 			"Gnarby",
// 			"Lewandowski",
// 		],
// 		[
// 			"Burki",
// 			"Schulz",
// 			"Hummels",
// 			"Akanji",
// 			"Hakimi",
// 			"Weigl",
// 			"Witsel",
// 			"Hazard",
// 			"Brandt",
// 			"Sancho",
// 			"Gotze",
// 		],
// 	],
// 	score: "4:0",
// 	scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
// 	date: "Nov 9th, 2037",
// 	odds: {
// 		team1: 1.33,
// 		x: 3.25,
// 		team2: 6.5,
// 	},
// };
// // Task-1
// const [players1, players2] = game.players;

// // Task-2
// const [gk, ...fieldPlayers] = players1;
// // console.log(gk);
// // console.log(fieldPlayers);

// // Task-3

// const allPlayers = [...players1, ...players2];
// // console.log(allPlayers);

// // Task-4
// const players1Final = [...players1,'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);

// // Task-5
// const { team1, x: draw, team2 } = game.odds;
// console.log(team1, draw, team2);

// // Task-6
// function printGoals(...arr) {
//     console.log(arr);
// }

// printGoals('Witsel', 'Hazard');

// // Task-7
// console.log(team1 > team2);

// Task 25
// function numInStr(arr) {
// 	const result = [];

// 	arr.forEach((item) => {
// 		if (item.split(''.some((item) => !isNaN(item) && item !== '')){
// 			result.push(item);
// 		}
// 	})

// 	console.log(result);
// }

// numInStr(["1a", "a", "2b", "b"]);

// Task 26

// function secondLargest(arr) {
// 	let newArr = arr.toSorted((a, b) => b - a);
// 	console.log(newArr[1]);
// }

// secondLargest([10, 40, 30, 20, 50]);

// Task 27

// function reverseWords(str) {
// 	let arr = str.split(' ');
// 	let reversed = arr.reverse();
// 	let deletedSpaces = reversed.filter(item => item !== '');
// 	let joinedArr = deletedSpaces.join(" ");
// 	console.log(joinedArr);
// }

// reverseWords(" the sky is blue");
// reverseWords("hello   world!  ");
// reverseWords("a good example");

// Task 28

// function reverseCase(str) {
// 	let result = '';

// 	for (let index = 0; index < str.length; index++) {

// 		let letter = str[index];

// 		if (letter === letter.toUpperCase()) {
// 			result += letter.toLowerCase();
// 		} else {
// 			result += letter.toUpperCase();
// 		}

// 	}

// 	console.log(result);
// 	// let UpperCased = arr.slice(0, 1);
// 	// console.log(UpperCased);

// 	// let forEached = arr.forEach(item => item.);
// 	// console.log(forEached);
// }

// reverseCase("Happy Birthday");
// reverseCase("MANY THANKS");
// reverseCase("sPoNtAnEoUs");

// Task 29

// function getAbsSum(arr) {
// 	let reduced = arr.reduce((sum, item) => sum + Math.abs(item), 0);
// 	console.log(reduced);
// }

// getAbsSum([2, -1, 4, 8, 10]);
// getAbsSum([-3, -4, -10, -2, -3]);
// getAbsSum([2, 4, 6, 8, 10]);
// getAbsSum([-1]);

// Task 30

// function maxTotal(arr) {
// 	const sorted = arr.sort((a, b) => b - a);
// 	console.log(sorted);

// 	const reduced = sorted.slice(0, 5).reduce((sum, item) => sum + item, 0);
// 	console.log(reduced);
// }

// maxTotal([1, 1, 0, 1, 3, 10, 10, 10, 10, 1]);

// Task 31

// function commonElements(array1, array2) {
// let result = [];
// let final = [];

// for (let item of array1) {
//     if (array2.includes(item)) {
//         result.push(item);
//     }
// }

// console.log(new Set(result));

// return array2.filter((index) => array1.includes(index));
// }

// console.log(commonElements([1, 2, 2, 2, 3, 4, 5], [1, 2, 4, 5]));
// commonElements([1, 2, 2, 2, 3, 4, 5], [1, 2, 4, 5]);

// Task 32

// function specialReverse(str, letter) {

//     const arr = str.split(' ');
//     let result = [];

// arr.forEach((item) => {
//     if (item.startsWith(letter)) {
//         result.push(item.split('').reverse().join(''))
//     } else {
//         result.push(item)
//     }
// });

// console.log(result.join(' '));

// }

// specialReverse("word searches are super fun", "s");

// Task 33

// function doubleLetters(str) {

//     // const result = [];

//     // for (let index = 0; index < str.length; index++) {

//     //     if (str[index] == str[index + 1]) {
//     //         result.push(true)
//     //     } else {
//     //         result.push(false);
//     //     }
//     // }

//     // console.log(result.some((item) => item));

//     return str.split('').some((item, index, array) => item == array[index + 1]);
// }

// console.log(doubleLetters('loop')) // true
// console.log(doubleLetters('orange')) // false

// Task 34

// function removeABC(str) {
//     const arr = str.split('').filter();
//     console.log(arr)
// }

// removeABC("This might be a bit hard") // "This might e  it hrd"
// removeABC("hello world!") // null
// removeABC("") // null

// Task 35

// function Accumulator(startingValue) {
//     this.value = startingValue;
//     this.read = () => (this.value += Number(prompt('Ədəd daxil et')));
// }

// const vüsal = new Accumulator(1);

// vüsal.read();
// alert(vüsal.value);

// Task 36

// function Calculator() {

//     this.a = prompt('');
//     this.b = prompt('');

//     this.read =
//     this.sum =
//     this.mul =
// }

// let calculator = new Calculator();
// calculator.read();

// alert("Sum = " calculator.sum());
// alert("Sum = " calculator.mul());

// Task 37

// function textToNumberBinary(str) {
// my code
// console.log(str.split(' ').filter((item) => ));

// const array = str.split(' ');
// // console.log(arr);
// const newArray = [];

// for (let index = 0; index < array.length; index++) {

//     if (array.includes('zero') && array.includes('one')) {
//         newArray.push('01');

//         if (array.length <= 8) {
//             newArray.push()
//         }
//     } else {
//         newArray.push('');
//     }

// }

// return newArray.join('');

// mentor's code solved (kind of)
// 	const arr = str
// 		.toLowerCase()
// 		.split(" ")
// 		.map((item) => {
// 			if (item === "zero") {
// 				return "0";
// 			} else if (item === "one") {
// 				return "1";
// 			} else {
// 				return "";
// 			}
// 		})
// 		.filter((item) => item.length > 0);

// 	const remain = arr.length % 8;

// 	if (remain == 0) {
// 		return arr.join("");
// 	} else {
// 		return arr.slice(0, arr.length - remain).join("");
// 	}

// }

// console.log(textToNumberBinary("zero one zero one zero one zero one two three"));

// function convert(text) {
//     // const splitReverseJoin = text.split(" ").reverse();
//     // for (let index = 0; index < text.length; index++) {
//     //     if (text.)
//     // }

//     return text.split("").reverse().map((item) => {
//         if (item === item.toLowerCase()) {
//             return item.toUpperCase();
//         } else {
//             return item.toLowerCase();
//         }
//     }).join("");

// }

// console.log(convert("heLLo WOrld"));

// Task 38

// function removeABC(str) {
// console.log(str.split('').map(item => item.replace('a', '') && item.replace('b', '') && item.replace('c', '') || console.log(null)).join(''));
// console.log(str.split('').filter(item => !item.includes('a') && !item.includes('b') && !item.includes('c')).join(''));
// console.log(str.split(' '));

// 	const arr = str.split('');
// 	console.log(arr);

// 	for (let index = 0; index < arr.length; index++) {

// 		if (arr.includes('a') && arr.includes('b') && arr.includes('c')) {
// 			arr.push();
// 		} else if (arr.includes('')) {
// 			return null;
// 		} else {
// 			return null;
// 		}

// 		return arr.join(' ');
// 	}

// }

// console.log(removeABC("This might be a bit hard")) // "This might e  it hrd"
// console.log(removeABC("hello world!")) // null
// console.log(removeABC("")) // null

// mentor's code
// function removeABC(text) {
// 	if (!text.includes('a') && !text.includes('b') && !text.includes('c')) {
// 		return null
// 	}

// 	if (text.length === 0) {
// 		return null;
// 	}

// 	let result = '';

// 	for (let item of text) {
// 		if (item !== 'a' && item !== 'b' && item !== 'c') {
// 			result += item;
// 		}
// 	}

// 	return result;
// }

// console.log(removeABC('This might be a bit hard'));
// console.log(removeABC('hello world'));
// console.log(removeABC(''));

// Task 39

// function inclusiveArray(startNum, endNum) {
// 	const result = [];

// 	if (startNum > endNum) {
// 		result.push(startNum)
// 		return result;
// 	}

// 	for (let index = startNum; index <= endNum; index++) {
// 		result.push(index);
// 	}

// 	return result;
// }

// console.log(inclusiveArray(1, 5));
// console.log(inclusiveArray(17, 5));

// Task 40

// function calculate(str) {

// 	// return str.split(' ').map(item => {
// 	// 	if (item.includes('k')) {
// 	// 		return parseFloat(item)*1000;
// 	// 	} else {
// 	// 		return +item;
// 	// 	}
// 	// });

// 	return str.split(' ').map(item => item.includes('k') ? parseFloat(item) * 1000 : +item);
// }

// console.log(calculate('2.5k 65k 348')) // [2500, 65000, 348]

// Task 41

// function mapping(arr) {
// 	const obj = {};

// 	for (let item of arr) {
// 		obj[item] = item.toUpperCase()
// 	}

// 	return obj

// }

// console.log(mapping(['p','s']));

// Task 42

// function reverseAndNot(text) {
// 	console.log(String(text).split('').reverse().join('')+text);
// }

// reverseAndNot(123);
// reverseAndNot(152);
// reverseAndNot(123456789);

// Task 43

// function filterUnique(arr) {
// 	// console.log(array.filter(item => item.length === new Set(item).size));

// 	const result = [];

// 	function isUnique(str) {
// 		for (let i = 0; i < str.length; i++) {
// 			for (j = i + 1; j < str.length; j++) {
// 				if (str[i] == str[j]) {
// 					return false;
// 				}
// 			}
// 		}

// 		return true;
// 	}

// 	for (let item of arr) {
// 		if (isUnique(item)) {
// 			result.push(item);
// 		}
// 	}

// 	return result;
// }

// console.log(filterUnique(['abb', 'abc', 'abcdb']));

// Task 44

// function lonelyInteger(arr) {

// My code
// return arr.sort((a,b)=>Math.abs(a) - Math.abs(b)).map((value, index, array) => {
//     if (Math.abs(array[index]) == Math.abs(array[index + 1])) {
//         return [array[index], array[index + 1]];
//     } else {
//         return [array[index + 1]];
//     }
// }).filter((value, index, array)=> !Math.abs(array[index]) == Math.abs(array[index + 1]));

// Shadman's code
//     const newArr = [...new Set(arr)];
//     return newArr.reduce((acc, cur)=> acc + cur);
// }

// console.log(lonelyInteger([1, -1, 2, -2, 3])); //3
// console.log(lonelyInteger([-3, 1, 2, 3, -1, -4, -2])); // -4
// console.log(lonelyInteger([-9, -105, -9, -9, -9, -9, 105])); // -9

// Task 45

// function maxPossible(num1, num2) {
//     let num1Arr = num1.toString().split('');
//     let num2Arr = num2.toString().split('').sort((a, b) => b - a);

//     for (let i = 0; i < num1Arr.length; i++) {
//         if (num2Arr[0] > num1Arr[i]) {
//             num1Arr[i] = num2Arr.shift();
//         }
//     }

//     return parseInt(num1Arr.join(''), 10);
// }

// console.log(maxPossible(523, 76));        // 763
// console.log(maxPossible(9132, 5564));     // 9655
// console.log(maxPossible(8732, 91255));    // 9755

// Task 46

// function getBestStudent(obj) {

// 	for (let item in obj) {
// 		let sum = obj[item].reduce((a, b) => a + b);
// 		obj[item] = sum;

// 		return Object.keys(obj).sort((a, b) => obj[b] - obj[a])[0];
// 	}
// }

// console.log(getBestStudent({
// 	John: [100, 90, 80],
// 	Bob: [100, 70, 80]
// }));

// Task 47

// function twoDifference(input) {

// 	const arr = input.sort((a, b) => a - b);
// 	const result = [];

// 	for (let item of arr) {
// 		for (let num of arr) {
// 			if (num - item == 2) {
// 				result.push([item, num]);
// 			}
// 		}
// 	}

// 	return result;
// }

// console.log(twoDifference([1,2,3,4])); // [[1,3],[2,4]]
// console.log(twoDifference([4,1,2,3])); // [[1,3],[2,4]]
// console.log(twoDifference([1,23,3,4,7])); // [[1,3]]
// console.log(twoDifference([4,3,1,5,6])); // [[1,3], [3,5], [4,6]]

// Task 48

// function withoutLast(arr) {
// 	const myArr = arr.slice();
// 	myArr.pop();
// 	return myArr;
// }

// console.log(withoutLast([1,2,3,4,5]));

// Task 49

// function oddNumbers(arr) {

// 	for (let i = 0; i < arr.length; i++) {
// 		for (let k = 0; k < arr.length; k++) {
// 			if (arr[i] % 2 == 1 && arr[k] % 2 == 1) {
// 				if (arr[i] < arr[k]){
// 					let c = arr[i];
// 					arr[i] = arr[k];
// 					arr[k] = c;
// 				}
// 			}

// 		}
// 	}

// 	return arr;
// }

// console.log(oddNumbers([14, 7, 1, 2, 4]));

// Task 50

// function askPassword(ok, fail){

//     let password = prompt("Password?", '');
//     if (password == 'rockstar') ok();
//     else fail();
// }

// let user = {
//     name: 'John',

//     loginOk() {
//         alert(`${this.name} logged in`);
//     },

//     loginFail() {
//         alert(`${this.name} failed to log in`);
//     },
// }

// askPassword(user.loginOk.bind(user), user.loginFail.bind(user));

// Task 51

// function askPassword(ok, fail){

//     let password = prompt("Password?", '');
//     if (password == 'rockstar') ok();
//     else fail();
// }

// let user = {
//     name: 'John',

//     login(result) {
//         alert(this.name + (result ? ' logged in' : ' failed to log in'));
//     }
// }

// askPassword(user.login.bind(user,true), user.login.bind(user,false));

// Task 52

// function mirror(arr) {
//     const copyArr = arr.slice().reverse().slice(1);
//     console.log(arr.concat(copyArr));
// }

// mirror([0, 2, 4, 6]);

// Task 53

// function sharedLetters(str1, str2) {

//     let result = '';

//     for (let index = 0; index < str1.length; index++) {

//         if (str1.includes(str2[index])) {
//             result += str2[index]
//         }

//     }

//     return result.length;
// }

// console.log(sharedLetters('apple', 'meaty')); // 2
// console.log(sharedLetters('fan', 'forsook')); // 1

// Task 54

// const textarea = document.querySelector('textarea');
// const button = document.querySelector('button');

// button.addEventListener('click', function () {

//     const text = textarea.value;
//     const array = text.split('\n');

//     for (let index = 0; index < array.length; index++) {
//         const [first, second] = array[index].toLowerCase().trim().split('_');
//         const result = `${first}${second.replace(second[0], second[0].toUpperCase())}`;
//         console.log(result.padEnd(20," ") + '✅'.repeat(index+1));

//     }
// })

// Task 55

// function largestEven(array) {
//    return array.filter(item => item % 2 == 0).sort((a, b) => b - a)[0] || -1;
// }

// console.log(largestEven([3, 7, 2, 1, 7, 9, 10, 13]));
// console.log(largestEven([1, 3, 5, 7]));

// Task 56

// function uniqueArr(array) {
//     return [...new Set(array)].filter(item => item > 0);

//     // const filteredArray = array.filter(item => item > 0);
//     // const result = [];

//     // for (let item of filteredArray) {
//     //     if (!result.includes(item)) {
//     //         result.push(item);
//     //     }
//     // }

//     // return result;
// }

// console.log(uniqueArr([-5, 1, -7, -5, -2, 3, 3, -5, -1, 1]));
// console.log(uniqueArr([3, -3, -3, 5, 5, -6, -2, -4, -1, 3]));
// console.log(uniqueArr([10, 6, -12, 13, 5, 5, 13, 6, 5]));

// Task 57

// function sumTwoSmallestNumbers(array) {
//     return array.filter(item => item > 0).sort((a,b)=>a-b).slice(0,2).reduce((a,b)=> a+b);
// }

// console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]));

// Task 58

// function findOccurences(str, letter) {
//     const obj = {};
//     str.toLowerCase().split(" ").forEach((word) => {
//         const count = word.split("").filter((item) => item == letter).length;
//         obj[word] = count;
//     });

//     return obj;

// }

// console.log(findOccurences('Hello World', 'o'));

// Task 59

// function stepsToConvert(text) {

//     let lowerCount = 0;
//     let upperCount = 0;

//     for (let item of text) {
//         if (item == item.toLowerCase()) {
//             lowerCount++;
//         } else {
//             upperCount++;
//         }
//     }

//     if (lowerCount < upperCount) {
//         return lowerCount;
//     } else {
//         return upperCount;
//     }

// }

// console.log(stepsToConvert('abC'));
// console.log(stepsToConvert('ABc'));
// console.log(stepsToConvert('ABC'));

// Task 60

// function objectToArray(obj) {
//     return Object.entries(obj);
// }

// console.log(objectToArray({
//     d: 1,
//     b: 2,
//     c: 3,
// }));

// Task 61

// function dividers(num) {
//     const arr = [];

//     for (let index = 1; index <= num; index++) {

//         if (num % index == 0) {
//             arr.push(index);
//         }
//     }

//     return arr;

// }

// console.log(dividers(12));

// Task 62

// function lettersOnly(str) {
//     // return str.split(' ').every(item => /^[a-z]+$/.test(item)); (with regex method)

//     if (str == "") {
//         return false;
//     }

//     return str.split("").every((item) => {
//         return (item >= "a" && item < "z") || item == "";
//     })
// }

// console.log(lettersOnly('javascript'));
// console.log(lettersOnly('JAVASCRIPT'));
// console.log(lettersOnly('121212121'));
// console.log(lettersOnly('i have spaces'));
// console.log(lettersOnly('I have spaces(1-10)'));
// console.log(lettersOnly(''));
// console.log(lettersOnly('#'));

// Task 63

// function countPalindrome(start, end) {

//     let palindrome = 0;

//     for (let i = start; i <= end; i++) {
//         if (i.toString() === i.toString().split('').reverse().join('')) {
//             palindrome++;
//         }
//     }

//     return palindrome;
// }

// console.log(countPalindrome(1, 10));
// console.log(countPalindrome(555, 556));
// console.log(countPalindrome(878, 898));

// Task 64
// let a = 5;

// function test() {
//     console.log(a);
//     let a = 10;
// }

// test();

// Task 65

// function mean(num) {
//     const arr = num.toString().split('').map(Number);
//     return arr.reduce((a,b)=> a + b, 0)/arr.length;
// }

// console.log(mean(42));
// console.log(mean(12345));
// console.log(mean(666));

// Task 66
// function isIsogram(str) {
// const text = str.toLowerCase();
// const result = new Set(text);

// if (result.size == str.length) {
//     return true;
// } else {
//     return false;
// }

// return str.toLowerCase().split("").every((item, index, array) => array.indexOf(item) == array.lastIndexOf(item));

// }

// console.log(isIsogram("Algorism")) // true
// console.log(isIsogram("PasSword")) // false
// console.log(isIsogram("Consecutive")) // false

// Task 67

// function reorderDigits(arr, keyword) {
//     return arr.map(item => item.toString().split('').sort((a, b) => (keyword == 'asc') ? a - b : b - a).join(''));
// }

// console.log(reorderDigits([515, 341, 98, 44, 211], "asc"));
// console.log(reorderDigits([515, 341, 98, 44, 211], "desc"));

// Task 68

// function sortByString(arr, keyword) {
//     const splitKeyword = keyword.split('');
//     return arr.sort((a,b)=> splitKeyword.indexOf(a[0])-splitKeyword.indexOf(b[0]));
// }

// console.log(sortByString(["apple", "banana", "cherry", "date"], "dbca"));

// Task 69

// function toArrowFunction(str) {
//     const arr = str.split(' ');
//     return arr[0].replace('function', 'const ') + arr[1].replace('(', ' = (') + arr[2].replace('{}', ' =>');
// }

// console.log(toArrowFunction("function test(a) {}")); // "const test = (a) =>"
// console.log(toArrowFunction("function twoArgs(a,b) {}")); // "const twoArgs = (a,b) =>"
// console.log(toArrowFunction("function restArgs(...a) {}")); // "const restArgs = (...a) =>"

// Task 70

// function incrementToTop(arr) {
//     const max = Math.max(...arr);
//     return arr.map(item => max - item).reduce((sum, item) => sum + item);
// }

// console.log(incrementToTop([3, 4, 5]));

// Task 71
// function lastDig(...arr) {
//     const lastDigits = arr.map(item => String(item).at(-1));

//     if (String(lastDigits[0] * lastDigits[1]).at(-1) == lastDigits.at(-1)) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(lastDig(25, 21, 125));
// console.log(lastDig(55, 226, 5190));
// console.log(lastDig(12, 215, 2142));

// Task 72

// function divisibleByLeft(num) {
//     const arr = [];
//     const strNum = num.toString().split('');

//     for (let i = 0; i < strNum.length; i++) {

//         if (strNum[i] % strNum[i - 1] == 0) {
//             arr.push(true);
//         } else {
//             arr.push(false);
//         }
//     }

//     return arr;
// }

// console.log(divisibleByLeft(73312));
// console.log(divisibleByLeft(635));
// console.log(divisibleByLeft(1));

// Task 73

// function rearrangedDifference(num) {
//     const numStr = num.toString().split('');
//     const numStrAsc = numStr.sort((a, b) => a - b).join('');
//     const numStrDes = numStr.sort((a, b) => b - a).join('');
//     return numStrDes - numStrAsc;
// }

// console.log(rearrangedDifference(972882)); // 760833
// console.log(rearrangedDifference(3320707)); // 7709823
// console.log(rearrangedDifference(90010)); // 90981

// Task 74

// function getStudentTopNotes(arr) {
// 	return arr.map((student) =>
// 		student.notes.length ? Math.max(...student.notes) : 0
// 	);
// }

// console.log(
// 	getStudentTopNotes([
// 		{
// 			id: 1,
// 			name: "Jacek",
// 			notes: [5, 3, 4, 2, 5, 5],
// 		},
// 		{
// 			id: 2,
// 			name: "Ewa",
// 			notes: [2, 3, 3, 3, 2, 5],
// 		},
// 		{
// 			id: 3,
// 			name: "Zygmunt",
// 			notes: [2, 2, 4, 4, 3, 3],
// 		},
// 		{
// 			id: 4,
// 			name: "Sygmunt",
// 			notes: [],
// 		},
// 	])
// ); // [5, 5, 4]

// Task 75

// function sumFractions(arr) {
//     return Math.round(arr.map((item) => item[0] / item[1]).reduce((a,b)=> a + b, 0));
// }

// console.log(sumFractions([[18, 13], [4, 5]])) // 2
// console.log(sumFractions([[36, 4], [22, 60]])) // 9
// console.log(sumFractions([[11, 2], [3, 4], [5, 4], [21, 11], [12, 6]])) // 11

// Task 76

// function gcd(arr) {
//     let min = Math.min(...arr);

//     for (let i = min; i > 0; i--){
//         if (arr.every((item) => item % i == 0)) {
//             min = i;
//             break;
//         }
//     }

//     return min;
// }

// console.log(gcd([10, 20, 40])); // 10
// console.log(gcd([1, 2, 3, 100])); // 1
// console.log(gcd([1024, 192, 2048, 512])); // 64

// Task 77

// function expensiveOrders(obj, num) {
//     const arr = Object.entries(obj);
//     const filteredArr = arr.filter(item => item[1] > num);
//     const newObj = Object.fromEntries(filteredArr);
//     return newObj;
// }

// console.log(expensiveOrders({'a': 3000, 'b' : 200, 'c' : 1050}, 1000));

// Task 78

// function countDigits(n, d) {
// 	let arr = [0];

// 	for (let index = d; index <= n; index++) {
// 		arr.push(index * index);
// 	}

// 	return arr.join("").length - arr.join("").split(d).join("").length;
// }

// console.log(countDigits(10, 1));
// console.log(countDigits(25, 2));

//
// function sqfind(int, find){
//     let arr = new Array(int);
//     for (let i = 0; i < int+1; i++) {
//         arr[i] = i*i;
//     }
//     return (arr.join("").length - arr.join("").split(find).join("").length)
// }

// console.log(sqfind(10,1))
// console.log(sqfind(25,2))
// console.log(sqfind(10,3))

// Task 79
// function firstRepeat(str) {
// 	for (let i = 0; i < str.length; i++) {
// 		for (let j = i + 1; j < str.length; j++) {
// 			if (str[i] == str[j]) {
// 				return str[i];
// 			}
// 		}
//     }

// 	return -1;
// }

// console.log(firstRepeat("legolas")); // "l"
// console.log(firstRepeat("Gandalf")); // "a"
// console.log(firstRepeat("Balrog")); // "-1";
// console.log(firstRepeat("Isildur")); // "-1");

// Case sensitive "I" not equal to "i"

// Task 80
// function isPrime(num) {
//     if (num <= 1) return false;
//     if (num <= 3) return true;

//     if (num % 2 === 0 || num % 3 === 0) return false;

//     for (let i = 5; i * i <= num; i += 6) {
//         if (num % i === 0 || num % (i + 2) === 0) return false;
//     }

//     return true;
// }

// function primeInRange(n1, n2) {
//     for (let i = n1; i <= n2; i++) {
//         if (isPrime(i)) {
//             return true;
//         }
//     }
//     return false;
// }

// console.log(primeInRange(10, 15)); // true (Prime numbers in range: 11, 13)
// console.log(primeInRange(62, 66)); // false (No prime numbers in range)
// console.log(primeInRange(3, 5));   // true (Prime numbers in range: 3, 5)

// Task 81
// function twoProduct(array, n) {
// 	let result = [];

// 	for (let i = 0; i < array.length; i++) {
// 		for (let j = i + 1; j < array.length; j++) {
// 			if (array[i] * array[j] === n) {
// 				result.push(array[i], array[j]);
// 				return result.sort((a, b) => a - b);
// 			}
// 		}
// 	}

// 	return undefined;
// }

// console.log(twoProduct([1, 2, 3, 4, 13, 5], 39)); // [3, 13]
// console.log(twoProduct([11, 2, 7, 3, 5, 0], 55)); // [5, 11]
// console.log(twoProduct([100, 12, 4, 1, 2], 15)); // undefined

// Task 82

// function sumOfVowels(str) {
// 	let value = 0;
// 	str
// 		.toLowerCase()
// 		.split("")
// 		.forEach((e) => {
// 			if (e == "a") return (value += 4);
// 			if (e == "e") return (value += 3);
// 			if (e == "i") return (value += 1);
// 			if (e == "o") return (value += 0);
// 		});
// 	return value;
// }

// console.log(sumOfVowels("Let's test this function.")); //8
// console.log(sumOfVowels("Do I get the correct output?")); //10
// console.log(sumOfVowels("I love edabit!")); //12

// Vowel	Number
// A	    4
// E	    3
// I	    1
// O	    0

// Task 83
// function toArray(obj) {
//     return Object.entries(obj);
// }

// console.log(toArray({ a: 1, b: 2 })) // [["a", 1], ["b", 2]]
// console.log(toArray({ shrimp: 15, tots: 12 })) // [["shrimp", 15], ["tots", 12]]
// console.log(toArray({})) // []

// Task 84
// const account1 = { name: "John Doe", password: 1234 };
// const account2 = { name: "Kate Williams", password: 3333 };

// const accounts = [account1, account2];

// function generateUsername(arr) {
// 	arr.forEach((element) => {
// 		const [firstName, lastName] = element.name.toLowerCase().split(" ");
// 		element.username = firstName[0] + lastName[0];
// 	});
// }

// generateUsername(accounts);
// console.log(accounts); // { name: 'John Doe', password: 1234, username: 'jd' };

// Task 85

// const drinks = [
// 	{ name: "lemonade", price: 50 },
// 	{ name: "lime", price: 10 },
// 	{ name: "orange juice", price: 35 },
// ];

// function sortDrinkByPrice(obj) {
// 	return obj.toSorted((a, b) => a.price - b.price);
// }

// const newDrinks = sortDrinkByPrice(drinks);

// function calculateTotal(newObj) {
// Method 1
// 	newObj.pop();
// 	return newObj.reduce((pre, cur) => pre + cur.price, 0);

// Method 2
// 	return newObj
// 		.slice(0, newObj.length - 1)
// 		.reduce((pre, cur) => pre + cur.price, 0);
// }

// console.log(calculateTotal(newDrinks));

// Task 86
// function countAll(str) {

// 	const obj = {
// 		LETTERS: 0,
// 		DIGITS: 0,
// 	};

// 	for (let item of str) {
// 		if (item == " ") {
// 			continue;
// 		}

// 		if (isNaN(Number(item))) {
// 			obj.LETTERS++;
// 		} else {
// 			obj.DIGITS++;
// 		}
// 	}

// 	return obj;
// }

// console.log(countAll("Hello World"));
// console.log(countAll("H3llo Wor1d"));
// console.log(countAll("149990"));

// countAll("Hello World"); // {'Letters': 10, 'Digits': 0}
// countAll("H3llo Wor1d"); // {'Letters': 8, 'Digits': 2}
// countAll("149990"); // {'Letters': 0, 'Digits': 6}

// Task 87
// function returnUnique(array) {
// 	const Unique = [];

// 	for (let index = 0; index < array.length; index++) {
// 		if (array.indexOf(array[index]) == array.lastIndexOf(array[index])) {
// 			Unique.push(array[index]);
// 		}
// 	}

// 	console.log(Unique);
// }

// returnUnique([1, 9, 8, 8, 7, 6, 1, 6]); // [9, 7]
// returnUnique([5, 5, 2, 4, 4, 4, 9, 9, 9, 1]); // [2, 1]
// returnUnique([9, 5, 6, 8, 7, 7, 1, 1, 1, 1, 1, 9, 8]); // [5, 6]

// Task 88

// function simplePair(array, n) {
// 	for (let index = 0; index < array.length; index++) {
// 		for (let altIndex = index + 1; altIndex < array.length; altIndex++) {
// 			if (array[index] * array[altIndex] == n) {
// 				return [array[index], array[altIndex]];
// 			}
// 		}
// 	}

// 	return null;
// }

// console.log(simplePair([1, 2, 3], 3)); // [1, 3]
// console.log(simplePair([1, 2, 3], 6)); // [2, 3]
// console.log(simplePair([1, 2, 3], 9)); // null

// Task 89
// function removeEntry(obj, str) {
// 	return Object.fromEntries(Object.entries(obj).filter((item) => item[0] != str));
// }

// console.log(removeEntry({ piano: 300, tv: 100, skate: 50 }, "skate"));

// Task 90

// function letterCounter(arr, letter) {
// 	const flatArr = arr.flat();
// 	let letterCount = 0;

// 	for (let index = 0; index < flatArr.length; index++) {
// 		if (flatArr[index] == letter) {
// 			letterCount++;
// 		}
// 	}

// 	return letterCount;
// }

// console.log(
// 	letterCounter(
// 		[
// 			["D", "E", "Y", "H", "A", "D"],
// 			["C", "B", "Z", "Y", "J", "K"],
// 			["D", "B", "C", "A", "M", "N"],
// 			["F", "G", "G", "R", "S", "R"],
// 			["V", "X", "H", "A", "S", "S"],
// 		],
// 		"D"
// 	)
// ); // 3

// Task 91

// function moveToEnd(arr, num) {
    // My Code
	// const firstArr = [];
	// const lastArr = [];

	// for (let index = 0; index < arr.length; index++) {
	// 	if (arr[index] == num) {
	// 		lastArr.push(arr[index]);
	// 	} else {
	// 		firstArr.push(arr[index]);
	// 	}
	// }
	// return firstArr.concat(lastArr);

    // Mentor's code
	// const different = [];
	// const same = [];

	// arr.forEach((number) =>
	// 	number == num ? same.push(number) : different.push(number)
	// );
	// return different.concat(same);
// }

// console.log(moveToEnd([1, 3, 2, 4, 4, 1], 1)); // [3, 2, 4, 4, 1, 1]
