//your JS code here.

// Do not change code below this line
// This code will just display the questions to the screen
function renderQuestions() {
  questions.forEach((question, i) => {
    const questionElement = document.createElement("div");
    const questionText = document.createTextNode(question.question);
    questionElement.appendChild(questionText);

    question.choices.forEach((choice, j) => {
      const choiceElement = document.createElement("input");
      choiceElement.setAttribute("type", "radio");
      choiceElement.setAttribute("name", `question-${i}`);
      choiceElement.setAttribute("value", choice);
      if (userAnswers[i] === choice) {
        choiceElement.checked = true;
        choiceElement.setAttribute("checked", "true");
      }

      choiceElement.addEventListener("change", () => {
        userAnswers[i] = choice;
        sessionStorage.setItem("progress", JSON.stringify(userAnswers));
      });

      const choiceText = document.createTextNode(` ${choice}`);
      questionElement.appendChild(choiceElement);
      questionElement.appendChild(choiceText);
    });

    questionsElement.appendChild(questionElement);
  });
}
