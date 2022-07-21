document.querySelector("#sign").addEventListener("click", popusign)

function popusign() {

    let h1 = document.createElement("h1")
    h1.innerText = "Welcome!"
    let h3 = document.createElement("h3")
    h3.innerText = "Sign up to join Indiegogo."
    let formdiv = document.createElement("div")
    formdiv.setAttribute("id", "form")
    let label1 = document.createElement("label")
    label1.innerText = "First Name"
    let input1 = document.createElement("input")
    input1.setAttribute("type", "text")
    input1.setAttribute("id", "firstname")
    input1.setAttribute("placeholder", "Enter your first name")

    let label2 = document.createElement("label")
    label2.innerText = "Last Name"
    let input2 = document.createElement("input")
    input2.setAttribute("type", "text")
    input2.setAttribute("id", "lastname")
    input2.setAttribute("placeholder", "Enter your last name")

    let label3 = document.createElement("label")
    label3.innerText = "Email"
    let input3 = document.createElement("input")
    input3.setAttribute("type", "email")
    input3.setAttribute("id", "email")
    input3.setAttribute("placeholder", "Enter your email")

    let label4 = document.createElement("label")
    label4.innerText = "Password"
    let input4 = document.createElement("input")
    input4.setAttribute("type", "password")
    input4.setAttribute("id", "password")
    input4.setAttribute("placeholder", "Enter your password")

    let input5 = document.createElement("input")
    input5.value = "CREATE ACCOUNT"
    input5.setAttribute("type", "submit")
    input5.setAttribute("id", "createacc")
    input5.style.backgroundColor = "rgb(239, 18, 92)"


    formdiv.append(label1, input1, label2, input2, label3, input3, label4, input4, input5)

    document.querySelector("#signup").append(h1, h3, formdiv)

}