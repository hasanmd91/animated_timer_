class Timer {
  constructor(durationInput, startButton, PauseButton, callbacks) {
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.PauseButton = PauseButton;

    if (callbacks) {
      this.onStart = callbacks.onStart;
      this.onTickstart = callbacks.onTickstart;
      this.onComplete = callbacks.onComplete;
    }

    this.startButton.addEventListener("click", this.start);
    this.PauseButton.addEventListener("click", this.pause);
  }

  start = () => {
    if (this.onStart) {
      this.onStart(this.timeRemaining);
    }

    this.tick;
    this.interval = setInterval(this.tick, 20);
  };

  pause = () => {
    clearInterval(this.interval);
  };

  tick = () => {
    if (this.timeRemaining <= 0) {
      this.pause();
      if (this.onComplete) {
        this.onComplete();
      }
    } else {
      this.timeRemaining = this.timeRemaining - 0.02;
      if (this.onTickstart) {
        this.onTickstart(this.timeRemaining);
      }
    }
  };

  get timeRemaining() {
    return parseFloat(this.durationInput.value);
  }

  set timeRemaining(time) {
    this.durationInput.value = time.toFixed(2);
  }
}
