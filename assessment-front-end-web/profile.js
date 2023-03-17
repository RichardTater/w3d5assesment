// Step 1: Grab HTML Element
// Step 2: Write out the function
// Step 3: Combine steps 1 and 2 using an event listener


// start color interactive
let colorBtn = document.querySelector('#color')

const color = () => {
    alert('My favorite color is black.')
}

colorBtn.addEventListener('click', color)
// end color interactive


// start place interactive
let placeBtn = document.querySelector('#place')

const place = () => {
    alert('My favorite place is the Bahamas')
}

placeBtn.addEventListener('click', place)
// end place interactive


// start ritual interactie
let ritualBtn = document.querySelector('#ritual')

const ritual = () => {
    alert('Taking a cold shower in the mornings.')
}

ritualBtn.addEventListener('click', ritual)