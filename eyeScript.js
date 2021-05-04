var windowW, windowH, mouseX, mouseY, div, divW, divH, ballX, eyeball;
var irisGroupElement;



window.addEventListener('DOMContentLoaded', (event) => {

  irisGroupElement = document.getElementsByClassName('iris-group')[0];

  document.addEventListener('mousemove', function(event) {
    // bgLayerW = bgLayer.clientWidth;
    // bgLayerH = bgLayer.clientHeight;

    // bgEyeballConW = bgEyeballCon.clientWidth;
    // bgEyeballConH = bgEyeballCon.clientHeight;

    // var vh = window.outerHeight;

    mouseX = event.screenX;
    mouseY = event.screenY;

    // PROF NOTE: Moving the eye here...
    irisGroupElement.style.transform = "translate(" + mouseX / 10 + "px, " + mouseY / 10 + "px)";
  });

});
