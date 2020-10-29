//erecise 1 +2

// const calcAge = function(currentYear, bornYear){
//     return(currentYear-bornYear)
// }

// const age = calcAge(2017, 1989)
// console.log(`you are either ${(age)} or ${(age-1)} years old`)

//exrecise 3

// const isEven = function(number){
//     if (number%2 == 0){
//         return true;
//     } else{
//         return false;
//     }

// }

//exrecise 4

// const printOddNumber = function(array){
//     for (let i in array){
//         if (isEven(array[i])==false){
//             console.log(array[i])
//         }
//     }
// }

// let nums = [1,2,4,5,7,11,13,20]
// printOddNumber(nums)

//exrecise 5

// const checkExists = function(array, number){
//     for(let i in array){
//         if(array[i]==number){
//             return true    
//        }    
//     }
// return false
// }
// let anArray = [0,2,5,6]
// let aNumber = 1

// console.log(checkExists(anArray,aNumber))

//exrecise 6

// const calculator = {
//     add: function(number1, number2){
//         let sum = number1+number2
//         return sum
//     },
//     subtruct: function(number1, number2){
//         let subt = number1-number2
//         return subt
//     }
// }
// const result1 = calculator.add(20, 1)
// const result2 = calculator.subtruct(35, 9)
// console.log(result1, result2)

//exrecise 7

// const turnToKing = function(name, money){
//     increaseByNameLength = function(money, name){
//         let length = name.length
//         return money*length
//     }
//     makeRegal = function(name){
//         return ("His Royal Highness," + name)
//     }
//     name = name.toUpperCase()
//     money = increaseByNameLength(money, name)
//     name = makeRegal(name)

//     console.log(name + " has " + money + " gold coins")
// }

// turnToKing("martin luther", 100)

//extension

// const splice = function(array,start, deleteCount, ...items){
//     let deletedItems = []
//     if(start>array.length){
//         start=array.length
//     }
//     if(start<0){
//         start = array.length+start
//     }
//     if(deleteCount>0){
//         if(deleteCount>= array.length){
//             deletedItems = array.splice(0, array.length)
                
//         }
//         deletedItems = array.splice(start, deleteCount)
        
//     }
//     if(deleteCount == undefined){
//         deletedItems = array.splice(start)
        
//     }
//     let startCount = start
//     for(let i in items){
//         array.splice(startCount, 0, items[i])
//         startCount++
//     }

// return deletedItems

// }

// const rewriteArr = function(arr, start, delete1){
//     for (let i=start; i<=delete1 ;i++){
//         arr[start] = arr[(start+3)]
//     }
//     for(let j = 0; j<delete1; j++){
//         arr.pop()
//     }
    
// }

// const rewriteArrAdd = function(arr, start, ...items){
//     let temp = []
//     let j = 0
//     for (let i = start; i<items.length; i++){
//         temp[j]= arr[i]
//         arr[i] = items[j]
//         j++
//     }
//     for(let p = j; p<arr.length; p++){
//         temp[p]= arr[p]
//         arr.pop();
//     }
    

//     for (let k in temp){
//         arr.push(temp[k])
//     }
// }

const rewriteArrAdd = function(arr, start, ...items){
    let temp = []
    let j = 0
    for(let i=start; i<arr.length;i++){
        temp[j]= arr[i]
        arr[i]= items[j]
        j++
        for(let k=0; k<(arr.length-items.length); k++){
            temp[j]= arr[i]
        }
}
  


const splice = function(array,start, deleteCount, ...items){
    let deletedItems = []
    if(start>array.length){
        start=array.length
    }
    if(start<0){
        start = array.length+start
    }
    if(deleteCount>0){
        if(deleteCount>= array.length){
            deletedItems = array.slice(0, array.length)
            rewriteArr(array, 0, array.length)
                
        }
        deletedItems = array.slice(start, deleteCount)
        rewriteArr(array, start, deleteCount)
        
    }
    if(deleteCount == undefined){
        deletedItems = array.slice(array.length)
        rewriteArr(array,0, array.length)
    }
    let startCount = start
    for(let i in items){
        array.splice(startCount, 0, items[i])
        startCount++
    }

return deletedItems

}

let arr = [0,1,2,3,4]
rewriteArrAdd(arr, 0, 32, 41,45)
}
