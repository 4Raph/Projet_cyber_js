const phishingRules = { urgencyKeywords: [ 'urgent', 'immédiatement', 'expire dans', 'action requise', 'votre compte sera suspendu', 'vérifiez maintenant'], 
                        suspiciousDomains: [ 'paypa1.com', 'amaz0n.fr', 'noreply-security.tk','winamax-france.fr'], 
                        redFlags: [ 'cliquez ici', 'connexion sécurisée', 'mot de passe expiré', 'vous avez gagné', 'félicitations'], 
                        legitimateSenders: ['@impots.gouv.fr', '@pole-emploi.fr'] }

function analyzeEmail(email){
    let score = 0
    let raisons = []
    let contenue = (email.sujet + " " + email.corps).toLowerCase()
    let Urgent = phishingRules.urgencyKeywords.some(keyword => contenue.includes(keyword))
    if (Urgent) {
        score += 20
        raisons.push("Présence de mots urgents")
    }

    let Red = phishingRules.redFlags.filter(flag => contenue.includes(flag))
    if (Red.length > 0) {
        score += Red.length * 10
        raisons.push("Expressions suspectes :" + Red.join(", "))
    }

    let Domaine = phishingRules.suspiciousDomains.find(domaine => email.expediteur.includes(domaine))
    if (Domaine) {
        score += 30
        raisons.push("Domaine suspect : " + Domaine)
    }

    let DomaineCorps = phishingRules.suspiciousDomains.find(domaine => email.corps.includes(domaine))
    if (DomaineCorps) {
        score += 30
        raisons.push("Domaine suspect : " + DomaineCorps)
    }

    let Legit = phishingRules.legitimateSenders.some(domaine => email.expediteur.endsWith(domaine))
    if (Legit){
        score -= 20
        raisons.push("Expéditeur du mail légitime")
    }

    let NonLegit = phishingRules.legitimateSenders.every(domaine => !email.expediteur.includes(domaine))
    if (NonLegit) {
        score += 10
        raisons.push("Expéditeur non reconnu")
    }

    score = Math.max(0, Math.min(100, score))
    return {score: score,raisons: raisons}
}

function analyze() {
  let email = {
    expediteur: document.getElementById("expediteur").value,
    sujet: document.getElementById("sujet").value,
    corps: document.getElementById("corps").value
  }

  let resultat = analyzeEmail(email)

  document.getElementById("score").innerText = resultat.score + " / 100"

  let liste = document.getElementById("raisons")
  liste.innerHTML = ""

  resultat.raisons.forEach(r => {
    let li = document.createElement("li")
    li.innerText = r
    liste.appendChild(li)
  })
}