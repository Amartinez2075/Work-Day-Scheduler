// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(document).ready(function() {

  const saveButtons = $(".saveBtn");
  const timeBlocks = $(".time-block");

  // Added an event listener to each of the save buttons!
  saveButtons.each(function() {
    $(this).on("click", function() {

      // Gets the text area element and its value |aka stuff put in for that time.|
      const textArea = $(this).prev();
      const textAreaValue = textArea.val().trim();

      // Gets the id of the time block element 
      const timeBlockId = textArea.parent().attr("id");

      // Saves the text area value and its associated id to local storage
      localStorage.setItem(timeBlockId, textAreaValue);
    });
  });

  const textAreas = document.querySelectorAll('textarea');

  textAreas.forEach(function (textArea) {
    const textAreaParentId = textArea.parentElement.id;
    const textAreaValue = localStorage.getItem(textAreaParentId) || '';
    textArea.value = textAreaValue;
  });
  // Loops through each time block
  timeBlocks.each(function() {

    // Gets the id of the time block element
    const timeBlockId = $(this).attr("id");

    // Gets the current hour in 12-hour format
    const currentHour = moment().format("H");

    // Converts the time block id to 12-hour format
    const timeBlockHour = moment(timeBlockId, "hha").format("H");

    // Compares the id to the current hour and applies the appropriate class
    if (parseInt(timeBlockHour) < parseInt(currentHour)) {
      $(this).addClass("past");
    } else if (timeBlockHour == currentHour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
  });

  

  // TODO: Retrieve data from local storage and update text areas

});

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. Finished?
  
  // HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time? Finished?j
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this? Finished?
  //
  // TODO: Add code to display the current date in the header of the page. Finished
// Finished