// const promiseObject = fetch("http://localhost:3000/foods")
// console.log(promiseObject)

// promiseObject.then(response => {
    // console.log(response)
    // const promiseObject2 = response.json()
    // console.log(promiseObject2)

//     promiseObject2.then(foods => {
//         console.log(foods)
//     })
// })

// const promiseObject1 = fetch("http://localhost:3000/foods")
// const promiseObject2 = promiseObject1.then(response => {
//     return response.json()
// })
// console.log(promiseObject2)
// promiseObject2.then(foods => {
//     console.log(foods)
// })

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

// Deliverable # 5 & 6 solution code
function displayFoodDetails(food){
    const detailImageElement = document.querySelector('.detail-image')
    detailImageElement.src = food.image

    const nameElement = document.querySelector('.name')
    nameElement.textContent = food.name

    const descriptionDisplayElement = document.getElementById('description-display')
    descriptionDisplayElement.textContent = food.description
}

const restaurantMenuElement = document.getElementById('restaurant-menu')
// console.log(restaurantMenuElement)

// Deliverable # 1 solution code
fetch("http://localhost:3000/foods")
.then(response => response.json())
.then(foods => {
    // console.log(foods)
    
    // Deliverable # 2 solution code
    // foods.forEach(food => {
    //     const imgElement = document.createElement('img')
        // console.log(imgElement)
        // imgElement.src = food.image
        // console.log(food)
        // console.log(food.image)
        // console.log(imgElement)

        // append <img> element inside of restaurantMenuElement
        // restaurantMenuElement.appendChild(imgElement)
    // })

    // Deliverable # 3 solution code
    foods.forEach(addFoodImageToRestaurantMenu)

    // Deliverable # 4 solution code
    // const detailImageElement = document.getElementsByClassName('detail-image')[0]
    // const detailImageElement = document.querySelector('.detail-image')

    // console.log(detailImageElement)
    // console.log(foods[0])
    // console.log(foods[0].image)

    // detailImageElement.src = foods[0].image

    // const nameElement = document.querySelector('.name')
    
    // console.log(nameElement)
    
    // nameElement.textContent = foods[0].name

    // const descriptionDisplayElement = document.getElementById('description-display')
    
    // console.log(foods[0])
    
    // descriptionDisplayElement.textContent = foods[0].description
    
    // Deliverable # 5 solution code
    displayFoodDetails(foods[0])
})

// This is another way to retrieve the data for the first food from db.json using json-server
// fetch("http://localhost:3000/foods/1")
// .then(response => response.json())
// .then(firstFood => console.log(firstFood))