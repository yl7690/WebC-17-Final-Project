var windowW, windowH, mouseX, mouseY, div, divW, divH, ballX, eyeball;
var bgEyeball, bgEyeballCon, bgEyeballConW, bgEyeballConH, bgLayer, bgLayerW, bgLayerH, horiMove, vertiMove;
var menuLogo, menu;
var menuHide = true;
var menuShow = false;

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

    console.log(bgEyeballConW);
    console.log("mouse", mouseX);

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
