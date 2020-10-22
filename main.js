//exrecise 1
const myVariable = "my variable"
const resault = myVariable + "is the best thing ever"
console.log(resault)

const password = "12345"
const confirmPassword = "12245"

//exresice 2
if (password==confirmPassword){
    console.log("the passwords match")
    
    
    
}
else {
    console.log("the passwords dont match")
}

//exrecise 3
let num1 = 423
let num2 = 12
console.log(num1*num2)

let num3 = 802
let num4 = 2
console.log(num3/num4)
console.log((5+6)*3)

//exrecise 1 conditions
let numChildren = 0
let isCareful = false
if (isCareful == false){
    numChildren+=1
}
console.log(numChildren)

//exrecise 2 conditions
let silverWareCount = 3
if(silverWareCount/2!=0){
    console.log("there is something missing")
}

//exrecise 3 conditions
let performance = "stellar"
let salary = 10000
const goodBonus = 1000
const stellarBonus = 3000

if(performance == "stellar"){
    salary+=stellarBonus
}
else{
    salary+=goodBonus
}

//exrecise 4 conditions
const isVIP = false
let cash = 500

if(isVIP==true||cash>=300){
    console.log("you can enter the club, have fun!")
}
else{
    console.log("youre poor go away or get famous")
}

//exrecise 6 conditions
const gender = null
let profession = "business"

if(gender == null){
    profession+="person"
}
else if(gender==male){
    profession+="man"
}
else{
    profession+="woman"
}
console.log(profession)

//exrecise 7 conditions
let boughtTesla = true
const yearOfTeslaPurchase = 2014
let isUSCitizen = true
let currentYear = 2018

if(boughtTesla == true&&isUSCitizen==true){
    console.log("how long ago did u buy your tesla?")
    if(yearOfTeslaPurchase<=2016){
        console.log("would u like an upgrade???")
    }
    else{
        console.log("are you satisfied with your car???")
    }
}
if(isUSCitizen==false){
    console.log("would you like to move to the us?")
}
if(boughtTesla==false){
    console.log("would you like to buy a tesla? :D")
}
