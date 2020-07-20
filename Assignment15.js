let shoppingList= ['apples','bananas','lays','shampoo']

let shoppingBasket=shoppingList.map(function(i) {return i;})
console.log(`Shopping List is ${shoppingList}`)
console.log(`Shopping Basket is ${shoppingBasket}`)

shoppingBasket.push('biscuits')
shoppingBasket.push('vegetables')
shoppingBasket.push('medicines')
console.log("After adding few more items")
console.log(`Shopping Basket is ${shoppingBasket}`)
