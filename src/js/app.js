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

