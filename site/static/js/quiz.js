document.addEventListener('DOMContentLoaded', function() {
    const questions = [
      {
        text: "Какой вид деятельности тебе интереснее всего?",
        answers: [
          { text: "Создавать программы и разбираться в коде", points: { programmer: 3 } },
          { text: "Проектировать здания, мосты, машины", points: { engineer: 3 } },
          { text: "Анализировать финансы, управлять бюджетом", points: { economist: 3 } },
          { text: "Придумывать графику, интерфейсы, бренды", points: { designer: 3 } },
          { text: "Писать статьи, снимать репортажи, вести соцсети", points: { journalist: 3 } }
        ]
      },
      {
        text: "Что для тебя важнее в работе?",
        answers: [
          { text: "Логика и чёткие алгоритмы", points: { programmer: 2, engineer: 1 } },
          { text: "Творчество и самовыражение", points: { designer: 2, journalist: 2 } },
          { text: "Работа с людьми и коммуникация", points: { journalist: 2, economist: 1 } },
          { text: "Создание чего-то материального и надёжного", points: { engineer: 2, designer: 1 } },
          { text: "Стратегическое мышление и планирование", points: { economist: 2, programmer: 1 } }
        ]
      },
      {
        text: "Как ты предпочитаешь проводить свободное время?",
        answers: [
          { text: "Играть в компьютерные игры или изучать новые технологии", points: { programmer: 2 } },
          { text: "Рисовать, фотографировать, монтировать видео", points: { designer: 2, journalist: 1 } },
          { text: "Смотреть новости, читать аналитические статьи", points: { journalist: 2 } },
          { text: "Собирать или чинить что-то своими руками", points: { engineer: 2 } },
          { text: "Вести личный бюджет или инвестировать", points: { economist: 2 } }
        ]
      },
      {
        text: "Какая школьная дисциплина давалась легче всего?",
        answers: [
          { text: "Математика или информатика", points: { programmer: 2, engineer: 1 } },
          { text: "Физика", points: { engineer: 2 } },
          { text: "Обществознание или экономика", points: { economist: 2 } },
          { text: "Литература, русский язык, иностранный язык", points: { journalist: 2 } },
          { text: "ИЗО, черчение, музыка", points: { designer: 2 } }
        ]
      },
      {
        text: "Какую задачу ты хотел бы решать каждый день?",
        answers: [
          { text: "Писать код для полезных приложений", points: { programmer: 3 } },
          { text: "Проектировать устойчивые конструкции", points: { engineer: 3 } },
          { text: "Помогать компаниям управлять деньгами", points: { economist: 3 } },
          { text: "Делать мир красивее через визуал", points: { designer: 3 } },
          { text: "Рассказывать людям правдивые истории", points: { journalist: 3 } }
        ]
      },
      {
        text: "Как ты обычно работаешь в команде?",
        answers: [
          { text: "Я генерирую идеи и концепции", points: { designer: 1, journalist: 1 } },
          { text: "Я организую процессы и слежу за сроками", points: { economist: 1, engineer: 1 } },
          { text: "Я выполняю свою часть работы качественно и вдумчиво", points: { programmer: 1 } }
        ]
      },
      {
        text: "Что для тебя самое важное в будущем обучении?",
        answers: [
          { text: "Участие в реальных IT-проектах", points: { programmer: 2 } },
          { text: "Лаборатории с современным оборудованием", points: { engineer: 2 } },
          { text: "Стажировки в крупных компаниях", points: { economist: 2 } },
          { text: "Творческая атмосфера и портфолио", points: { designer: 2, journalist: 1 } },
          { text: "Возможность публиковаться и выступать", points: { journalist: 2 } }
        ]
      }
    ];

    const specializations = {
      programmer: {
        title: "Программная инженерия",
        description: "Ты мыслишь логически, любишь кодить и создавать цифровые продукты. Это направление ждёт тебя!",
        link: "https://your-university.edu/programming" // Замените на реальную ссылку приёмной комиссии!
      },
      engineer: {
        title: "Строительство и архитектура",
        description: "Ты ценишь надёжность и любишь созидать. Инженерные специальности — твой путь.",
        link: "https://your-university.edu/engineering"
      },
      economist: {
        title: "Экономика и управление",
        description: "Ты умеешь планировать и работать с цифрами. Финансы и менеджмент ждут тебя.",
        link: "https://your-university.edu/economics"
      },
      designer: {
        title: "Дизайн",
        description: "Ты творческая личность, видишь красоту в деталях. Стань профессиональным дизайнером!",
        link: "https://your-university.edu/design"
      },
      journalist: {
        title: "Медиакоммуникации и журналистика",
        description: "Ты обладаешь даром слова и хочешь делиться историями. Это направление для тебя.",
        link: "https://your-university.edu/journalism"
      }
    };

    let currentQuestion = 0;
    let scores = { programmer: 0, engineer: 0, economist: 0, designer: 0, journalist: 0 };
    const startBtn = document.getElementById('start-btn');
    const quizForm = document.getElementById('quiz-form');
    const questionsDiv = document.getElementById('questions');
    const submitBtn = document.getElementById('submit-btn');
    const resultDiv = document.getElementById('result');
    const startDiv = document.getElementById('quiz-start');

    function showQuestion(index) {
      const q = questions[index];
      let html = `<fieldset><legend>${index+1}. ${q.text}</legend>`;
      q.answers.forEach((ans, i) => {
        html += `
          <label class="quiz-option">
            <input type="radio" name="q${index}" value="${i}">
            ${ans.text}
          </label>
        `;
      });
      html += `</fieldset>`;
      questionsDiv.innerHTML = html;
      if (index === questions.length - 1) {
        submitBtn.style.display = 'inline-block';
      } else {
        submitBtn.style.display = 'none';
      }
    }

    function calculateResult() {
      let max = 0;
      let chosen = 'programmer';
      for (let spec in scores) {
        if (scores[spec] > max) {
          max = scores[spec];
          chosen = spec;
        }
      }
      return chosen;
    }

    startBtn.addEventListener('click', () => {
      startDiv.style.display = 'none';
      quizForm.style.display = 'block';
      scores = { programmer: 0, engineer: 0, economist: 0, designer: 0, journalist: 0 };
      currentQuestion = 0;
      showQuestion(currentQuestion);
    });

    quizForm.addEventListener('change', (e) => {
      if (e.target.name.startsWith('q')) {
        const qIdx = parseInt(e.target.name.substring(1));
        const selectedIdx = parseInt(e.target.value);
        const selectedAnswer = questions[qIdx].answers[selectedIdx];
        // Добавляем очки выбранного ответа
        for (let spec in selectedAnswer.points) {
          scores[spec] += selectedAnswer.points[spec];
        }
        // Переход к следующему вопросу, если не последний
        if (currentQuestion < questions.length - 1) {
          currentQuestion++;
          showQuestion(currentQuestion);
        } else {
          submitBtn.style.display = 'inline-block';
        }
      }
    });

    submitBtn.addEventListener('click', () => {
      const spec = calculateResult();
      const data = specializations[spec];
      document.getElementById('result-title').textContent = data.title;
      document.getElementById('result-description').textContent = data.description;
      document.getElementById('result-link').href = data.link;
      quizForm.style.display = 'none';
      resultDiv.style.display = 'block';
    });

    document.getElementById('restart-btn').addEventListener('click', () => {
      resultDiv.style.display = 'none';
      startDiv.style.display = 'block';
    });
  });