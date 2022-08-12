const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  printMinutes();
  printSeconds();
}

function printMinutes() {
  let digits_minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes())
  minDecElement.innerHTML = digits_minutes[0];
  minUniElement.innerHTML = digits_minutes[1];
}

function printSeconds() {
  let digits_seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds())
  secDecElement.innerHTML = digits_seconds[0];
  secUniElement.innerHTML = digits_seconds[1];
}

// ==> BONUS
function printMilliseconds() {
  let miliSeconds = chronometer.computeTwoDigitNumber(chronometer.getMiliSeconds());
  console.log('miliSeconds');
  console.log(miliSeconds);
  milDecElement.innerHTML = miliSeconds[0]
  milUniElement.innerHTML = miliSeconds[1]
}

function printSplit() {
  var newSplit = document.createElement('li'); // is a node
  newSplit.innerHTML = chronometer.split()
  splitsElement.appendChild(newSplit);
}

function clearSplits() {
  splitsElement.innerHTML = '';
}

function setStopBtn() {
  btnLeftElement.innerText = 'STOP'
  btnLeftElement.setAttribute('class', 'btn stop')
}

function setSplitBtn() {
  btnRightElement.innerText = 'SPLIT'
  btnRightElement.setAttribute('class', 'btn split')
}

function setStartBtn() {
  btnLeftElement.innerText = 'START'
  btnLeftElement.setAttribute('class', 'btn start')
}

function setResetBtn() {
  btnRightElement.innerText = 'RESET'
  btnRightElement.setAttribute('class', 'btn reset')
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if(btnLeftElement.className == "btn start"){
    chronometer.start()
    setInterval(() => {
    this.printTime()
    }, 1000)
    this.setStopBtn()
    setSplitBtn()
  } else{
    console.log(btnLeftElement.class)
    chronometer.stop()
    this.setStartBtn()
    setResetBtn()
  }
  
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if(btnRightElement.className == "btn reset"){
    chronometer.reset()
    this.clearSplits();
  }
  else{
    this.printSplit();
  }
});

