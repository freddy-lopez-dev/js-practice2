/* Problem Solving:
* Create the form that has a dropdown to choose from a set of colors
* When user selected a color set the value of dropdown to the user color
* addeventlistener click to a box(grid)
* when the user clicks a box it should set the bgcolor of the box with the user selection and also a textContent
* After clicking the box the dropdown should reset to EMPTY
* CONDITION if the dropdown has value when the event is clicked add the color if not get random values from the array of colors
* USER CLICKS A BOX
* IF dropdown form has color
* set the color to the box with textContent
* ELSE dropdown is empty
* set the color to a random color with textContent
* If all boxes has bgcolor "ALERT ALL BOXES COLOURED"
*/

const colorList = ['Rebeccapurple', 'Blue', 'Green', 'Orange', 'GhostWhite', 'LightSlateGrey', 'PowderBlue'];
const targetList = document.querySelector('#color-list');
const boxes = document.querySelectorAll('.color');
const boxEvent = document.body;
populateColors();

function populateColors() {
  for (let i = 0; i < colorList.length; i++) {
    const createColor = document.createElement('option');
    const colorText = document.createTextNode(colorList[i]);
    createColor.appendChild(colorText);
    createColor.setAttribute('value', colorList[i]);
    targetList.appendChild(createColor);
  }
}

function randomColor() {
   return 'rgb(' + Math.floor(Math.random()*255) + ',' + Math.floor(Math.random()*255) + ',' + Math.floor(Math.random()*255) + ')';
}

function bgChange(e) {
  let rgbColor = randomColor();
  if (e.target.style.backgroundColor === '') {
    if (targetList.value === '') {
      e.target.style.backgroundColor = rgbColor;
      e.target.textContent = rgbColor;
      e.target.style.textAlign = 'center';
      e.target.style.paddingTop = '65px';
      e.target.classList = 'color colored';
    } else {
        e.target.style.backgroundColor = targetList.value;
        e.target.textContent = targetList.value;
        e.target.style.textAlign = 'center';
        e.target.style.paddingTop = '65px';
        e.target.classList = 'color colored';
      }
  }
  document.getElementById('color-list').selectedIndex = -1;
  fullColor();
}

function fullColor() {
  if (boxes.length === document.querySelectorAll('.colored').length) {
    setTimeout(alertShade, 500);
  }
}

function alertShade() {
  alert("All boxes has been shaded");
}

function refreshSelect(e) {
  document.getElementById('color-list').selectedIndex = -1;
}

window.addEventListener('load', refreshSelect);
boxEvent.addEventListener('click', function(e) {
  if (e.target.classList.contains('color')) {
    bgChange(e);   
  }
});

/* boxes.forEach(div => {
div.addEventListener('click', bgChange);
I did this first time and read the insturction again*/