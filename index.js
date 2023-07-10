// 1.) linked the bug-free coffe_data.js file
const coffeeMenu = require("./coffee_data.js")


// 2.) prints a list of all the drinks
console.log("Array of all available drinks:")
// const coffeeNames = coffeeMenu.forEach(menuItem => console.log(menuItem.name))
console.log(coffeeMenu) 



// 3.) prints an array of all drinks $5 and under
const fiveUnder = coffeeMenu.filter(menuItem => menuItem.price <= 5)
console.log("Array of all drinks $5 or less:")
console.log(fiveUnder) 
// const coffeesUnderFive = fiveUnder.forEach(menuItem => console.log(menuItem.name))





// 4.) prints an array of drinks priced at even numbers
const evenPrice = coffeeMenu.filter(menuItem => menuItem.price % 2 === 0)
console.log("Array of all drinks priced at even numbers:")
console.log(evenPrice)
// const coffeesEvenPrice = evenPrice.forEach(menuItem => console.log(menuItem.name))





// 5.) prints the total if you were to order one of every drink
const initialValue = 0
const coffeePrices = coffeeMenu.map(menuItem => menuItem.price + initialValue)
// console.log(coffeePrices)
const sumPrice = coffeePrices.reduce((accumulator, currentValue) =>{
    accumulator = accumulator + currentValue
    return accumulator
}, 0)

console.log(`The combined price of one of every drink is: `,sumPrice)

// 6.) prints an array of all seasonal drinks




