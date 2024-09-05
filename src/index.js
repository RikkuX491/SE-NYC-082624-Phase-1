const restaurantMenu = document.getElementById('restaurant-menu')

let currentlyDisplayedFoodId

let foodsArray

fetch('http://localhost:3000/foods')
.then(response => response.json())
.then(foods => {

    foodsArray = foods

    displayFoodDetails(foods[0])

    foods.forEach(addFoodImageToRestaurantMenu)
})

function addFoodImageToRestaurantMenu(food){
    const imgElement = document.createElement('img')
    imgElement.src = food.image
    imgElement.addEventListener('mouseover', () => {
        displayFoodDetails(food)
    })

    imgElement.addEventListener('click', () => {
        
        // console.log(food.id)

        // DELETE request with optimistic rendering
        // imgElement.remove()

        // fetch(`http://localhost:3000/foods/${67}`, {
        //     method: "DELETE"
        // })

        // DELETE request with pessimistic rendering
        fetch(`http://localhost:3000/foods/${food.id}`, {
            method: "DELETE"
        })
        .then(response => {
            if(response.ok){
                // In response to DELETE request: Steps to optimize our front-end webpage to ensure that the food data will persist when displaying details for different burgers

                // Step 1: Modify foodsArray in response to the DELETE request (delete - deleting an existing food)
                foodsArray = foodsArray.filter(f => {
                    return f.id !== food.id
                })
                
                // Steps # 2 & Step 3 happen within the updateImgElementsInRestaurantMenu() function
                updateImgElementsInRestaurantMenu()
            }
            else{
                alert(`Error: Unable to delete Food # ${food.id}`)
            }
        })
    })

    restaurantMenu.appendChild(imgElement)
}

function displayFoodDetails(food){
    
    currentlyDisplayedFoodId = food.id

    const foodDetailImageElement = document.getElementsByClassName('detail-image')[0]
    foodDetailImageElement.src = food.image
    const foodNameElement = document.getElementsByClassName('name')[0]
    foodNameElement.textContent = food.name
    const foodDescriptionDisplayElement = document.getElementById('description-display')
    foodDescriptionDisplayElement.textContent = food.description
    const numberInCartCountElement = document.getElementById('number-in-cart-count')
    numberInCartCountElement.textContent = food.number_in_cart
}

function updateImgElementsInRestaurantMenu(){
    // Step 2: Remove all elements that are nested within the restaurant-menu <div> element
    restaurantMenu.innerHTML = ""

    // Step 3: Add the <img> elements back into the restaurant-menu <div> element using foodsArray
    foodsArray.forEach(addFoodImageToRestaurantMenu)
}

const newFoodForm = document.getElementById('new-food')
newFoodForm.addEventListener('submit', (event) => {
    event.preventDefault()

    const newNameInputElement = document.getElementById('new-name')
    const newImageInputElement = document.getElementById('new-image')
    const newDescriptionInputElement = document.getElementById('new-description')

    const newFood = {
        name: newNameInputElement.value,
        image: newImageInputElement.value,
        description: newDescriptionInputElement.value,
        number_in_cart: 0
    }

    fetch('http://localhost:3000/foods', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(newFood)
    })
    .then(response => {
        if(response.ok){
            response.json().then(newFoodData => {
                // In response to POST request: Steps to optimize our front-end webpage to ensure that the food data will persist when displaying details for different burgers

                // Step 1: Modify foodsArray in response to the POST request (create - adding a new food)
                foodsArray.push(newFoodData)
                
                // Steps # 2 & Step 3 happen within the updateImgElementsInRestaurantMenu() function
                updateImgElementsInRestaurantMenu()
            })
        }
        else{
            alert("Error: Unable to add new food!")
        }
    })

    newFoodForm.reset()
})

const addToCartForm = document.getElementById('add-to-cart-form')
addToCartForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const numberToAddInputElement = document.getElementById('number-to-add')
    const numberInCartCountElement = document.getElementById('number-in-cart-count')
    const sum = Number(numberInCartCountElement.textContent) + Number(numberToAddInputElement.value)

    // console.log(sum)
    // console.log({sum})
    // console.log({number_in_cart: sum})
    // `sum` is the variable that contains the value that we want to save to the database when making the PATCH request to update the number_in_cart

    // console.log(currentlyDisplayedFoodId)

    // PATCH request with Optimistic rendering
    // numberInCartCountElement.textContent = sum

    // fetch(`http://localhost:3000/foods/${currentlyDisplayedFoodId}`, {
    //     method: "PATCH",
    //     headers: {
    //         "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify({number_in_cart: sum})
    // })

    // PATCH request with Pessimistic rendering
    fetch(`http://localhost:3000/foods/${currentlyDisplayedFoodId}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({number_in_cart: sum})
    })
    .then(response => {
        if(response.ok){
            response.json().then(updatedFood => {
                numberInCartCountElement.textContent = updatedFood.number_in_cart
                
                // In response to PATCH request: Steps to optimize our front-end webpage to ensure that the food data will persist when displaying details for different burgers

                // Step 1: Modify foodsArray in response to the PATCH request (update - modifying an existing food)
                foodsArray = foodsArray.map(food => {
                    if(food.id === updatedFood.id){
                        return updatedFood
                    }
                    else{
                        return food
                    }
                })
                
                // Steps # 2 & Step 3 happen within the updateImgElementsInRestaurantMenu() function
                updateImgElementsInRestaurantMenu()
            })
        }
        else{
            alert(`Error: Unable to update Food # ${currentlyDisplayedFoodId}`)
        }
    })
    // .then(updatedFood => {
    //     numberInCartCountElement.textContent = updatedFood.number_in_cart
    // })

    addToCartForm.reset()
})