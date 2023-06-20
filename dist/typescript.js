document.addEventListener("DOMContentLoaded", function () {
    var courseName = 'TYPESCRIPT BOOTCAMP by jafan mulama';
    var outputElement = document.getElementById("output");
    outputElement.innerText = courseName;
    function printCourseName(name) {
        outputElement.innerText = 'The course name is ' + name.toUpperCase();
        console.log('The course name is ' + name.toUpperCase());
    }
    printCourseName(courseName);
});
