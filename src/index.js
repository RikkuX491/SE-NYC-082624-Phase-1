// Deliverable # 3 solution code
function addFoodImageToRestaurantMenu(food) {
    const imgElement = document.createElement('img')
    imgElement.src = food.image
    restaurantMenuElement.appendChild(imgElement)

    // Deliverable # 6 solution code
    imgElement.addEventListener('click', () => {
        displayFoodDetails(food)
    })
}

// Deliverable # 5 solution code
function displayFoodDetails(food){
    const detailImageElement = document.querySelector('.detail-image')
    detailImageElement.src = food.image

    const nameElement = document.querySelector('.name')
    nameElement.textContent = food.name

    const descriptionDisplayElement = document.getElementById('description-display')
    descriptionDisplayElement.textContent = food.description
}

// Deliverable # 1 solution code
const restaurantMenuElement = document.getElementById('restaurant-menu')

fetch("http://localhost:3000/foods")
.then(response => response.json())
.then(foods => {
    // Deliverable # 2 solution code
    foods.forEach(addFoodImageToRestaurantMenu)
    
    // Deliverable # 4 & 5 solution code
    displayFoodDetails(foods[0])
})