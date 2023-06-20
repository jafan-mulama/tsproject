document.addEventListener("DOMContentLoaded", function() {
  const courseName = 'TYPESCRIPT BOOTCAMP by jafan mulama';
  let outputElement = document.getElementById("output");
  outputElement.innerText = courseName;

  function printCourseName(name: string) {
    outputElement.innerText = 'The course name is ' + name.toUpperCase();
    console.log('The course name is ' + name.toUpperCase());
  }

  printCourseName(courseName);
});
