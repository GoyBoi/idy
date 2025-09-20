// Test theme functionality
console.log("Testing theme functionality");

// Check if next-themes is working
setTimeout(() => {
  const themeToggle = document.querySelector('[aria-label="Toggle theme"]');
  if (themeToggle) {
    console.log("Theme toggle found");
    // Add click event to test
    themeToggle.addEventListener('click', () => {
      console.log("Theme toggle clicked");
      setTimeout(() => {
        const isDark = document.documentElement.classList.contains('dark');
        console.log("Current theme:", isDark ? "dark" : "light");
      }, 100);
    });
  } else {
    console.log("Theme toggle not found");
  }
}, 1000);