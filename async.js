function toppings_choice() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            resolve(console.log("which topping would you love?"))

        }, 1)
    })
}

async function kitchen() {

    console.log("A")
    console.log("B")
    console.log("C")

    toppings_choice()

    console.log("D")
    console.log("E")

}

// Trigger the function

kitchen();