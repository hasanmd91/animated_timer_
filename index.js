const durationInput = document.getElementById("duration");
const startButton = document.getElementById("start");
const PauseButton = document.getElementById("pause");

const circle = document.querySelector("circle");

const perimeter = circle.getAttribute("r") * Math.PI * 2;
circle.setAttribute("stroke-dasharray", perimeter);
let duration;

const newTimer = new Timer(durationInput, startButton, PauseButton, {
  onStart(totalduration) {
    duration = totalduration;
  },

  onTickstart(timermaining) {
    circle.setAttribute(
      "stroke-dashoffset",
      (perimeter * timermaining) / duration - perimeter
    );
  },

  onComplete() {
    console.log("timer completed");
  },
});
