const progressFill = document.getElementById("progressFill");
const progressPercentage = document.getElementById("progressPercentage");
const splashScreen = document.getElementById("splashScreen");

// Check if already loaded on page load
window.addEventListener("DOMContentLoaded", () => {
  const hasLoaded = sessionStorage.getItem("loaded");
  
  if (hasLoaded === "true") {
    window.location.href = "./index.html";
    return;
  }
  
  startLoadingAnimation();
});

// Loading animation function
function startLoadingAnimation() {
  let progressValue = 0;
  const speed = 50; 
  const increment = 2; 
  
  const loadingInterval = setInterval(() => {

    progressValue = Math.min(progressValue + increment, 100);
    

    if (progressFill) {
      progressFill.style.width = progressValue + "%";
    }
    
 
    if (progressPercentage) {
      progressPercentage.textContent = Math.floor(progressValue) + "%";
    }
    
    // Check if loading is complete
    if (progressValue >= 100) {
      clearInterval(loadingInterval);
      completeLoading();
    }
  }, speed);
}

// Complete loading and redirect
function completeLoading() {

  sessionStorage.setItem("loaded", "true");
  
  // Add fade-out effect
  if (splashScreen) {
    splashScreen.classList.add("fade-out");
  }
  
  // Redirect after fade animation
  setTimeout(() => {
    window.location.href = "./index.html";
  }, 500);
}