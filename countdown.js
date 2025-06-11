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
function countdown(element, targetDate){
    const currentDate = new Date();
    // substract dates this is done in miliseconds
    const diffDateMiliseconds = targetDate - currentDate;
    // convert it to days hours minutes and seconds and display in the countdowntext
    const diffDate = convertMillisecondsToTime(diffDateMiliseconds);
    element.textContent = `Faltan ${diffDate.days}d:${diffDate.hours}h:${diffDate.minutes}m:${diffDate.seconds}s`
}

window.addEventListener("load", (event) => {
  const countdown_text = document.getElementById("countdown_text")
  if (countdown_text != null) {
    const XVDATE= new Date("2025-08-16T18:00:00-05:00"); //August 18 at 18:00 pm in Colombia in ISO format
    const originalDate = new Date(); // Get the current date and time

    const intervalId = setInterval(countdown,1000,countdown_text,XVDATE) // update countdown text every second
    setTimeout(function() {
      clearInterval(intervalId)
    }, XVDATE -  new Date());

  }

});
