(() => {


"use strict";

const Exercises = {
  html: [
    {name: "[HTML] The DOCTYPE", desc: "Create the <em>DOCTYPE</em> declaration.<br>An HTML-Document <em>should always start</em> with a DOCTYPE declaration, so that the browser knows what file type to expect.", code: `<{} {}>`, solutions: ["!DOCTYPE", "html"]},
    {name: "[HTML] Text Paragraphs", desc: "Create a <em>Paragraph</em>.", code: `<{}>My Paragraph</{}>`, solutions: ["p", "p"]},
    {name: "[HTML] Links", desc: "Create a <em>Link</em>.", code:
      `<{} {}="https://google.com/">Click Here!</{}>`, solutions: ["a", "href", "a"]},
    
    // {name: "[HTML] ", desc: "", code: ``, solutions: []},
  ],
  css: [
    {name: "[CSS] Structuring", desc: "Create a declaration to change the <em>background-color</em> of the documents <em>body</em> to <em>#2299ff</em>.", code:
      `{} {
        {}: {};
      }`,
      solutions: ["body", "background-color", "#2299ff"]},

    {name: "[CSS] Font", desc: "Change the <em>font</em> of the document.", code:
      `body {
        font-{}: {};   /* Changes font family to "sans-serif" */
        font-{}: {};         /* Changes font size to 1.5rem */
        {}: #ccc;               /* Changes font color to #ccc */
      }`,
      solutions: ["family", "sans-serif", "size", "1.5rem", "color"]},

    {name: "[CSS] Universal Selector", desc: "Use the <em>universal selector</em> to remove all <em>margin</em> and <em>padding</em> from all elements.", code:
      `{} {
        {}: 0;
        {}: 0;
      }`,
      solutions: ["*", "margin", "padding"]},
  ],
  js: [
    {name: "[JS] Variables", desc: "Declare a variable with the value \"Hello World!\" and log it to the browser console", code:
      `let greet = {};

      {}.{}greet{};`,
      solutions: ["\"Hello World!\"", "console", "log(", ")"]},

    {name: "[JS] Text Paragraphs", desc: "Create a <em>Paragraph</em>.", code: `<{}>My Paragraph</{}>`, solutions: ["p", "p"]},
  ]
};

const list_exercises = document.querySelector("#exercises");

const container_main = document.querySelector("main"),
      text_title = container_main.querySelector("#exercise-title"),
      text_desc  = container_main.querySelector("#exercise-description"),
      text_code  = container_main.querySelector("#exercise-code"),
      text_info  = container_main.querySelector("#exercise-info"),
      button_submit = container_main.querySelector("#submit");

/** @type {string} Coding language of exercises (html, css, js, etc..) */
const lang = list_exercises.dataset.lang;

for (let i = 0; i < Exercises[lang].length; i++) {
  const btn = document.createElement("button");
  btn.textContent = Exercises[lang][i].name;

  btn.onclick = () => {
    buildExercise(Exercises[lang][i])
  }

  list_exercises.appendChild(btn);
}


/**
 * @param {{name: string, desc: string, code: string, solutions: string[]}} exercise An exercise from the "Exercises" constant
 */
function buildExercise(exercise) {
  // Replace Code Placeholders
  let codeText = exercise.code;

  codeText = codeText.replaceAll("<", "&lt;")
                     .replaceAll(">", "&gt;");

  let iter = 0;
  while (codeText.indexOf("{}") !== -1) {
    const sln = exercise.solutions[iter];

    codeText = codeText.replace("{}", `<input type="text" maxlength="${sln.length}" style="width: ${sln.length}ch">`)
                       .replace(/^ {6}/gm, "");

    iter++;
  }


  text_title.textContent = exercise.name;
  text_desc.innerHTML = exercise.desc;
  text_code.innerHTML = codeText;
  text_info.innerHTML = "";
  text_info.style.backgroundColor = "transparent";
  button_submit.onclick = () => submit(exercise);
}
buildExercise(Exercises[lang][0]);

/**
 * @param {{name: string, desc: string, code: string, solutions: string[]}} exercise An exercise from the "Exercises" constant
 */
function submit(exercise) {
  const inputs = Array.from(container_main.querySelectorAll("input")).map(x => x.value);
  let result = true;
  
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i] !== exercise.solutions[i]) {
      result = false;
      break;
    }
  }


  switch (result) {
    case true:    // correct
      text_info.innerHTML = `Correct`;

      let button_continue = document.createElement("button");
      button_continue.textContent = "Continue to next exercise";
      button_continue.classList.add("btn-push")
      button_continue.style.cssText = `
        margin: 1rem 0;
        --bg-c: #4f4;
        --sh-c: #2d2;
      `;

      let next_exercise_id = (Exercises[lang].indexOf(exercise) + 1) % Exercises[lang].length;

      button_continue.onclick = () => buildExercise(Exercises[lang][next_exercise_id]);
      
      text_info.appendChild(button_continue);
      text_info.style.backgroundColor = "#183";

      break;
    case false:   // incorrect
      text_info.innerHTML = `Incorrect`;
      text_info.style.backgroundColor = "#831";
      break;
  }

}


})();