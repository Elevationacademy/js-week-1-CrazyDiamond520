//spotcheck 1

let car = {
    color: "blue",
    numWheels: 4, 
    isFancy: false
}
if(car.isFancy==true){
    console.log("the "+ car.color + " car has "+ car.numWheels + " wheels "+ "and it is fancy")
} else{
    console.log("the "+ car.color + " car has "+ car.numWheels + " wheels "+ "and it is NOT fancy")

}

//spotcheck 2

const obj2 = {
    item: "nice item", 
    toBeginning: true,
    items: []
}
if (obj2.toBeginning == true){
    obj2.items.splice(0, 0, obj2.item)
} else obj2.items.push(obj2.item)
console.log(obj2.items)

//exrecise 1

const p1 = {
    name: "Jill",
    age: 25,
    city: "Tel Aviv"
}

const p2 = {
    name: "Robert",
    age: 25,
    city: "Tel Aviv"
}

if(p1.age == p2.age){
    if(p1.city == p2.city){
        console.log("Jill wanted to date Robert")
    } else {
        console.log("Jill wanted to date Robert but couldnt")
    }
}

//exrecise 2

const myList = [
    {name:"amit", age: 23},
    {name: "noa", age: 19}
]
myList[0].age = 24
myList.splice(1,1)
    console.log(myList)

//exrecise 3

const myArray = [
    {name: "lol", age: 10},
    {name: "lol1", age: 11}
]
myList.push(myArray)
console.log(myList)

//exrecise 4

const library = {
    books: []
}
let book1 = {
    title: "thats the title",
    author: "thats the author"
}
let book2 = {
    title: "thats a sick title",
    author: "thats a sick author"
}
library.books.push(book1, book2)
console.log(library.books)

//exrecise 5+5.1+5.2

const reservations = {
    Bob: { claimed: false },
    Ted: { claimed: true }
  }
  
  const name = prompt('Please enter the name for your reservation');

 if("bob" == name.toLowerCase()){
     if(reservations.Bob.claimed == false){
         alert("Welcome!");
     } else {
         alert("your reservation has been claimed already");
     }
 }
 if("ted" == name.toLowerCase()){
     if(reservations.Ted.claimed == false){
         alert("Welcome!");
     } else{
         alert("Hmm, someonce already claimed this reservation");
     }
 }
 if("bob" != name.toLowerCase() && "ted" != name.toLowerCase()){
     alert("you have no reservation!");
     rname ={
         name:{claimed: true}
     }
     Object.assign(reservations, rname);
 }
 

 //extensions

 const date = 3

const kitchen = {
    owner: "Geraldine",
    hasOven: false,
    fridge: {
        price: 500,
        works: false, 
        items: [
            { name: "cheese", expiryDate: 7 },
            { name: "raddish", expiryDate: 2 },
            { name: "bread", expiryDate: 1 }
        ]
    }
}

const hasOven = kitchen.hasOven
const owner = kitchen.owner
const price = kitchen.fridge.price
const works = kitchen.fridge.works

//first condition
if(hasOven == true && works == true){ 
    if(date > kitchen.fridge.items[0].expiryDate){
        console.log(owner + "'s " + kitchen.fridge.items[0].name + " expired " + (date- kitchen.fridge.items[0].expiryDate)+ " days ago"+" weird, considering her fridge works" + " Luckily, she has an oven to cook the " + kitchen.fridge.items[0].name + " in")
    } else {
        console.log("hasnt expired yet!")
    }
    if(date > kitchen.fridge.items[1].expiryDate){
        console.log(owner + "'s " + kitchen.fridge.items[1].name + " expired " + (date- kitchen.fridge.items[1].expiryDate)+ " days ago"+" weird, considering her fridge works" + " Luckily, she has an oven to cook the " + kitchen.fridge.items[1].name + " in")
    } else {
        console.log("hasnt expired yet!")
    }
    if(date > kitchen.fridge.items[2].expiryDate){
        console.log(owner + "'s " + kitchen.fridge.items[2].name + " expired " + (date- kitchen.fridge.items[2].expiryDate)+ " days ago"+" weird, considering her fridge works" + " Luckily, she has an oven to cook the " + kitchen.fridge.items[2].name + " in")
    } else {
        console.log("hasnt expired yet!")
    }
}
//second condition
if(hasOven == false && works == true){
    if(date > kitchen.fridge.items[0].expiryDate){
        console.log(owner + "'s " + kitchen.fridge.items[0].name + " expired " + (date- kitchen.fridge.items[0].expiryDate)+ " days ago"+" weird, considering her fridge works" + " Too bad she doesn't have an oven to cook the " + kitchen.fridge.items[0].name + " in")
    } else {
        console.log("hasnt expired yet!")
    }
    if(date > kitchen.fridge.items[1].expiryDate){
        console.log(owner + "'s " + kitchen.fridge.items[1].name + " expired " + (date- kitchen.fridge.items[1].expiryDate)+ " days ago"+" weird, considering her fridge works" + " Too bad she doesn't have an oven to cook the " + kitchen.fridge.items[1].name + " in")
    } else {
        console.log("hasnt expired yet!")
    }
    if(date > kitchen.fridge.items[2].expiryDate){
        console.log(owner + "'s " + kitchen.fridge.items[2].name + " expired " + (date- kitchen.fridge.items[2].expiryDate)+ " days ago"+ " weird, considering her fridge works" +  " Too bad she doesn't have an oven to cook the " + kitchen.fridge.items[2].name + " in")
    } else {
        console.log("hasnt expired yet!")
    }

}
//third condition
if(hasOven == true && works == false){
    if(date > kitchen.fridge.items[0].expiryDate){
        console.log(owner + "'s " + kitchen.fridge.items[0].name + " expired " + (date- kitchen.fridge.items[0].expiryDate)+ " days ago"+" Probably because her fridge doesn't work" + " Luckily, she has an oven to cook the " + kitchen.fridge.items[0].name + " in " + "and she'll have to pay " + (price/2)+ " to fix the fridge")
    } else {
        console.log("hasnt expired yet!")
    }
    if(date > kitchen.fridge.items[1].expiryDate){
        console.log(owner + "'s " + kitchen.fridge.items[1].name + " expired " + (date- kitchen.fridge.items[1].expiryDate)+ " days ago"+" Probably because her fridge doesn't work" + " Luckily, she has an oven to cook the " + kitchen.fridge.items[1].name + " in " + "and she'll have to pay " + (price/2)+ " to fix the fridge")
    } else {
        console.log("hasnt expired yet!")
    }
    if(date > kitchen.fridge.items[2].expiryDate){
        console.log(owner + "'s " + kitchen.fridge.items[2].name + " expired " + (date- kitchen.fridge.items[2].expiryDate)+ " days ago"+" Probably because her fridge doesn't work" + " Luckily, she has an oven to cook the " + kitchen.fridge.items[2].name + " in " + "and she'll have to pay " + (price/2)+ " to fix the fridge")
    } else {
        console.log("hasnt expired yet!")
    }
}
//forth condition
if(hasOven == false && works == false){
    if(date > kitchen.fridge.items[0].expiryDate){
        console.log(owner + "'s " + kitchen.fridge.items[0].name + " expired " + (date- kitchen.fridge.items[0].expiryDate)+ " days ago"+" Probably because her fridge doesn't work" + " Too bad she doesn't have an oven to cook the " + kitchen.fridge.items[0].name + " in " + "and she'll have to pay " + (price/2)+ " to fix the fridge")
    } else {
        console.log("hasnt expired yet!")
    }
    if(date > kitchen.fridge.items[1].expiryDate){
        console.log(owner + "'s " + kitchen.fridge.items[1].name + " expired " + (date- kitchen.fridge.items[1].expiryDate)+ " days ago"+" Probably because her fridge doesn't work" + " Too bad she doesn't have an oven to cook the " + kitchen.fridge.items[1].name + " in " + "and she'll have to pay " + (price/2)+ " to fix the fridge")
    } else {
        console.log("hasnt expired yet!")
    }
    if(date > kitchen.fridge.items[2].expiryDate){
        console.log(owner + "'s " + kitchen.fridge.items[2].name + " expired " + (date- kitchen.fridge.items[2].expiryDate)+ " days ago"+" Probably because her fridge doesn't work" + " Too bad she doesn't have an oven to cook the " + kitchen.fridge.items[2].name + " in " + "and she'll have to pay " + (price/2)+ " to fix the fridge")
    } else {
        console.log("hasnt expired yet!")
    }

}


