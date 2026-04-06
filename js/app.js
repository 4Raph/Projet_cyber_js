function openTab(tabId) {

document.querySelectorAll(".tab").forEach(tab => {
tab.classList.remove("active")
})

document.getElementById(tabId).classList.add("active")

}

function updateHome() {

let scores = JSON.parse(localStorage.getItem("scores")) || []

let moyenne = scores.length
? Math.round(scores.reduce((a,b)=>a+b,0)/scores.length)
: 0

document.getElementById("homeScore").innerText =
"Score moyen quiz : " + moyenne

}

window.onload = updateHome