class Clock {
  constructor() {
    // 1. Create a Date object.
    this.date = new Date();
    // 2. Store the hours, minutes, and seconds.
    this.hours = this.date.getHours();
    this.minutes = this.date.getMinutes();
    this.seconds = this.date.getSeconds();
    // 3. Call printTime.
    this.printTime();
    // 4. Schedule the tick at 1 second intervals.
    setInterval(this._tick.bind(this), 1000);

  }

  printTime() {
    console.log(`${this.hours} : ${this.minutes} : ${this.seconds}`);
    // Format the time in HH:MM:SS
    // Use console.log to print it.
  }

  _tick() {
    // 1. Increment the time by one second.
    // this.seconds = this.addSeconds() % 60;
    this.addSeconds();
    // 2. Call printTime.
    this.printTime();
  }

  addSeconds () {
    this.seconds++;
    if (this.seconds === 60) {
      this.seconds = this.seconds % 60;
      this.addMinutes();
    }
    return this.seconds;
  }

  addMinutes () {
    this.minutes++;
    if (this.minutes === 60) {
      this.minutes = this.minutes % 60;
      this.addHours();
    }
    return this.minutes;
  }

  addHours () {
    this.hours++;
    return this.hours;
  }
}

// var clock = new Clock();
// clock._tick();
// clock.printTime();


const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback) {
  if (numsLeft === 0) {
     completionCallback(sum);
     reader.close();
  }

  if (numsLeft > 0) {
    reader.question("Enter a number: ", function (numString) {
      const num1 = parseInt(numString);
      sum += num1;
      completionCallback(sum);
      addNumbers(sum,numsLeft - 1, completionCallback);
    });
  }

  // reader.question("Enter #1: ", function (numString1) {
  //   reader.question("Enter #2: ", function (numString2) {
  //     const num1 = parseInt(numString1);
  //     const num2 = parseInt(numString2);
  //
  //     callback(num1 + num2);
  //   });
  // });
}

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));
