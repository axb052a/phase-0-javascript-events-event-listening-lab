// index.js
function addingEventListener() {
    // Get the button element
    const button = document.getElementById('button');
  
    // Add an event listener for the 'click' event
    button.addEventListener('click', function() {
      // Code to execute when the button is clicked
      console.log('Click Me!');
    });
  }
  
  // Call the function to set up the event listener when the script is loaded
  addingEventListener();
  