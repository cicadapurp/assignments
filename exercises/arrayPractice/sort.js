// function leastToGreatest(arr) {
//  return  arr.sort()
// }

// console.log(leastToGreatest([1, 3, 5, 2, 90, 20])); // [1, 2, 3, 5, 20, 90] 


// function greatestToLeast(arr) {
//   return arr.sort().reverse()
// }

// char the first character 
// reorder the array 
// make assorication

// console.log(greatestToLeast(arr)); // [90, 20, 5, 3, 2, 1] 

// function lengthSort(arr) {
//   return arr.sort()
//   }

// console.log(lengthSort(["dog", "wolf", "by", "family", "eaten"])); // ["by", "dog", "wolf", "eaten", "family"] 

// function byAge(arr){
//   const agearr = arr.map( n => n.age)
//   const namearr = arr.map( n => n.name)
//   const allarr = agearr.push(...namearr)
//   return agearr.sort()
// }

// console.log(byAge([
//     {
//         name: "Quiet Samurai",
//         age: 22
//     },
//     {
//         name: "Arrogant Ambassador",
//         age: 100
//     },
//     {
//         name: "Misunderstood Observer",
//         age: 2
//     },
//     {
//         name: "Unlucky Swami",
//         age: 77
//     }
// ]));

// function fiveAndGreaterOnly(arr) {
//   return arr.filter( n => n > 5)
// }
// // test
// console.log(fiveAndGreaterOnly([3, 6, 8, 2])); /// [6, 8]


// function evensOnly(arr) {
//   return arr.filter( n => n % 2 === 0)
// }
// // test
// console.log(evensOnly([3, 6, 8, 2])); /// [6, 8, 2]

// function fiveCharactersOrFewerOnly(arr) {
//  return arr.filter( w => w.length < 5)
// }
// // test
// console.log(fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"])); // ["by", "dog", "wolf", "eaten"]

// function peopleWhoBelongToTheIlluminati(arr){
//   return arr.filter( p => p.member === true)
// }
// // test
// console.log(peopleWhoBelongToTheIlluminati([
//     { name: "Angelina Jolie", member: true },
//     { name: "Eric Jones", member: false },
//     { name: "Paris Hilton", member: true },
//     { name: "Kayne West", member: false },
//     { name: "Bob Ziroll", member: true }
// ]));
// // =>
// //[ { name: 'Angelina Jolie', member: true },
// //  { name: 'Paris Hilton', member: true },



function ofAge(arr){
  return  arr.filter( p => p.age >= 18 ) 
}
// test
console.log(ofAge([
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 16 },
    { name: "Bob Ziroll", age: 100 }
])); 
// => 
//[ { name: 'Angelina Jolie', age: 80 },
//  { name: 'Bob Ziroll', age: 100 } ]