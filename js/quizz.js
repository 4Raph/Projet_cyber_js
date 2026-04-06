let questions = [];
let currentIndex = 0;
let score = 0;
let streak = 0;
let timer;
let tempsRestant = 10;

function startQuiz() {
  questions = QUIZ_QUESTIONS
    .sort(() => Math.random() - 0.5)
    .slice(0, 10);

  currentIndex = 0;
  score = 0;
  streak = 0;
  AffichageQuestion();
}

function AffichageQuestion() {
  let q = QuestionId(questions[currentIndex].id);

  document.getElementById("progress").innerText =
    "Question " + (currentIndex + 1) + " / " + questions.length;

  document.getElementById("barFill").style.width =
  ((currentIndex + 1) / questions.length * 100) + "%";

  document.getElementById("question").innerText = q.question;

  document.getElementById("reponse").innerHTML = q.réponses.map((rep, i) =>
    `<button onclick="reponse(${i})">${rep.text}</button>`
  ).join("");

  document.getElementById("explication").innerText = "";

  document.querySelector("button[onclick='nextQuestion()']").disabled = true;

  startTimer();
}

function startTimer() {
  tempsRestant = 10;
  document.getElementById("timer").innerText = "Temps : " + tempsRestant;

  clearInterval(timer);

  timer = setInterval(() => {
    tempsRestant--;
    document.getElementById("timer").innerText = "Temps : " + tempsRestant;

    if (tempsRestant <= 0) {
      clearInterval(timer);
      streak = 0;
      nextQuestion();
    }
  }, 1000);
}

function reponse(index) {
  clearInterval(timer);

  let q = QuestionId(questions[currentIndex].id);
  let rep = q.réponses[index];

  if (rep.correct) {
    let bonus = tempsRestant * 5;

    streak++;
    let streakBonus = (streak >= 3) ? 1.5 : 1;

    score += (q.points + bonus) * streakBonus;

    document.getElementById("explication").innerText = "✅ " + q.explication;
  } else {
    streak = 0;
    document.getElementById("explication").innerText = "❌ " + q.explication;
  }

  document.getElementById("score").innerText = "Score : " + Math.floor(score);

  document.querySelectorAll("#reponse button").forEach(btn => btn.disabled = true);

  document.querySelector("button[onclick='nextQuestion()']").disabled = false;
}

function nextQuestion() {
  currentIndex++;

  if (currentIndex >= questions.length) {
    endQuiz();
  } else {
    AffichageQuestion();
  }
}

function endQuiz() {
  clearInterval(timer);
  let scores = JSON.parse(localStorage.getItem("scores")) || [];

  // ajouter score seulement si différent
  if (!scores.includes(score)) {
    scores.push(score);
  }

  scores.sort((a, b) => b - a);
  scores = scores.slice(0, 5);

  localStorage.setItem("scores", JSON.stringify(scores));

  document.getElementById("quizContent").innerHTML = `
    <h2>Quiz terminé !</h2>

    <h3>Score final : ${Math.floor(score)}</h3>

    <h4>🏆 Top 5 :</h4>
    <p>${scores.join(" | ")}</p>

    <button onclick="restartQuiz()">Recommencer</button>
  `;
}

function restartQuiz() {
  document.getElementById("quizContent").innerHTML = `
    <p id="progress"></p>

    <div id="bar">
      <div id="barFill"></div>
    </div>

    <p id="question"></p>
    <div id="reponse"></div>

    <p id="timer"></p>
    <p id="explication"></p>

    <button onclick="startQuiz()">Démarrer le quiz</button>
    <button onclick="nextQuestion()">Question suivante</button>

    <h3 id="score"></h3>
  `;

  startQuiz();
}

function QuestionId(id) {
  return QUIZ_QUESTIONS.find(q => q.id === id);
}
