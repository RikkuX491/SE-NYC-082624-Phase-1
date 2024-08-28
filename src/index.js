// Deliverable # 1 solution
function flatburgerGreeting(){
    console.log("Welcome to Flatburger!");
}

// Deliverable # 2 solution
function printGreeting(greeting){
    console.log(greeting);
}

// Deliverable # 3 solution
function getSum(num1, num2){
    return num1 + num2;
}

// Deliverable # 4 solution
const getSumString = function (sum, num1, num2) {
    return `${num1} + ${num2} = ${sum(num1, num2)}`;
};

// Deliverable # 5 solution
const getAverage = (num1 = 0, num2 = 0) => getSum(num1, num2) / 2;

// Deliverable # 6 solution
const foodsArray = [];

// Deliverable # 7 solution
const burgerObject = {
    name: "Flatburger"
};

// Deliverable # 8 solution
burgerObject.description = "Our signature Flatburger which is a super delicious cheeseburger that'll leave you wanting another Flatburger! It's too good to be true!";

// Deliverable # 9 solution
burgerObject['price'] = 14.99;

// Deliverable # 10 solution
foodsArray.push(burgerObject);

// Deliverable # 11 solution
const burgerObject2 = {
    name: "Maple Bacon Burger",
    description: "A great option for a breakfast burger or a great option for brunch if you're hungry enough to eat 2 of these burgers!",
    price: 7.99
};
foodsArray.push(burgerObject2);

// Deliverable # 12
const burgerObject3 = {
    name: "Mushroom Burger",
    description: "A mushroom burger with our exclusive Flatburger melted cheese!",
    price: 11.99
};
foodsArray.push(burgerObject3);
const burgerObject4 = {
    name: "Avocado Bun Burger",
    description: "A healthier take on our signature Flatburger but with avocado buns!",
    price: 5.99
};
foodsArray.push(burgerObject4);
const burgerObject5 = {
    name: "Ramen Burger",
    description: "If you love ramen and burgers, what are you waiting for? Order our exclusive ramen burger now!",
    price: 13.99
};
foodsArray.push(burgerObject5);

// Deliverable # 13
for(let index = 0; index < foodsArray.length; index++){
    console.log(foodsArray[index].name);
}

// Deliverable # 14
for(const food of foodsArray){
    console.log(food.description);
}