document.querySelector("#log").addEventListener("click", populogin)

function populogin() {

    let h1 = document.createElement("h1")
    h1.innerText = "Welcome Back!"
    let h3 = document.createElement("h3")
    h3.innerText = "Log in to continue."
    let formdiv = document.createElement("div")
    formdiv.setAttribute("id", "logform")
    let label1 = document.createElement("label")
    label1.innerText = "Email"
    let input1 = document.createElement("input")
    input1.setAttribute("type", "email")
    input1.setAttribute("id", "logemail")
    input1.setAttribute("placeholder", "Enter your Email")


    let label4 = document.createElement("label")
    label4.innerText = "Password"
    let input4 = document.createElement("input")
    input4.setAttribute("type", "password")
    input4.setAttribute("id", "logpassword")
    input4.setAttribute("placeholder", "Enter your password")

    let input5 = document.createElement("input")
    input5.value = "LOG IN"
    input5.setAttribute("type", "submit")
    input5.setAttribute("id", "createacc")
    input5.style.backgroundColor = "rgb(239, 18, 92)"


    formdiv.append(label1, input1, label4, input4, input5)

    document.querySelector("#login").append(h1, h3, formdiv)
}