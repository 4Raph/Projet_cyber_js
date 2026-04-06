const blacklist = ["123456", 
    "123456789",
    "qwerty",
    "password",
    "12345",
    "password123",
    "1234567",
    "12345678",
    "abc123",
    "azerty",       
    "admin",
    "superman",
    "proword",
    "soleil",       
    "marseille",    
    "chouchou",
    "doudou",
    "000000",
    "111111"
];

function analyzePassword(password) {
    let score = 0;
    let hasUpper = false;
    let hasNumber = false;
    let hasSymbol = false;

    const symbols = "!@#$%^&*()-_=+[]{}|;:,.<>?";

    if (blacklist.includes(password.toLowerCase())) {
        return { score: 0, label: "Très Faible (Blacklisté)", color: "red" };
    }

    // Boucle pour analyser chaque lettre du mdp

    for (let char of password) {
        if (char >= 'A' && char <= 'Z') {
            hasUpper = true;
        } else if (char >= '0' && char <= '9') {
            hasNumber = true;
        } else if (symbols.includes(char)) {
            hasSymbol = true;
        }
    }

// attribution points

    if (password.length > 8) {
        score += (password.length - 8) * 2;
    }

    if (hasUpper) score += 15;
    if (hasNumber) score += 15; 
    if (hasSymbol) score += 20;
    score += 20;

    // determination couleur de la barre

    let color = "red";
    let label = "Faible";
    
    if (score > 40 && score <= 70) {
        color = "orange";
        label = "Moyen";
    } else if (score > 70) {
        color = "green";
        label = "Fort";
    }

    return { score, color, label };
}

const input = document.getElementById("passwordInput");

input.addEventListener("input", () => {

let password = input.value;

let resultat = analyzePassword(password);

document.getElementById("passwordFill").style.width =
Math.min(resultat.score, 100) + "%";

document.getElementById("passwordFill").style.background =
resultat.color;

document.getElementById("passwordText").innerText =
"Niveau : " + resultat.label + " (" + resultat.score + "/100)";
});