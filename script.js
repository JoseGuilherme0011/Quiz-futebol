const questions = [
    {
      question: "Qual seleção venceu a Copa do Mundo de 2002?",
      answers: ["Brasil", "Alemanha", "Argentina", "França"],
      correct: 0
    },
    {
      question: "Quem é o maior artilheiro da história da Seleção Brasileira?",
      answers: ["Pelé", "Romário", "Neymar", "Ronaldo"],
      correct: 2
    },
    {
      question: "Qual clube tem mais títulos da Libertadores?",
      answers: ["Boca Juniors", "River Plate", "São Paulo", "Independiente"],
      correct: 3
    },

    {
        question: "Quantos gols o Gabriel Barbosa fez na temporada de 2019?",
        answers: ["50", "43","30","25"],
        correct: 1
    },

    {
        question:"Em que ano foi realizado o primeiro Campeonato do Mundo da FIFA?",
        answers:["1930","1920","1919","1940"],
        correct: 0
    }

  ];


  
  let currentQuestion = 0;
  let score = 0;
  
  const questionContainer = document.getElementById("question-container");
  const nextBtn = document.getElementById("next-btn");
  const result = document.getElementById("result");
  
  function showQuestion() {
    const q = questions[currentQuestion];
    questionContainer.innerHTML = `<h2>${q.question}</h2>`;
    const answersHtml = q.answers.map((answer, i) => `
      <label>
        <input type="radio" name="answer" value="${i}"> ${answer}
      </label>
    `).join('');
    questionContainer.innerHTML += `<div class="answers">${answersHtml}</div>`;
  }
  
  nextBtn.addEventListener("click", () => {
    const selected = document.querySelector('input[name="answer"]:checked');
    if (!selected) return alert("Escolha uma resposta!");
  
    if (parseInt(selected.value) === questions[currentQuestion].correct) {
      score++;
    }
  
    currentQuestion++;
    if (currentQuestion < questions.length) {
      showQuestion();
    } else {
      questionContainer.innerHTML = "";
      nextBtn.style.display = "none";
      result.innerHTML = `<h2>Você acertou ${score} de ${questions.length} perguntas!</h2>`;
    }
  });
  
  showQuestion();
  