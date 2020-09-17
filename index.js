/*Type of loops

***Basic conditional logic****
for
for..of
for..in
while
do..while

****high order array:****
map
Weakmap
forEach

Developer: Shaun P

 */
// would have to writre out n maount of times without loops
// console.loop('loop')
/* for() loop parts intiilization ,condition, and iteration */
// runs the strin 'loop' amount of times as pers the condition
// i stands for index

//1
// for( let i =0;i < 5; i++){
//   console.log('loop');
// }

// //with index count++
//2
// for( let i =0;i < 5; i++){
//   console.log('loop' + i);
// }


// decrement reverse iteration
//3
// for( let i =0; i > 5; i--){
//   console.log('loop' + i);
// }

// Using if statment
//4
// for( let i =0;i < 5; i++){
//   console.log('loop' + " " + i);
//  if(i === 3) break; // stop when loop reaches 3
// }


// Loop through array
//5

// const names = ['Shaun', 'Add', 'Even', 'Rylee', 'Emma', 'Angie'];

// for( let i =0;i < names.length; i++){
//   console.log(i + " " + names[i]);
// //  if(i === 6) break; // stop when loop reaches 3
// }

// for of loop  set a varible to loop through array
//6

// const names = ['Shaun', 'Add', 'Even', 'Rylee', 'Emma', 'Angie'];

// for(vName of names){
//   console.log(vName);
//   // console.log(names);
//   // console.log(names + vName);
// }

// looping through objects
//7
// const names = ['Shaun', 'Add', 'Even', 'Rylee', 'Emma', 'Angie'];
// for(name of names){
// console.log(name);
// } 

// List key value pairs
//8
// const user = {'firstName': 'Shaun', 'lastName': 'P'}
// for(key in user){
// console.log(user[key]);
// } 

// While loops inceremnt
//9
//  let i =0;
//  while(i < 10){
//    console.log('i' + i);
//    i++
//  }

// While loops deceremnt
//10
//  let j = 10;
//  while(j > 0) {
//    console.log('j' + j);
//    j--
//  }

// While loop with if condition
// 11
//  let i =0;
//  while(i < 10){
//    console.log('i'+ '=' + i);
//    i++;
//    if(i === 5) break;
//  }
// While loop with if condition continue to next loop while breaking on the speified loop '5'
//12
//  let i =0;
//  while(i < 10){
//    i++;
//    if(i === 5) continue;
//    console.log('i'+ '=' + i);
//  }

// do while loop
//13
//  let i =0;
// do {
//    i++;
//    if(i === 5) continue;
//    console.log('i'+ '=' + i);
//  }  while(i < 20);

// for Each function
//14

const animals = ['Shaun', 'Add', 'Even', 'Rylee', 'Emma', 'Angie'];

animals.forEach( animal => {
  console.log(animal)
});