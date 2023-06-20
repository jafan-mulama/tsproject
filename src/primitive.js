document.addEventListener("DOMContentLoaded", function () {
    var lessonCount = 10;
    var total = lessonCount + 10;
    var outputElement = document.getElementById("primitive");
    outputElement.innerText = total.toString();
    function printTotal(totals) {
        outputElement.innerText = 'The total value is ' + totals.toString();
        console.log('total=', total);
    }
    printTotal(total);
});
// Changes made:
// Converted total to a string using the 
// toString() method when setting outputElement.innerText.
// Fixed the function call from printCourseName(totals) 
// to printTotal(total), as there was no printCourseName
//  function defined.
// Please make sure to include any necessary HTML markup and ensure 
// that the element with the ID "primitive" exists in your HTML file.
