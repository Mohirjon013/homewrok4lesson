// Homework

// 1-masala
// let son = prompt("3 xonali son kiriting !") - 0
// let digitNumber1 = son / 100
// let digitNumber2 = (son / 10) % 10
// let digitNumber3 = son % 10
// let Res = digitNumber1 + digitNumber3
// console.log(Math.round(Res - digitNumber2));

// 2-masala
// let num = prompt("enter number !") -  0
// let evenRes = 0
// for(i = 1; i < num; i++){
//     if(num % i == 0){
//         evenRes += i

//     }
// }
// console.log(evenRes);

// 3-masala
// let arr = [true, "salom", 23, undefined]
// for(let i = 0; i < arr.length; i++){
//     if(typeof arr[i] == "string" ){
//         arr[i] = null
//     }
// }
// console.log(arr);

// 4-masala
// let  arr = [2,3,4,52,2,3,4,53,2,23,43,2]
// let max = arr[0]
// for(let num of arr){
//     if(num > max){
//         max = num
//     }
// }
// console.log(max);

// 5-masala
// let numbers = [54,32,76,12,22]
// let evenRes = 0
// for(num of numbers){
//     evenRes += num
// }
// console.log(evenRes);

// 7-masala
// let numbers = [1,2,2,4,5,6,7,8,9,10]
// for(let i = 0; i < numbers.length; i++){
//     if(numbers[i] % 2 == 0){
//         numbers[i] = 0
//     }
// }
// console.log(numbers);

// 8-masala
// let firstNum = prompt("Enter first number") - 0
// let action = prompt("Action (+ - / *)")
// let secondNum = prompt("Enter second number") - 0

// switch(action){
//     case "+":
//     console.log(firstNum + secondNum);
//     break;
//     case "-":
//         if(firstNum > secondNum){
//             console.log(firstNum - secondNum);
//         }
//         else{
//             console.log(secondNum - firstNum);
//         }
//         break;
//     case "*":
//     console.log(firstNum * secondNum);
//     break;
//     case "/":
//         if(firstNum > secondNum){
//             console.log(firstNum / secondNum);
//         }
//         else{
//             console.log(secondNum / firstNum);
//         }
//         break;
//     default :
//     console.log("u got a problem !!!");
// }

// 9-masala

// let username = prompt("Enter your name")
// let usernameList = ["Nuriddin", "Shazboz", "Adham", "Suxrob"]
// let isNotFoundName = 0
// for(let nic of usernameList){
//     switch(username.toLowerCase()){
//         case nic.toLowerCase():
//             console.log("Siz kiritgan ism bor: " + nic);
//             break;
//         default:
//             isNotFoundName++
//     }
// }
// console.log(isNotFoundName == usernameList.length ? "Siz kiritgan ism mavjud emas" : "");


// 10-masala
// let enterName = prompt("enter name !!!")
// let isNot = 0
// const list = [
//     {
//         id: 1,
//         age: 20,
//         name:"Nuriddin",
//         email:"Nuriddin@gmail.com"
//     },
//     {
//         id: 2,
//         age: 215,
//         name:"Komiljon",
//         email:"Komiljon@gmail.com"
//     },
//     {
//         id: 3,
//         age: 25,
//         name:"Izzatbek",
//         email:"Izzatbek@gmail.com"
//     }
// ]
// for(let value of list){
//     switch(enterName){
//         case value.name:
//             console.log(value);
//             break;
//         default:
//             isNot++;
//     }
// }
// console.log(isNot == list.length ? "Siz kiritgan " +  enterName + " ismi mavjud emas": "" );

// 11-masala
// const list = [
//     {
//         id: 1,
//         age: 20,
//         name:"Nuriddin",
//         email:"Nuriddin@gmail.com"
//     },
//     {
//         id: 2,
//         age: 15,
//         name:"Komiljon",
//         email:"Komiljon@gmail.com"
//     },
//     {
//         id: 3,
//         age: 25,
//         name:"Izzatbek",
//         email:"Izzatbek@gmail.com"
//     }
// ]
// let maxAge = list[0].age
// for(let value of list){
//     if(value.age > maxAge){
//         maxAge = value.age
//     }
// }
// // console.log(maxAge);
// for(value of list){
//     switch(maxAge){
//         case value.age:
//             console.log(value);
//             break;
//     }
// }

// 12-masala
// let evenRes = 0
// const list = [
//     {
//         id: 1,
//         age: 20,
//         name:"Nuriddin",
//         email:"Nuriddin@gmail.com"
//     },
//     {
//         id: 2,
//         age: 15,
//         name:"Komiljon",
//         email:"Komiljon@gmail.com"
//     },
//     {
//         id: 3,
//         age: 25,
//         name:"Izzatbek",
//         email:"Izzatbek@gmail.com"
//     }
// ]

// for(let value of list){
//     evenRes += value.age
// }
// console.log(evenRes / 3);

// 13-masala
// let arr = [23,54,21,76,23,87]
// let plusRes = arr[0] + arr[5]
// if( arr[0] + arr.length % 2 == 0){
//     arr.push(plusRes)
// }
// else{
//     arr.unshift(plusRes)
// }
// console.log(arr);

// 14-masala
// let numbers = [1,2,3,4,5,6,7,8,9]
// let evenRes = []
// let oddRes = []
// for(let num of numbers){
//     if(num % 2 == 0){
//         evenRes.push(num)
//     }
//     else{
//         oddRes.push(num)
//     }
// }
// console.log(`juftlari == ${evenRes}`);
// console.log(`Toqlari == ${oddRes}`);

// 15-masala
// let arr = [8,7,6,5,4] 
// let arr2 = []
// for(let num of arr){
//     arr2.unshift(num)
// }

// console.log(arr2);