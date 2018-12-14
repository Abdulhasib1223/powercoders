console.log('My code is running!');

function greet(name) {
  console.log('Hello, ' + name);
}

//function setClassTip(event) {
  //let el = document.getElementById('mypara');
  //el.className = 'tip';
//}

//function setClassWarning(event) {
  //let el = document.getElementById('mypara');
  //el.className = 'warning';
//}

//function clearClass(event) {
  //let el = document.getElementById('mypara');
  //el.className = '';
//}

function setClass(event, xy) {
  let el = document.getElementById('mypara');
  el.className = xy;
}

  //function listenForClick(event) {
  //Do something

 //<p onclick="listenForClick(event);">Some text</p>

 // javascript code goes here (this is a comment)


 //setClass(event, 'tip'); to write ceveral commands in the same line.
