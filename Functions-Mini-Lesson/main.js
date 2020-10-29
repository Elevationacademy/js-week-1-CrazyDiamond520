//mini-lesson exrecise

const story = "In the beginning there was light. Then there were wolves. Finally there was a big fire. Ultimately, Shelob the wolf-master put out the fire with her feet. But until then, the fire caused one heck of a lot of damage."
const specialChars = [",", ".", "'", '"',"?", "!", ";"]
const wordCounts = {}

const toFixedArray = function(myString){
    let myArray = myString.split(" ")
    for(let i in myArray){
        myArray[i]= myArray[i].toLowerCase();
    }
    return myArray
}

const singleWordCount = function(word, array){
    let counter = 0
    for(let i in array){
        if(array[i]==word){
            counter++
        }
    }
    return counter

}

const finalResult = function(wordCount, story){
    let myArray = toFixedArray(story);
        for(let i in myArray){
            currentword = myArray[i]
            let c=singleWordCount(currentword,myArray)
            newValue = { currentword: c}
            Object.assign(wordCount, newValue);
        }

        return wordCount

}


let ary = toFixedArray(story)
let something = singleWordCount("in", ary)
let j = finalResult(wordCounts, story)
console.log(j)
