const API_KEY = "11eaaf12d3a6494cb17e9ef3bafcb6a2";

let articles = [];
let vieuxArticles = JSON.parse(localStorage.getItem("vieuxArticles")) || [];

// 🔄 Charger les news
async function ChargerNews() {
  let res = await fetch(`https://newsapi.org/v2/everything?q=cybersecurity&pageSize=10&apiKey=${API_KEY}`);
  let data = await res.json();

  articles = data.articles;

  localStorage.setItem("articles", JSON.stringify(articles));

  AffichageNews(articles);
  AlerteNiv();
}

function AffichageNews(list) {
  let container = document.getElementById("newsContainer");

  container.innerHTML = list.map(article => {
    let isNew = !vieuxArticles.find(a => a.title === article.title);

    return `
  <div onclick="UrlArticle(\`${article.url}\`)"
       style="border:1px solid #ccc; padding:10px; margin:10px; cursor:pointer;">
       
    <h3>${article.title} ${isNew ? "🆕" : ""}</h3>
    
    <p><strong>${article.source.name}</strong> - 
    ${new Date(article.publishedAt).toLocaleDateString()}</p>
    
    <p>${article.description || ""}</p>
  </div>
`;
  }).join("");

  localStorage.setItem("vieuxArticles", JSON.stringify(list));
}

function filtreNews() {
  let value = document.getElementById("filter").value;

  let filtrer = articles.filter(article => {
    let isCritic = article.title.toLowerCase().includes("attack") ||
                     article.title.toLowerCase().includes("breach") ||
                     article.title.toLowerCase().includes("hack");

    return value === "all" || isCritic;
  });

  AffichageNews(filtrer);
}

function RechercheNews() {
  let recherche = document.getElementById("recherche").value.toLowerCase();

  let resultat = articles.filter(article =>
    article.title.toLowerCase().includes(recherche) ||
    (article.description && article.description.toLowerCase().includes(recherche))
  );

  AffichageNews(resultat);
}

function AlerteNiv() {
  let NivCritique = articles.filter(article =>
    article.title.toLowerCase().includes("attack") ||
    article.title.toLowerCase().includes("breach") ||
    article.title.toLowerCase().includes("hack")
  ).length;

  let Niv = "🟢 Faible";

  if (NivCritique > 5) Niv = "🔴 Élevé";
  else if (NivCritique > 2) Niv = "🟠 Moyen";

  document.getElementById("alertNiv").innerText =
    "Niveau d'alerte : " + Niv;
}

window.onload = function () {
  let sauvegarder = JSON.parse(localStorage.getItem("articles"));

  if (sauvegarder) {
    articles = sauvegarder;
    AffichageNews(articles);
    AlerteNiv();
  }
};

function UrlArticle(url) {
  window.open(url, "_blank");
}