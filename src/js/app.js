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