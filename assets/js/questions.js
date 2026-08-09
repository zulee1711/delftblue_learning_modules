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