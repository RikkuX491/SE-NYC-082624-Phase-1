const burgers = [
    {
        name: "Flatburger",
        image: "./assets/food/flatburger.jpeg",
        description: "Our signature Flatburger which is a super delicious cheeseburger that'll leave you wanting another Flatburger! It's too good to be true!"
    },
    {
        name: "Maple Bacon Burger",
        image: "./assets/food/maple-bacon-burger.jpeg",
        description: "A great option for a breakfast burger or a great option for brunch if you're hungry enough to eat 2 of these burgers!"
    },
    {
        name: "Mushroom Burger",
        image: "./assets/food/mushroom-burger.webp",
        description: "A mushroom burger with our exclusive Flatburger melted cheese!"
    },
    {
        name: "Avocado Bun Burger",
        image: "./assets/food/avocado-bun-burger.jpeg",
        description: "A healthier take on our signature Flatburger but with avocado buns!"
    },
    {
        name: "Ramen Burger",
        image: "./assets/food/ramen-burger.jpeg",
        description: "If you love ramen and burgers, what are you waiting for? Order our exclusive ramen burger now!"
    }
]

const otherFoods = [
    {
        name: "French Fries",
        image: "./assets/food/french-fries.jpeg",
        description: "The good old french fries made in Flatburger style!"
    },
    {
        name: "Burrito",
        image: "./assets/food/burrito.webp",
        description: "A Flatburger style burrito with our exclusive Flatburger melted cheese and any meat of your choosing in addition to your choice of additional ingredients!"
    },
    {
        name: "Taco",
        image: "./assets/food/taco.jpeg",
        description: "The Flatburger exclusive Taco! Get it while supplies last!"
    },
    {
        name: "Hot Dog",
        image: "./assets/food/hot-dog.jpeg",
        description: "The Flatburger exclusive Hot Dog! Get it while supplies last!"
    },
    {
        name: "Onion Rings",
        image: "./assets/food/onion-rings.jpeg",
        description: "The Flatburger exclusive Onion Rings! Get them while supplies last!"
    }
]

// Example code
// console.log(burgers)

// Iterating through an array using for...of
// for(const burger of burgers){
//     console.log(burger)
// }

// This is just a visualization of how we might imagine that forEach(), find(), filter(), and map() works...
const someObject = {
    forEach: (callbackFunction) => {
        for(const burger of burgers){
            callbackFunction(burger)
        }
    },
    find: (callbackFunction) => {
        for(const burger of burgers){
            if(callbackFunction(burger) === true){
                return burger
            }
        }
    },
    filter: (callbackFunction) => {

        const filteredElements = []

        for(const burger of burgers){
            if(callbackFunction(burger) === true){
                filteredElements.push(burger)
            }
        }

        return filteredElements
    },
    map: (callbackFunction) => {
        
        const newArray = []

        for(const burger of burgers){
            const returnValue = callbackFunction(burger)
            newArray.push(returnValue)
        }

        return newArray
    }
}

// someObject.forEach(burger => {
//     console.log(burger)
// })

// const foundBurger = someObject.find(burger => {
//     return burger.name === "Flat"
// })

// console.log(foundBurger)

// const filteredBurgers = someObject.filter(burger => {
//     return burger.name.charAt(0) === 'M'
// })

// console.log(filteredBurgers)

// const newArray = someObject.map(burger => {
//     return burger.name
// })

// console.log(newArray)

// Iterating through an array using the forEach() array iterator method
burgers.forEach((burger, index) => {
    // console.log(burger)
    // console.log(index)
})

// Using the find() array iterator method to find a specific element depending on a condition
const foundBurger = burgers.find(burger => {
    return burger.name === "Flatburger"
})

// console.log(foundBurger)

// Using the filter() array iterator method to get a filtered array of elements depending on a condition
const filteredBurgers = burgers.filter(burger => {
    return burger.name.charAt(0) === 'M'
})

// console.log(filteredBurgers)

// Using the map() array iterator method to get a new array of the same length that has information depending on the return value of the callback function
const newArray = burgers.map(burger => {
    // if(burger.name === "Flatburger"){
    //     return "This is the Flatburger!"
    // }
    // else {
    //     return burger
    // }

    return burger.name
})

// console.log(newArray)

// DOM Manipulation example content below

// querySelector() vs getElementById()

// Searching for an element by id with querySelector()
const foodDetailElement = document.querySelector('#food-detail')
// console.log(foodDetailElement)

// Searching for an element by class with querySelector()
// const detailImageElement = document.querySelector('.detail-image')
// console.log(detailImageElement)

// Searching for an element by id with getElementById()
// const restaurantMenuElement = document.getElementById('restaurant-menu')
// console.log(restaurantMenuElement)

// Searching for multiple elements with querySelectorAll()
const divElements = document.querySelectorAll('div')
// console.log(divElements)
// console.log(divElements[0])
// console.log(divElements[1])

// Searching for multiple elements with getElementsByClassName()
const elements = document.getElementsByClassName('name')
// console.log(elements)
// console.log(elements[0])

// Modifying the text content of an element by reassigning a value to the textContent property of the element
const nameElement = document.querySelector('.name')
nameElement.textContent = burgers[0].name

const descriptionElement = document.getElementById('description-display')
descriptionElement.textContent = burgers[0].description

// Modifying the src attribute of an <img> element
const detailImageElement = document.querySelector('.detail-image')
detailImageElement.src = burgers[0].image

// Difference between textContent vs innerText vs innerHTML
// descriptionElement.textContent = `<h1>hello \nworld</h1>`
// descriptionElement.innerText = `<h1>hello \nworld</h1>`
// descriptionElement.innerHTML = `<h1>hello \nworld</h1>`

const restaurantMenuElement = document.getElementById('restaurant-menu')

burgers.forEach(burger => {
    // Using createElement() to create a new element
    const imgElement = document.createElement('img')
    imgElement.src = burger.image

    // Using appendChild() to nest an element within another element
    restaurantMenuElement.appendChild(imgElement)

    // Using append() to nest an element within another element or append text inside of an element
    // restaurantMenuElement.append("hello world")

    // console.log(burger.image)
    // console.log(imgElement)
})

// Removing an element from the DOM
// restaurantMenuElement.remove()
// console.log(restaurantMenuElement)

// document.body.append(restaurantMenuElement)