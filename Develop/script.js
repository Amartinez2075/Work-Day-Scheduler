// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

const saveButtons = document.querySelectorAll(".saveBtn");
const timeBlocks = document.querySelectorAll(".time-block");

// Added an event listener to each of the save buttons!
saveButtons.forEach(function (button) {
  button.addEventListener("click", function () {

    // Gets the text area element and its value |aka stuff put in for that time.|
    const textArea = this.previousElementSibling;
    const textAreaValue = textArea.value.trim();

    // Gets the id of the time block element 
    const timeBlockId = textArea.parentElement.id;

    // Saves the text area value and its associated id to local storage
    localStorage.setItem(timeBlockId, textAreaValue);
  });
});

// Loops through each time block
timeBlocks.forEach(function (timeBlock) {

  // Gets the id of the time block element
  const timeBlockId = timeBlock.id;

  // Gets the current hour in 12-hour format
  const currentHour = moment().format("h");

  // Converts the time block id to 12-hour format
  const timeBlockHour = moment(timeBlockId, "HH").format("h");

  // Compares the id to the current hour and applies the appropriate class
  if (timeBlockHour < currentHour) {
    timeBlock.classList.add("past");
  } else if (timeBlockHour === currentHour) {
    timeBlock.classList.add("present");
  } else {
    timeBlock.classList.add("future");
  }
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