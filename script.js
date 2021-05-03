var windowW, windowH, mouseX, mouseY, div, divW, divH, ballX, eyeball;
var bgEyeball, bgEyeballCon, bgEyeballConW, bgEyeballConH, bgLayer, bgLayerW, bgLayerH, horiMove, vertiMove;
var menuLogo, menu;
var menuHide = true;
var menuShow = false;
var checkbox, displayEye, lawData;
var showEye, hideEye;


// window.addEventListener('DOMContentLoaded', (event) => {
//
//   eyeball = document.getElementById('eyeball');
//   div = document.getElementById('homeTitleBox');
//
//
//
//   document.addEventListener('mousemove', function(event) {
//     windowW = screen.width;
//     windowH = screen.height;
//
//     divW = div.clientWidth;
//     divH = div.clientHeight;
//
//     mouseX = event.screenX;
//     mouseY = event.screenY;
//
//     eyeball.style.left = 0.10 * windowW + mouseX / windowW * (1 * divW / 5) + 'px';
//
//     console.log(mouseX / windowW * (3 * divW / 5));
//   });
//
// });

window.addEventListener('DOMContentLoaded', (event) => {

  bgEyeball = document.getElementById('bgEyeball');
  bgLayer = document.getElementsByClassName('bgEyeLayer')[0];
  bgEyeballCon = document.getElementsByClassName('eyeballCon')[0];

  document.addEventListener('mousemove', function(event) {
    bgLayerW = bgLayer.clientWidth;
    bgLayerH = bgLayer.clientHeight;

    bgEyeballConW = bgEyeballCon.clientWidth;
    bgEyeballConH = bgEyeballCon.clientHeight;

    // var vh = window.outerHeight;

    mouseX = event.screenX;
    // mouseY = event.screenY;

    var spaceLeft = (bgLayerW - bgEyeballConW) / 2;

    var portion = mouseX / bgLayerW;
    // var spaceUp = (vh - bgEyeballConH) / 2;

    // console.log(spaceLeft);
    // console.log("mouse", mouseX);

    horiMove = (portion * (bgEyeballConW - 91.13));

    // console.log(horiMove);

    bgEyeball.style.left = horiMove + 'px';
  });

});


window.addEventListener('DOMContentLoaded', (event) => {

  menuLogo = document.getElementsByClassName('logo')[0];
  menu = document.getElementsByClassName('pageNames')[0];

  console.log(menu);
  menuLogo.addEventListener('click', showMenu);

});


window.addEventListener('DOMContentLoaded', (event) => {

  checkbox1 = document.getElementById('question1');
  checkbox2 = document.getElementById('question2');
  checkbox3 = document.getElementById('question3');
  checkbox4 = document.getElementById('question4');
  checkbox5 = document.getElementById('question5');
  checkbox6 = document.getElementById('question6');
  checkbox7 = document.getElementById('question7');
  checkbox8 = document.getElementById('question8');
  checkbox9 = document.getElementById('question9');

  checkboxes = document.getElementsByClassName('questions');

  lawData = document.getElementsByClassName('data');

  for (i=0; i<9; i++) {
    checkboxes[i].setAttribute('showEye', false);
    checkboxes[i].setAttribute('hideEye', true);
    lawData[i].classList.add('hideData');
  }

  displayEye = document.getElementsByClassName('displayStatus');

  // closedEye = document.getElementsByClassName('close')[0];
  // openEye = document.getElementsByClassName('open')[0];



  checkbox1.addEventListener('click', function() {
    showCompare(0);
  });

  checkbox2.addEventListener('click', function() {
    showCompare(1);
  });

  checkbox3.addEventListener('click', function() {
    showCompare(2);
  });

  checkbox4.addEventListener('click', function() {
    showCompare(3);
  });

  checkbox5.addEventListener('click', function() {
    showCompare(4);
  });

  checkbox6.addEventListener('click', function() {
    showCompare(5);
  });

  checkbox7.addEventListener('click', function() {
    showCompare(6);
  });

  checkbox8.addEventListener('click', function() {
    showCompare(7);
  });

  checkbox9.addEventListener('click', function() {
    showCompare(8);
  });
});

function showCompare(x) {

      if (checkboxes[x].hideEye) {
        checkboxes[x].showEye = true;
        checkboxes[x].hideEye = false;
      } else {
        checkboxes[x].showEye = false;
        checkboxes[x].hideEye = true;
      }

      if (checkboxes[x].showEye) {
        displayEye[x].src = "blueOpenEye.png";
        lawData[x].classList.add('showData');
        // hideEye = true;
        // showEye = false;
      } else if (checkboxes[x].hideEye) {
          displayEye[x].src = "blueClosedEye.png";
          lawData[x].classList.remove('showData');
          // hideEye = false;
          // showEye = true;
        }

}

function showMenu() {
    if (menuHide) {
      console.log("opening menu...");
      menu.classList.add('showMenu');
      menuHide = false;
      menuShow = true;
    } else if (menuShow) {
      console.log("closing menu...");
      menu.classList.remove('showMenu');
      menuHide = true;
      menuShow = false;
    }
}
