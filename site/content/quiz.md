---
title: "Тест: Какая специальность тебе подходит?"
date: 2026-05-12
draft: false
layout: "single"
---

<div class="quiz-container">
  <div id="quiz-start">
    <h2>Ответь на 7 вопросов и узнай, какое направление в нашем университете ближе всего тебе!</h2>
    <button class="btn" id="start-btn">Начать тест</button>
  </div>

  <form id="quiz-form" style="display:none;">
    <div id="questions"></div>
    <button type="button" class="btn" id="submit-btn" style="display:none;">Узнать результат</button>
  </form>

  <div id="result" style="display:none;">
    <h2 id="result-title"></h2>
    <p id="result-description"></p>
    <a id="result-link" href="#" class="btn" target="_blank">Подробнее на сайте приёмной комиссии</a>
    <br><br>
    <button class="btn" id="restart-btn">Пройти заново</button>
  </div>
</div>

<script src="/js/quiz.js"></script>