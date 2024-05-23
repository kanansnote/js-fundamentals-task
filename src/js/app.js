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
//     let average = arr.reduce((sum, el) => (el + sum)/arr.length);

//     parseInt(average) === average;
// }

// console.log(isAvgWhole([1, 3])) // true
// console.log(isAvgWhole([1, 2, 3, 4])) // false
// console.log(isAvgWhole([1, 5, 6])) // true
// console.log(isAvgWhole([1, 1, 1])) // true
// console.log(isAvgWhole([9, 2, 2, 5])) // false

// Researching the solution of the code