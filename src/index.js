const restaurantMenu = document.getElementById('restaurant-menu')
const cryptocurrencyListElement = document.getElementById('cryptocurrency-list')
const cryptocurrencySelectElement = document.getElementById('cryptocurrency-select')
cryptocurrencySelectElement.addEventListener('change', handleChange)

// A copy of the array containing the cryptocurrency objects (not initialized, but we will assign a value to it later)
let cryptocurrencyArray

function addFoodImageToRestaurantMenu(food){
    const imgElement = document.createElement('img')
    imgElement.src = food.image
    imgElement.addEventListener('mouseover', () => {
        displayFoodDetails(food)
    })

    imgElement.addEventListener('click', () => {
        fetch(`http://localhost:3000/foods/${currentlyDisplayedFood.id}`, {
            method: "DELETE"
        })
        .then(response => {
            if(response.ok){
                imgElement.remove()
            }
            else{
                alert(`Error: Unable to delete Food # ${currentlyDisplayedFood.id}`)
            }
        })
    })

    restaurantMenu.appendChild(imgElement)
}

function displayFoodDetails(food){
    currentlyDisplayedFood = food
    const foodDetailImageElement = document.getElementsByClassName('detail-image')[0]
    foodDetailImageElement.src = food.image
    const foodNameElement = document.getElementsByClassName('name')[0]
    foodNameElement.textContent = food.name
    const foodDescriptionDisplayElement = document.getElementById('description-display')
    foodDescriptionDisplayElement.textContent = food.description
}

function addCryptocurrencyListItemToList(cryptocurrency){
    // console.log(cryptocurrency)
    const liElement = document.createElement('li')

    // [name] ([symbol]): Rank # [rank] - each <li> should have data in this format
    liElement.textContent = `${cryptocurrency.name} (${cryptocurrency.symbol}): Rank # ${cryptocurrency.rank}`
    
    cryptocurrencyListElement.appendChild(liElement)
}

function handleChange(event) {
    // console.log(event.target.value)

    cryptocurrencyListElement.innerHTML = ""

    if(event.target.value === 'all'){
        cryptocurrencyArray.forEach(addCryptocurrencyListItemToList)
    }
    else if(event.target.value === 'less_than'){
        cryptocurrencyArray.forEach(cryptocurrency => {
            if(parseInt(cryptocurrency.rank) <= 50){
                addCryptocurrencyListItemToList(cryptocurrency)
            }
        })
    }
    else if(event.target.value === 'greater_than'){
        cryptocurrencyArray.forEach(cryptocurrency => {
            if(parseInt(cryptocurrency.rank) > 50){
                addCryptocurrencyListItemToList(cryptocurrency)
            }
        })
    }
}

fetch('http://localhost:3000/foods')
.then(response => response.json())
.then(foods => {
    displayFoodDetails(foods[0])

    foods.forEach(food => {
        addFoodImageToRestaurantMenu(food)
    })
})

fetch("https://api.coincap.io/v2/assets")
.then(response => response.json())
.then(apiData => {
    // console.log(apiData)
    // console.log(apiData.data)
    
    // Filter implementation from Deliverable # 3
    // const filteredCryptocurrencies = apiData.data.filter(cryptocurrency => {
    //     return parseInt(cryptocurrency.rank) <= 10
    // })

    // console.log(filteredCryptocurrencies)
    // console.log(apiData.data)

    cryptocurrencyArray = apiData.data

    cryptocurrencyArray.forEach(addCryptocurrencyListItemToList)
})