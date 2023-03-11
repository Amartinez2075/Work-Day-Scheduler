// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// Gets the current date and time
const currentDate = new Date();

// Gets the current hour in 24-hour format
let currentHour24 = currentDate.getHours();

// Converts the current hour to 12-hour format
let currentHour12 = currentHour24 % 12;
if (currentHour12 === 0) {
  currentHour12 = 12;
}

// Adds the "past", "present", or "future" class to each time block
const timeBlocks = document.querySelectorAll(".time-block");

timeBlocks.forEach(function (timeBlock) {
  const timeBlockHour = parseInt(timeBlock.id.split("-")[1]);

  if (timeBlockHour < currentHour24) {
    timeBlock.classList.add("past");
  } else if (timeBlockHour === currentHour24) {
    timeBlock.classList.add("present");
  } else {
    timeBlock.classList.add("future");
  }
  
  // Converts the time block hour to 12-hour format
  let timeBlockHour12 = timeBlockHour % 12;
  if (timeBlockHour12 === 0) {
    timeBlockHour12 = 12;
  }

  // Displays the time in 12-hour format
  const timeBlockDisplay = timeBlock.querySelector(".hour");
  timeBlockDisplay.textContent = `${timeBlockHour12} ${timeBlockHour12 >= 12 ? "PM" : "AM"}`;
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
Finished