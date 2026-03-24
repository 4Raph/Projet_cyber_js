function chiffrementCes(message,n){
  let result = ""
  for (let i = 0; i < message.length; i++) {
    let char = message[i]
    if (char.match(/[A-Za-z]/i)) {
      let code = message.charCodeAt(i)
      let base = (code >= 65 && code <= 90) ? 65 : 97
      char = String.fromCharCode(((code - base + n) % 26) + base)
    }
    result += char
  }
  return result
}

function Chiffrement() {
  let message = document.getElementById("message").value
  let n = parseInt(document.getElementById("décalage").value)

  document.getElementById("resultat").innerText = chiffrementCes(message, n)
}

function Dechiffrement() {
  let message = document.getElementById("message").value
  let n = parseInt(document.getElementById("décalage").value)

  document.getElementById("resultat").innerText = chiffrementCes(message, 26 - n)
}

function bruteForce() {
  let message = document.getElementById("message").value
  let tab = document.getElementById("bruteforceTab")

  tab.innerHTML = ""

  for (let i = 1; i <= 25; i++) {
    let row = tab.insertRow()

    let ligne1 = row.insertCell(0)
    let ligne2 = row.insertCell(1)

    ligne1.innerText = "Décalage " + i
    ligne2.innerText = chiffrementCes(message, 26 - i)
  }
}

function ChiffrementVig(message, cle, encrypt = true){
  let res = ""
  cle = cle.toUpperCase()
  let j = 0
  for (let i = 0; i < message.length; i++) {
    let char = message[i]
    if (char.match(/[a-z]/i)) {
      let code = message.charCodeAt(i)
      let base = (code >= 65 && code <= 90) ? 65 : 97
      let k = cle.charCodeAt(j % cle.length) - 65
      if (!encrypt) k = 26 - k
      char = String.fromCharCode(((code - base + k) % 26) + base)
      j++
    }
    res += char
  }
  return res
}

function vigenereChiffrage() {
  let message = document.getElementById("message").value;
  let cle = document.getElementById("cle").value;

  document.getElementById("resultat").innerText = ChiffrementVig(message, cle, true);
}

function vigenereDechiffrage() {
  let message = document.getElementById("message").value;
  let cle = document.getElementById("cle").value;

  document.getElementById("resultat").innerText = ChiffrementVig(message, cle, false);
}