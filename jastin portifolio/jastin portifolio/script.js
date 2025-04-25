function greetUser() {
  const greeting = document.getElementById("greeting");
  const name = prompt("Please enter your name:");
  const hour = new Date().getHours();
  let message = "";

  if (hour >= 0 && hour < 5) {
    message = "Good night";
  } else if (hour >= 5 && hour < 12) {
    message = "Good morning";
  } else if (hour >= 12 && hour < 17) {
    message = "Good afternoon";
  } else if (hour >= 17 && hour < 21) {
    message = "Good evening";
  } else {
    message = "Good night";
  }

  // If name is entered, personalize the greeting
  if (name && name.trim() !== "") {
    greeting.textContent = `${message}, ${name}!`;
  } else {
    greeting.textContent = `${message}!`;
  }
}


  document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('themeToggle');
  
    // Load saved theme
    if (localStorage.getItem('theme') === 'dark') {
      document.body.classList.add('dark-mode');
    }
  
    toggleBtn.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      // Save the user's theme preference
      if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
      } else {
        localStorage.setItem('theme', 'light');
      }
    });
  });

