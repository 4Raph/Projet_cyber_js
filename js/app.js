function openTab(tabId) {
document.querySelectorAll(".tab").forEach(tab => {
tab.classList.remove("active");
});

document.getElementById(tabId).classList.add("active");

document.querySelectorAll(".tabs button").forEach(btn => {
btn.classList.remove("active");
});

event.target.classList.add("active");
}

function updateHome() {

let scores = JSON.parse(localStorage.getItem("scores")) || []

let moyenne = scores.length
? Math.round(scores.reduce((a,b)=>a+b,0)/scores.length)
: 0

document.getElementById("homeScore").innerText =
"Score moyen quiz : " + moyenne

}


let reportData = {};

function generateReport() {
reportData = {
    date: new Date().toLocaleString(),
    password: document.getElementById("passwordStrength").innerText || "Non testé",
    quizScore: localStorage.getItem("scores") || "Pas fait",
    phishingScore: document.getElementById("score").innerText || "Non testé",
    newsViewed: document.getElementById("alertNiv").innerText || "Aucune",
};

document.getElementById("reportContent").innerHTML = `
<h3>Date</h3>
<p>${reportData.date}</p>

<h3>Mot de passe</h3>
<p>${reportData.password}</p>

<h3>Quiz</h3>
<p>${reportData.quizScore}</p>

<h3>Phishing</h3>
<p>${reportData.phishingScore}</p>

<h3>Alertes cyber</h3>
<p>${reportData.newsViewed}</p>
`;

document.getElementById("reportModal").style.display = "block";
}

function fermerRapport() {
document.getElementById("reportModal").style.display = "none";
}

function exportJSON() {

const blob = new Blob([JSON.stringify(reportData, null, 2)],{ type: "application/json" });

const url = URL.createObjectURL(blob);

const a = document.createElement("a");
a.href = url;
a.download = "CyberShield-rapport.json";
a.click();

URL.revokeObjectURL(url);
}

function printRapport() {

let printWindow = window.open('', '', 'width=800,height=600');

printWindow.document.write(`
<html>
<head>
<title>Rapport CyberShield</title>
<style>
body { font-family: Arial; padding: 20px }
h2 { color: #007BFF }
</style>
</head>
<body>

<h2>Rapport de sécurité CyberShield</h2>

${document.getElementById("reportContent").innerHTML}

</body>
</html>
`);

printWindow.document.close();
printWindow.print();
}

window.onload = updateHome