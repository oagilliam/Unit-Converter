//let inputEl = parseFloat(document.getElementById("input-el")); //20
let inputEl = document.getElementById("input-el");
let length = document.getElementById("lengthOutput");
let volume = document.getElementById("volumeOutput");
let mass = document.getElementById("massOutput");
let convertBtn = document.getElementById("convert-btn");

convertBtn.addEventListener("click", function(){
    // Calulcates the length (meter/feet)
    let feet = (inputEl.value * 3.2808).toFixed(3)
    let meter = ((inputEl.value / 3.2808).toFixed(3))
    length.innerText = `${inputEl.value} meters = ${feet} feet | ${inputEl.value} feet = ${meter} meters`

    //Calculates the volume
    let gallon = (inputEl.value * 0.2641).toFixed(3)
    let liter = ((inputEl.value / 0.2641).toFixed(3))
    volume.innerText = `${inputEl.value} liters = ${gallon} US gallons | ${inputEl.value} gallons = ${liter} liters`

    //Calculates the mass
    let pound = (inputEl.value * 2.2046).toFixed(3)
    let kilogram = ((inputEl.value / 2.2046).toFixed(3))
    mass.innerText = `${inputEl.value} kilograms = ${pound} pounds | ${inputEl.value} pounds = ${kilogram} kilograms`
}) 

convertBtn.addEventListener("dblclick", function(){
    inputEl.value =''
})