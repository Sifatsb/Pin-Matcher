var generateButton = document.getElementById("pin-generate")
var pinScreen = document.getElementById("pin-screen")
var inputScreen = document.getElementById("input-screen")
let submitButton = document.getElementById("submit-button")

let rightPin = document.getElementById("right")
let wrongPin = document.getElementById("wrong")

let leftNumber = document.getElementById("leftNumber")
let count = 1



generateButton.addEventListener("click", function(){
    var pinSet = '0123456789'
    var password = ''

    for(let i = 0; i < 4; i++){
        var pin = Math.floor(Math.random() * pinSet.length)
        password += pinSet.charAt(pin)
    }
    pinScreen.value = password
})

function displayInput(num){
    inputScreen.value += num
}

submitButton.addEventListener("click", function(){

    if(count < 3){
        if(pinScreen.value == inputScreen.value){
            rightPin.style.display = "block"
            inputScreen.value = ""
            leftNumber.innerHTML = ""
        }
        else{
            inputScreen.value = ""
            leftNumber.innerHTML = (3 - count) + "try left"
            count++
        }
    }

    else{
        leftNumber.innerHTML = "No more attempt left"
        wrongPin.style.display = "block"
        inputScreen.value = ""
    }
})


function Clear(){
    inputScreen.value = ""
}

function Delte(){
    inputScreen.value = inputScreen.value.slice(0, -1)
}

