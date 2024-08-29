const foods = [
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
    },
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

function eventHandler(){
    console.log("You clicked an element!")
}

function displayFoodDetails(food){
    const foodDetailImage = document.querySelector('.detail-image')
    foodDetailImage.src = food.image

    const foodName = document.querySelector('.name')
    foodName.textContent = food.name
    
    const foodDescriptionDisplay = document.getElementById('description-display')
    foodDescriptionDisplay.textContent = food.description
}

function addFoodImageToRestaurantMenu(food){
    const restaurantMenu = document.getElementById('restaurant-menu')
    // console.log(restaurantMenu)

    const foodImage = document.createElement('img')
    foodImage.src = food.image
    restaurantMenu.appendChild(foodImage)

    // Using the addEventListener() method to make each of the <img> elements listen for a click event and execute code in response to the click event
    foodImage.addEventListener('click', () => {
        displayFoodDetails(food)
    })
}

function handleSubmit(event) {
    event.preventDefault()
    // console.log("Form submitted!")
    // console.log(event)
    // console.log(event.target)

    const newNameInputElement = document.getElementById('new-name')
    // console.log(newNameInputElement.value)

    const newImageInputElement = document.getElementById('new-image')
    // console.log(newImageInputElement.value)

    const newDescriptionTextareaElement = document.getElementById('new-description')
    // console.log(newDescriptionTextareaElement.value)
    
    const newFood = {
        name: newNameInputElement.value,
        image: newImageInputElement.value,
        description: newDescriptionTextareaElement.value
    }

    // console.log(newFood)
    addFoodImageToRestaurantMenu(newFood)

    // event.target is a reference to the element that the event listener was attached to
    // event.target.reset() allows us to reset the values of the <input> and <textarea> elements to their default values which is empty string ""
    event.target.reset()
}

document.addEventListener('DOMContentLoaded', () => {    
    foods.forEach(addFoodImageToRestaurantMenu)
    
    // Display the food details for the first food after the DOM Content has loaded (which is why we invoke the function within the event handler (callback function) for DOMContentLoaded)
    displayFoodDetails(foods[0])
    
    // Example code - working with click events and defining response to the click event using an event handler (callback function)
    // foodDetailImage.addEventListener('click', () => {
    //     console.log("You clicked the image!")
    // })
    
    // Example code - click event with the <h3> element within the <header>
    // const headerText = document.querySelector('header h3')
    // headerText.addEventListener('click', function () {
    //     alert("You clicked the <h3> element within the <header> element!")
    // })

    // Example code - click event with <p> element (description display)
    // foodDescriptionDisplay.addEventListener('click', eventHandler)

    const newFoodForm = document.getElementById('new-food')
    newFoodForm.addEventListener('submit', handleSubmit)
})