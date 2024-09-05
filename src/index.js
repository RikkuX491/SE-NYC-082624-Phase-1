const restaurantMenu = document.getElementById('restaurant-menu')

let currentlyDisplayedFoodId

fetch('http://localhost:3000/foods')
.then(response => response.json())
.then(foods => {
    displayFoodDetails(foods[0])

    foods.forEach(food => {
        addFoodImageToRestaurantMenu(food)
    })
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
                imgElement.remove()
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
                addFoodImageToRestaurantMenu(newFoodData)
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