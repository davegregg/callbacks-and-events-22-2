const switchTheme = function () {
    document.body.classList.toggle("dark")
}

setTimeout(switchTheme, 5000)
// setInterval(switchTheme, 5000)

// Callback Function: switchTheme
// Higher-Order Function: setTimeout, setInterval

const pets = [
    "Questionable Ethics",
    "Incorrect Use of Metaphor",
    "Fifty-Five",
    "Figaro",
]

pets.push("Jelly")

for (let index = 0; index < pets.length; index += 1) {
    const currentPet = pets[index]

    // ...
    // ...
    // ...
    // ...
}

for (const currentPet of pets) {
    // ...
    // ...
    // ...
    // ...
}

for (const index in pets) {
    const currentPet = pets[index]
    // ...
    // ...
    // ...
    // ...
}

pets.forEach((currentPet, index) => {
    // ...
    // ...
    // ...
    // ...
})


let count = 0
let countView = document.querySelector("#count")

let increment = function () {
    count += 1
    // countView.innerHTML = count
    countView.replaceChildren(count)
}

let decrement = function () {
    count -= 1
    countView.replaceChildren(count)
}

// document
//     .querySelector("button#switch-theme")
//     .addEventListener("click", switchTheme)

const switchThemeButton = document.querySelector("button#switch-theme")

document.addEventListener("click", (event) => {
    const clickedElement = event.target

    if (clickedElement === switchThemeButton) {
        switchTheme()
    } else if (clickedElement.id === "increment") {
        increment()
    } else if (clickedElement.id === "decrement") {
        decrement()
    }
})

document
    .querySelector("form")
    .addEventListener("submit", (event) => {
        event.preventDefault()
        
        const form = event.target
        
        const username = form.elements.username.value
        const email = form.elements.email.value
        const birthdate = form.elements.birthdate.value

        console.log({ username, email, birthdate })
    })