
const email = document.getElementById("input")
const thankyou = document.getElementById("thankyou")


function klickmich() {

    if (email.value.length > 3) {
        thankyou.innerHTML = "Thank you for subscribing!"
        thankyou.classList.toggle("thankyou")
    }

    else {
        thankyou.innerHTML = "Please enter your email!"
        thankyou.classList.toggle("please")
    }
}

