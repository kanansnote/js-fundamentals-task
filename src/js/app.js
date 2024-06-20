'use strict';

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

// 	const num1str = num1.toString().split('');
// 	const num2str = num2.toString().split('');

// 	const num = [num1str, num2str];
// 	const result = [];

// 	if (num1str.length > num2str.length) {
// 		num2str.push('0');
// 	} else if (num1str.length < num2str.length) {
// 		num1str.push('0');
// 	}

// 	for (let index = 0; index <= num.length; index++) {

// 		if (num1str[index] < num2str[index]) {
// 			result.push(num2str[index]);
// 		} else {
// 			result.push(num1str[index]);
// 		}
// 	}

// 	return result.join('');

// }

// console.log(maxPossible(523, 76));
// console.log(maxPossible(9132, 5564));
// console.log(maxPossible(8732, 91255));

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