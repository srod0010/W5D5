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
}

// addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));

// function absurdBubbleSort(arr, sortCompletionCallback) {
//
//
//   sorted = false;
//
//   while (sorted === false) {
//     sorted = true;
//       let j = 0;
//       while (j < arr.length) {
//
//       askIfGreaterThan(arr[j], arr[j + 1], function (isGreaterThan) {
//         if (isGreaterThan) {
//
          // temp = arr[j + 1];
          // arr[j + 1] = arr[j];
          // arr[j] = temp;
//           sorted = false;
//         }
//
//       });
//
//       j++;
//
//     }
//
//   }
//   // console.log(arr);
//
// }
//
// function askIfGreaterThan(el1, el2, callback) {
//   reader.question(`is ${el1} greater than ${el2}?`, function (response) {
//     if (response === 'y') {
//
//       callback(true);
//     } else {
//
//       callback(false);
//     }
//   });
// }
// // sortCompletionCallback(arr[j], arr[j + 1]
//
// absurdBubbleSort([1,8,11,6,79,3], function (l1, l2, callback) {
//   // askIfGreaterThan(l1, l2, callback);
//   reader.close();
// });

// Write this first.
function askIfGreaterThan(el1, el2, callback) {
  reader.question(`is ${el1} greater than ${el2}?`, function (response) {
    if (response === 'y') {

      callback(true);
    } else {

      callback(false);
    }
  });
}
// Once you're done testing askIfGreaterThan with dummy arguments, write this.
function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  // Do an "async loop":
  // 1. If (i == arr.length - 1), call outerBubbleSortLoop, letting it
  //    know whether any swap was made.
  if (i === (arr.length - 1)) {
    outerBubbleSortLoop(madeAnySwaps);
    return;
  }
  // 2. Else, use `askIfGreaterThan` to compare `arr[i]` and `arr[i +
  //    1]`. Swap if necessary. Call `innerBubbleSortLoop` again to
  //    continue the inner loop. You'll want to increment i for the
  //    next call, and possibly switch madeAnySwaps if you did swap.
  askIfGreaterThan(arr[i], arr[i + 1], function (isGreaterThan) {
    if (isGreaterThan) {
      const temp = arr[i + 1];
      arr[i + 1] = arr[i];
      arr[i] = temp;
      madeAnySwaps = true;
    }
    innerBubbleSortLoop(arr, i + 1, madeAnySwaps, outerBubbleSortLoop);
  });
}

// Once you're done testing innerBubbleSortLoop, write outerBubbleSortLoop.
// Once you're done testing outerBubbleSortLoop, write absurdBubbleSort.

function absurdBubbleSort(arr, sortCompletionCallback) {
  // outerBubbleSortLoop(true);
  function outerBubbleSortLoop(madeAnySwaps) {
    // Begin an inner loop if you made any swaps. Otherwise, call
    // `sortCompletionCallback`.
    if (madeAnySwaps) {
      innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
    } else {
      sortCompletionCallback(arr);
    }
  }
  // Kick the first outer loop off, starting `madeAnySwaps` as true.
  outerBubbleSortLoop(true);

}

// innerBubbleSortLoop([3,2,1], 0, false, (arg) => { console.log(arg)});

// absurdBubbleSort([3, 2, 1], function (arr) {
//   console.log("Sorted array: " + JSON.stringify(arr));
//   reader.close();
// });

Function.prototype.myBind = function (context) {
  return () => this.apply(context);
};

class Lamp {
  constructor() {
    this.name = "a lamp";
  }
}

const turnOn = function() {
   console.log("Turning on " + this.name);
};

const lamp = new Lamp();

turnOn(); // should not work the way we want it to

const boundTurnOn = turnOn.bind(lamp);
const myBoundTurnOn = turnOn.myBind(lamp);

boundTurnOn(); // should say "Turning on a lamp"
myBoundTurnOn(); // should say "Turning on a lamp"
