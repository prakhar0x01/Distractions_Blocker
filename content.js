// content.js

const accessCode = 'LETMEIN'; // Replace with your desired access code

// Function to prompt the user for an access code
function requestAccess() {
  const userCode = window.prompt('Please enter the access Code to view this site:');
  
  if (userCode === accessCode) {
    return true;
  } else {
    window.location.href="https://www.google.com/";
    return false;    
  }
}

function startCountdown(durationMinutes) {
  let duration = durationMinutes * 60; // Convert minutes to seconds

  function updateCountdown() {
      const minutes = Math.floor(duration / 60);
      const seconds = duration % 60;

      // Check if the countdown has reached zero
      if (duration <= 0) {
          clearInterval(timer);
          // Use confirm dialog to notify the user
          const userResponse = confirm('You already invested 20 minutes..! Do you want to continue?');
          if (!userResponse) {
              window.location.href = 'https://www.google.com'; // Redirect to Google if the user cancels
          }
      } else {
          // Update duration
          duration--;
      }
  }

  // Update countdown immediately and then every second
  updateCountdown();
  const timer = setInterval(updateCountdown, 1000);
}

// Start a 15-minute countdown when the window loads
window.onload = () => {
  startCountdown(20);
};

requestAccess();