// Implement a countdown timer

function convertMillisecondsToTime(milliseconds) {
  const seconds = Math.floor(milliseconds / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  const remainingSeconds = seconds % 60;
  const remainingMinutes = minutes % 60;
  const remainingHours = hours % 24;

  return {
    days: days,
    hours: remainingHours,
    minutes: remainingMinutes,
    seconds: remainingSeconds
  };
}
function countdown(element, targetTimestamp){
    const currentTimestamp = Date.now();
    const diffDateMiliseconds = targetTimestamp - currentTimestamp;
    
    if (diffDateMiliseconds <= 0) {
        element.textContent = "¡Ya es hora de la fiesta!";
        return;
    }
    
    const diffDate = convertMillisecondsToTime(diffDateMiliseconds);
    element.textContent = `Faltan ${diffDate.days}d:${diffDate.hours}h:${diffDate.minutes}m:${diffDate.seconds}s`
}

document.addEventListener("DOMContentLoaded", (event) => {
  const countdown_text = document.getElementById("countdown_text")
  if (countdown_text != null) {
    const XVDATE= new Date("2025-08-16T18:00:00-05:00"); //August 18 at 18:00 pm in Colombia in ISO format
    const targetTimestamp = XVDATE.getTime(); // Calculate timestamp once

    countdown(countdown_text, targetTimestamp); // Call immediately
    const intervalId = setInterval(() => {
      const timeLeft = targetTimestamp - Date.now();
      if (timeLeft <= 0) {
        clearInterval(intervalId);
      }
      countdown(countdown_text, targetTimestamp);
    }, 1000); // update countdown text every second

  }

});
