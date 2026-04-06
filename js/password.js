const input = document.getElementById("passwordInput")
const strength = document.getElementById("passwordStrength")

input.addEventListener("input", checkPassword)

function checkPassword() {

let password = input.value
let score = 0


if (password.length >= 8) score++
if (password.length >= 12) score++

if (/[A-Z]/.test(password)) score++

if (/[a-z]/.test(password)) score++

if (/[0-9]/.test(password)) score++

if (/[^A-Za-z0-9]/.test(password)) score++

updateBar(score)
}

function updateBar(score) {
let percent = (score / 6) * 100

strength.innerHTML = `<div style="width:${percent}%"></div>`

let bar = strength.firstElementChild

bar.classList.remove("weak", "medium", "strong")

if (score <= 2) {
    bar.classList.add("weak")
} else if (score <= 4) {
    bar.classList.add("medium")
} else {
    bar.classList.add("strong")
}

updateText(score)
}

function updateText(score) {
let text = ""

if (score <= 2) text = "Faible"
else if (score <= 4) text = "Moyen"
else text = "Fort"

strength.innerHTML += `<p>Niveau : <b>${text}</b></p>`
}