document.addEventListener("DOMContentLoaded", () => {
  initStatementQuestions();
  initFillCommandQuestions();
  initMatchQuestions();
});

/* Statement */
function initStatementQuestions() {
  document.querySelectorAll(".statement-question").forEach((question) => {

    const button = question.querySelector(".check-question");
    const feedback = question.querySelector(".question-feedback");

    const correctTemplate = question.querySelector(".feedback-correct");
    const incorrectTemplate = question.querySelector(".feedback-incorrect");

    if (!button || !feedback) {
      console.error("Invalid statement question:", question);
      return;
    }

    button.addEventListener("click", () => {

      const selected = question.querySelector(
        'input[type="radio"]:checked'
      );

      if (!selected) {
        feedback.innerHTML = `
          <div class="feedback warning">
            Please choose Yes or No first.
          </div>
        `;
        return;
      }

      const correctAnswer = question.dataset.correct;

      if (selected.value === correctAnswer) {
        feedback.innerHTML = `
          <div class="feedback correct">
            ${correctTemplate.innerHTML}
          </div>
        `;
      } else {
        feedback.innerHTML = `
          <div class="feedback incorrect">
            ${incorrectTemplate.innerHTML}
          </div>
        `;
      }

    });

  });
}

/* Fill command */
function initFillCommandQuestions() {
  document.querySelectorAll(".fill-command").forEach((question) => {

    const input = question.querySelector(".fill-answer");
    const button = question.querySelector(".check-question");
    const feedback = question.querySelector(".question-feedback");

    if (!input || !button || !feedback) {
      console.error("Invalid fill-command question:", question);
      return;
    }

    const checkAnswer = () => {

      const expected = question.dataset.answer.trim().toLowerCase();
      const answer = input.value.trim().toLowerCase();

      if (!answer) {
        feedback.innerHTML = `
          <div class="feedback warning">
            Enter an answer first.
          </div>
        `;
        return;
      }

      if (answer === expected) {
        feedback.innerHTML = `
          <div class="feedback correct">
            Correct!
          </div>
        `;

        input.classList.remove("incorrect");
        input.classList.add("correct");

      } else {
        feedback.innerHTML = `
          <div class="feedback incorrect">
            Not quite. Try again.
          </div>
        `;

        input.classList.remove("correct");
        input.classList.add("incorrect");
      }
    };

    button.addEventListener("click", checkAnswer);

    input.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        checkAnswer();
      }
    });

  });
}

/* Match */
function initMatchQuestions() {
  document.querySelectorAll(".match-question").forEach((question) => {

  const button = question.querySelector(".check-match");
  const feedback = question.querySelector(".match-feedback");

  button.addEventListener("click", () => {

    const rows = question.querySelectorAll(".match-row");

    let correct = 0;
    let answered = 0;

    rows.forEach((row) => {

      const select = row.querySelector(".match-select");
      const result = row.querySelector(".match-result");

      const expected = row.dataset.answer;
      const selected = select.value;

      result.textContent = "";

      if (!selected) {
        result.textContent = "Choose an answer.";
        return;
      }

      answered += 1;

      if (selected === expected) {
          correct += 1;
          result.textContent = "Correct!";
          row.classList.remove("Incorrect");
          row.classList.add("Correct");
      } else {
          result.textContent = "Wrong Answer!";
          row.classList.remove("Correct");
          row.classList.add("Incorrect");
      }

    });

    if (answered < rows.length) {
      feedback.textContent =
        "Complete all matches before checking.";
      return;
    }

    if (correct === rows.length) {
      feedback.textContent =
        "Correct — you can identify the parts of the DelftBlue prompt.";
    } else {
      feedback.textContent =
        `${correct} of ${rows.length} correct. Try again.`;
    }

  });

});