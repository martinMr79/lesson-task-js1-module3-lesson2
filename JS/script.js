//Question 1

function greet(name = "John") {
  return `Hello ${name}!`;
}
console.log(greet());

//Question 2

function returnHTML(para1, para2) {
  return `<div class=${para1}>${para2}</div>`;
}

console.log(returnHTML("classy", 4));

//Question 3

async function getFact() {
  try {
    const response = await fetch("https://cat-fact.herokuapp.com/facts");
    const results = await response.json();
    console.log(results[8].text);
  } catch (error) {
    console.log("syntax error", error);
  } finally {
    console.log("This will run anyway");
  }
}

getFact();
