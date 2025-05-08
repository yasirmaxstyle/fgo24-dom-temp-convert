const form = document.querySelector('form')
const fahrenheit = document.getElementById('fValue')
const kelvin = document.getElementById('kValue')
const reamur = document.getElementById('rValue')
const input = document.getElementById('input-cel')

input.addEventListener('keypress', (e) => {
    if (isNaN(e.key)) e.preventDefault()
})

form.addEventListener('submit', (event) => {
    event.preventDefault()
    const celsius = event.target.celsius.value
    const celInt = parseInt(celsius)
    fahrenheit.textContent = 9 / 5 * celInt + 32
    kelvin.textContent = celInt + 273
    reamur.textContent = 4 / 5 * celInt
})