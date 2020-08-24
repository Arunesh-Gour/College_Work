function loaded() {
   alert('DOM Loaded');
}

function unloaded() {
   alert('DOM unloaded');
}

function blurred () {
   document.getElementById('info').innerHTML = 'lost focus';
}

function focussed () {
   document.getElementById('info').innerHTML = 'focussed';
}

function changed() {
   document.getElementById('info').innerHTML = 'changed';
}

function submitted() {
   document.getElementById('info').innerHTML = 'submitted';
}

function mousehovered() {
   document.getElementById('info').innerHTML = 'mouse over';
}

function mouseremoved() {
   document.getElementById('info').innerHTML = 'mouse out';
}
