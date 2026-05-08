// https://github.com/ProgrammingHero1/array-looping-tasks

// -------------- Task: 01 -------------------
// const colors = ['red', 'blue', 'green', 'yellow', 'orange']

// const revColors = [];
// for(let i = 0; i < colors.length; i++){
//     revColors.unshift(colors[i])
// }
// console.log(revColors);


// -------------- Task: 02 -------------------
// const numbers = [12, 98, 5, 41, 23, 78, 46];

// const evenNum = [];
// for(let num of numbers){
//     if(num%2 === 0){
//         evenNum.push(num)
//     }
// }
// console.log(evenNum);


// -------------- Task: 03 -------------------

// var numbers = ['Tom', 'Tim', 'Tin', 'Tik'];

// let newNum = [];
// for(num of numbers){
//     newNum = newNum + num;
// }
// console.log(newNum);

// -------------- Task: 04 -------------------

// const statement = 'I am a hard working person';

// const arrStatement = statement.split(' ')
// let revArrStatement = [];
// for(let i = 0; i < arrStatement.length; i++){
//     revArrStatement.unshift(arrStatement[i])
// }
// console.log(revArrStatement.join(" "));

// -------------- Task: 05 -------------------

// const numbers = [1,2,3];
// const newNumbers = [...numbers];

// newNumbers[0] = 99;

// console.log(newNumbers);


// -------------- Task: 06 -------------------

// let students = [
//   { name: "John", marks: 85 },
//   { name: "Alice", marks: 90 }
// ]

// for(let i = 0; i < students.length; i++){
//         console.log(students[i].name, " scored ", students[i].marks);
// }

// -------------- Task: 07 -------------------

const arrayNum = [
  [1, 2],
  [3, 4],
  [5, 6]
];

arrayNum[1][0] = 99;

console.log(arrayNum);
