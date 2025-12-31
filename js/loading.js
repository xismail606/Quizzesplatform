const progressFill = document.getElementById("progressFill");
const progressPercentage = document.getElementById("progressPercentage");
const splashScreen = document.getElementById("splashScreen");


let progressValue = 0;


const loadingInterval = setInterval(() => {

  progressValue += 2;

 
  progressFill.style.width = progressValue + "%";

  
  if (progressPercentage) {
    progressPercentage.textContent = progressValue + "%";
  }

 
  if (progressValue >= 100) {
    clearInterval(loadingInterval);
    completeLoading();
  }
}, 50); 


function completeLoading() {

  sessionStorage.setItem("loaded", "true");


  splashScreen.classList.add("fade-out");


  setTimeout(() => {
    window.location.href = "index.html";
  }, 500); 
}


window.addEventListener("DOMContentLoaded", () => {
  const hasLoaded = sessionStorage.getItem("loaded");

  if (hasLoaded === "true") {

    window.location.href = "./index.html";
  }
});