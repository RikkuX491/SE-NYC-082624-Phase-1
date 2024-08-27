function doHomework(){
    console.log("Take out notes...")
    console.log("Open laptop...")
    console.log("Do the homework.")
}

// doHomework()

// console.log("Time for lunch!")

// console.log("Hello Flatiron!")
// console.log("Hello Flatiron!")
// console.log("Hello Flatiron!")
// console.log("Hello Flatiron!")
// console.log("Hello Flatiron!")
// console.log("Hello Flatiron!")
// console.log("Hello Flatiron!")
// console.log("Hello Flatiron!")
// console.log("Hello Flatiron!")
// console.log("Hello Flatiron!")
// console.log("Hello Flatiron!")
// console.log("Hello Flatiron!")
// console.log("Hello Flatiron!")
// console.log("Hello Flatiron!")
// console.log("Hello Flatiron!")
// console.log("Hello Flatiron!")
// console.log("Hello Flatiron!")
// console.log("Hello Flatiron!")
// console.log("Hello Flatiron!")
// console.log("Hello Flatiron!")
// console.log("Hello Flatiron!")
// console.log("Hello Flatiron!")
// console.log("Hello Flatiron!")
// console.log("Hello Flatiron!")
// console.log("Hello Flatiron!")
// console.log("Hello Flatiron!")
// console.log("Hello Flatiron!")
// console.log("Hello Flatiron!")
// console.log("Hello Flatiron!")
// console.log("Hello Flatiron!")
// console.log("Hello Flatiron!")
// console.log("Hello Flatiron!")

// for(let counter = 1; counter <= 16; counter++){
//     console.log("Hello Flatiron!")
// }


// for(let counter = 1; counter <= 8; counter++){
//     doHomework()
// }

function getPersonName(){
    return "Alice"
}

// console.log("Alice")
// console.log(getPersonName)
// console.log(typeof getPersonName)
// console.log(getPersonName())
// console.log(typeof getPersonName())

// Declaring num2 in global scope makes it accessible from everywhere in our code in index.js
// const num2 = 45

function sum(num1, num2){
    console.log(`num1 is ${num1}`)
    console.log(`num2 is ${num2}`)
    return num1 + num2
}

// sum(4, 5)

// Cannot access num1 from outside of the sum() function since num1 has function scope
// console.log(num1)

// const result = sum(12, 4)
// console.log(`The sum is ${result}`)

function createUserAccount(){

    const user = {
        username: "alice123",
        password: "strawberries",
        email: "alice@gmail.com",
        age: 21,
        isStudent: true,
        speak: function (){
            console.log("Hello Flatiron!")
        }
    }

    // Updating the value for a key of an object using dot notation
    user.username = prompt("Enter a username for your account:")

    // Updating the value for a key of an object using square bracket notation
    user['password'] = "hello world"

    // const username = prompt("Enter a username for your account:")
    // const password = prompt("Enter a password for your account:")
    // const email = prompt("Enter an email for your account:")
    
    // console.log(username)
    // console.log(password)
    // console.log(email)

    console.log(user)

    // console.log(user.username)
    // console.log(user.password)
    // console.log(user.speak())
    // user.speak()

    // alert("Account created!")
}

// createUserAccount()

const fruit = {
    name: "banana",
    price: 0.99,
    isSweet: true
}

// console.log(fruit)

// const sports = ["soccer", "baseball", "football"]
// console.log(sports)

const person1 = {
    name: "alice",
    age: 21
}

const person2 = {
    name: "bob",
    age: 34
}

const people = [person1, person2]
// console.log(people)

// function difference(num1, num2){
//     console.log(`num1 is ${num1}`)
//     console.log(`num2 is ${num2}`)
// }

// difference contains a function expression
const difference = function (num1 = 0, num2 = 0){
    console.log(`num1 is ${num1}`)
    console.log(`num2 is ${num2}`)
    return num1 - num2
}

// const result2 = difference(34)
// console.log(result2)

const product = (num1, num2) => num1 * num2

const result3 = product(3, 4)
// console.log(result3)

let counter = 0

while(counter < 10){
    const food = "pizza"
    let dessert = "ice cream"
    // var sport = "football"
    counter++
}

// console.log(food)
// console.log(dessert)
// console.log(sport)

function cookFood(gatherIngredients){

    console.log(gatherIngredients)

    gatherIngredients()

    return () => {
        console.log("Food is all done and ready to eat!")
    }
}

// cookFood(34)

// const cookedResultFunction = cookFood(() => {
//     console.log("Get onions...")
//     console.log("Get peppers...")
//     console.log("Get other ingredients...")
// })

// cookedResultFunction()

// Creating an array containing strings with names of foods
const foods = ["pizza", "ice cream", "guacamole"]

// Use the push() method to add an element to the end of the array
foods.push("chicken")

// Here's another way to add an element to the end of the array
foods[foods.length] = "broccoli"

// Use the unshift() method to add an element to the front of the array
foods.unshift("ramen")

// Use the pop() method to remove the very last element from the array
foods.pop()

// Use the shift() method to remove the very first element from the array
foods.shift()

console.log(foods)

// Using the slice() method to get an array that contains a subset of data from the original array
// console.log(foods.slice(1))
// console.log(foods.slice(2))
// console.log(foods.slice(3))
// console.log(foods.slice(1, 3))

// Destructively remove all elements after index 1 and including index 1 from the array stored in the foods variable
// foods.splice(1)

// Destructively remove 2 elements starting at index 1 and including index 1 from the array
// foods.splice(1, 2)

// Insert a new element at index 3 of the array (without removing any elements)
// foods.splice(3, 0, "cheese")

// Looping through an array using a for loop
// for(let index = 0; index < foods.length; index++){
//     console.log(foods[index])
// }

// Iterating through an array using a for...of loop
// for(const food of foods){
//     console.log(food)
// }

const animal = {
    name: "Kitty",
    animalType: "Cat",
    isFluffy: true
}

console.log(animal)

// for(const key in animal){
//     console.log(key)
//     console.log(animal[key])
// }