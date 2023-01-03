(() => {


"use strict";

const Exercises = {
  html: [
    {name: "[HTML] The DOCTYPE", desc: "Create the <em>DOCTYPE</em> declaration.<br>An HTML-Document <em>should always start</em> with a DOCTYPE declaration, so that the browser knows what file type to expect.", code: `<{} {}>`, solutions: ["!DOCTYPE", "html"]},
    {name: "[HTML] Text Paragraphs", desc: "Create a <em>paragraph</em>.", code: `<{}>My Paragraph</{}>`, solutions: ["p", "p"]},
    {name: "[HTML] Headings", desc: "Create a <em>heading</em> of the highest level (1)", code:
      `<{}>My Title</{}>`,
      solutions: ["h1", "h1"]},
    {name: "[HTML] Attributes", desc: "Assign the <em>class</em> \"my_class\" to the <em>section</em>.", code:
      `<section {}>
        
      </section>`,
      solutions: ["class=\"my_class\""]},
    {name: "[HTML] Links", desc: "Create a <em>Link</em>.", code: `<{} {}="https://google.com/">Click Here!</{}>`, solutions: ["a", "href", "a"]},
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
      
    {name: "[CSS] Classes", desc: "Use the <em>class selector</em> to make all elements' text with the class \"red_text\" red.", code:
      `{} {
        {}: {};
      }`, solutions: [".red_text", "color", "red"]},
  ],
  js: [
    {name: "[JS] Variables", desc: "Declare a variable with the value \"Hello World!\" and log it to the browser console", code:
      `let greet = {};

      console.log(greet);`,
      solutions: ["\"Hello World!\""]},

    {name: "[JS] Data Types", desc: "Write the respective <em>data types</em> of the variables in the comments.", code:
      `let name = "Joe";     // {}
      let age = 35;         // {}
      let married = true;   // {}`,
      solutions: ["string", "number", "boolean"]},

    {name: "[JS] Math I", desc: "Use <em>arithmetic operators</em> to perform operations.", code:
      `let a = 4 {} 6;
      // Add

      let b = 7 {} 3;
      // Subtract

      let c = 2 {} 6;
      // Multiply

      let d = 15 {} 3;
      // Divide`,
      solutions: ["+", "-", "*", "/"]},

    {name: "[JS] Math II", desc: "Use the built-in <em>Math</em> object to round numbers.", code:
      `Math.{}(4.6);
      // Round number

      Math.{}(7.3);
      // Always round down

      Math.{}(6.6);
      // Always round up`,
      solutions: ["round", "floor", "ceil"]},

    {name: "[JS] Comparison", desc: "Comment the expected output of these <em>comparisons</em>.", code:
      `console.log(3 > 2);
      // {}
      
      console.log(4 < 1);
      // {}
      
      console.log(6 == 3);
      // {}`,
      solutions: ["true", "false", "false"]},

    {name: "[JS] If-Else I", desc: "Create an <em>if-statement</em> that checks if the variable <em>age</em> is above 18.", code:
      `let age = 20;
      {} ({} {} {}) {
        console.log("Age is above 18!");
      }`,
      solutions: ["if", "age", ">", "18"]},

    {name: "[JS] If-Else II", desc: "Now create an <em>else</em> statement. This code will be executed if the if-statement is false.", code:
      `let age = 20;
      {} ({} {} {}) {
        console.log("Age is above 18!");
      } {} {
        console.log("Age is either equal to or under 18!");
      }`,
      solutions: ["if", "age", ">", "18", "else"]},
  ],
  py: [
    {name: "[PY] Variables", desc: "Declare a variable with the value \"Hello World!\" and print it to the console.", code:
      `greet = {}
      
      print(greet)`,
      solutions: ["\"Hello World!\""]},

      
    {name: "[PY] Data Types", desc: "Write the respective <em>data types</em> of the variables in the comments.", code:
      `name = "Joe"     # {}
      age = 20         # {}
      grade = 2.1      # {}
      married = False  # {}`,
      solutions: ["str", "int", "float", "bool"]},

    {name: "[PY] Math I", desc: "Use <em>arithmetic operators</em> to perform operations.", code:
      `a = 4 {} 6
      // Add

      b = 7 {} 3
      // Subtract

      c = 2 {} 6
      // Multiply

      d = 15 {} 3
      // Divide`,
      solutions: ["+", "-", "*", "/"]},

    {name: "[PY] Math II", desc: "Use built-in functions and the <em>math library</em> to round numbers.", code:
      `import math
      
      {}(4.6)
      // Round number

      math.{}(7.3)
      // Always round down

      math.{}(6.6)
      // Always round up`,
      solutions: ["round", "floor", "ceil"]},

    {name: "[PY] Comparison", desc: "Comment the expected output of these <em>comparisons</em>.", code:
      `print(3 > 2)
      // {}
      
      print(4 < 1)
      // {}
      
      print(6 == 3)
      // {}`,
      solutions: ["True", "False", "False"]},

    {name: "[PY] If-Else I", desc: "Create an <em>if-statement</em> that checks if the variable <em>age</em> is above 18.", code:
      `age = 20
      {} {} {} {} {
        print("Age is above 18!")
      }`,
      solutions: ["if", "age", ">", "18"]},

    {name: "[PY] If-Else II", desc: "Now create an <em>else</em> statement. This code will be executed if the if-statement is false.", code:
      `age = 20
      {} {} {} {} {
        print("Age is above 18!")
      } {} {
        print("Age is either equal to or under 18!")
      }`,
      solutions: ["if", "age", ">", "18", "else"]},
  ],
  c: [
    {name: "[C] Variables", desc: "Declare a variable with the value \"Hello World!\" and print it to the console.", code:
      `#include <stdio.h>
      
      int main() {
        char greet[] = {};

        printf("%s", greet);

        return 0;
      }`,
      solutions: ["\"Hello World!\""]},

      
    {name: "[C] Data Types", desc: "Write the respective <em>data types</em> of the variables in the comments.", code:
      `int main() {
        {} letter = 'D';
        {} name[] = "Joe";
        {} age = 20;
        {} grade = 2.1;

        return 0;
      }`,
      solutions: ["char", "char", "int", "float"]},

    {name: "[C] Format Specifiers", desc: "Write the respective <em>format specifiers</em> for the variables to print them.", code:
      `#include <stdio.h>
      
      int main() {
        char letter = 'D';
        char name[] = "Joe";
        int age = 20;
        float grade = 2.1;

        printf("{}", letter);
        printf("{}", name);
        printf("{}", age);
        printf("{}", grade);

        return 0;
      }`,
      solutions: ["%c", "%s", "%d", "%f"]},
  ]
};

const list_exercises = document.querySelector("#exercises");

const container_main = document.querySelector("main"),
      text_title = container_main.querySelector("#exercise-title"),
      text_desc  = container_main.querySelector("#exercise-description"),
      text_code  = container_main.querySelector("#exercise-code"),
      text_info  = container_main.querySelector("#exercise-info"),
      button_submit = container_main.querySelector("#submit");

/** @type {HTMLButtonElement} */
let button_continue;

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

  button_continue = undefined;

  text_code.querySelector("input").focus();
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

      button_continue = document.createElement("button");
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

// Keyboard Support

window.addEventListener("keypress", e => {
  switch (e.key) {
    case "Enter":
      if (button_continue) {
        button_continue.click();
        break;
      }

      button_submit.click();
      break;
  }
});


})();