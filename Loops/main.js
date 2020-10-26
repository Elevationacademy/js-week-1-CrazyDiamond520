

// //exrecise 1

// const ages = ['23', '25', '17']
// const names = ['amit', 'yoni', 'dor']

// for(let i = 0; i<ages.length ; i++){
//     console.log(`${names[i]} is ${ages[i]} years old`)
// }

// //exrecise 2

// const numbers = [20, 40, 60, 80]
// let sum = 0
// for(let i of numbers){
//     sum+= i
// }
// console.log(sum)

// //exrecise 3

// console.log(sum/numbers.length)

// //exrecise 4

// let nums = []
// for(let i=1; i<101; i++){
//     nums.push(i)
// }
// console.log(nums)

// // exrecise 5

// for (let number in nums){
//     if(number%2 == 1){
//         console.log(number)
//     }
// }

// // exrecise 6    

// let nums = [773, 414, 213, 374, 434, 700, 506, 495, 852, 585, 271, 198, 689, 248, 708, 197, 96, 260, 921, 834, 258, 662, 501, 632, 715, 503, 538, 289, 596, 381, 817, 280, 968, 877, 431, 146, 491, 724, 83, 841, 174, 21, 460, 25, 785, 539, 291, 404, 903, 278, 159, 229, 216, 683, 84, 87, 879, 406, 661, 537, 890, 394, 382, 477, 271, 373, 82, 104, 709, 723, 333, 958, 95, 983, 732, 917, 324, 785, 754, 23, 659, 551, 408, 442, 766, 242, 611, 846, 802, 866, 817, 848, 227, 349, 243, 837, 21, 954, 146, 11]
// for(let i in nums){
//     if(nums[i] == 709){
//         console.log(i)
//     }
// }

// // exrecise 7

// const names = ["Ashley", "Donovan", "Lucas"]
// const ages = [23, 47, 18]
// const people = []
// let ppl = {}

// for(let i in names){
//     ppl= {
//         name: names[i], age: ages[i]
//     }
//     people.push(ppl)
// }
// console.log(people)

// //exrecise 8

// for(let i in people){
//     console.log(`${people[i].name} is ${people[i].age} years old`)
// }

// //exrecise 9

// const posts = [
//     {id: 1, text: "Love this product"},
//     {id: 2, text: "This is the worst. DON'T BUY!"},
//     {id: 3, text: "So glad I found this. Bought four already!"}
//   ]

//   for(let i in posts){
//       if(posts[i].id == 2){
//           posts.splice(i, 1)
//       }
//   }
//   console.log(posts)

// //exrecise 10

// const posts = [
//     {
//       id: 1, 
//       text: "Love this product",
//       comments: []
//     },
//     { 
//       id: 2, 
//       text: "This is the worst. DON'T BUY!", 
//       comments: [
//                   {id: 1, text: "Idiot has no idea"}, 
//                   {id: 2, text:"Fool!"}, 
//                   {id: 3, text: "I agree!"}
//                 ]
//      },
//      {
//       id: 3, 
//       text: "So glad I found this. Bought four already!",
//       comments: []
//      }
//   ]

//   for(let i in posts){
//       if(posts[i].id == 2){
//           for(let j in posts[i].comments){
//               if(posts[i].comments[j].id == 3){
//                   posts[i].comments.splice(j, 1)
//               }
              
//           }
//       }
//   }
//   console.log(posts)

//extension

  const dictionary = {
    "A": ["Aardvark", "Abacus", "Actually", "Atomic"],
    "B": ["Banana", "Bonkers", "Brain", "Bump"],
    "C": ["Callous", "Chain", "Coil", "Czech"]
  }

 keys = Object.keys(dictionary)
 console.log(keys)
 
 for(let i of keys){
     console.log(`words that begin with the letter ${i}:`)
         for(let j in dictionary[i]){
             console.log(dictionary[i][j])
         }
     
   
 }
 


