var windowW, windowH, mouseX, mouseY, div, divW, divH, ballX, eyeball;


window.addEventListener('DOMContentLoaded', (event) => {

  eyeball = document.getElementById('eyeball');
  div = document.getElementById('homeTitleBox');



  document.addEventListener('mousemove', function(event) {
    windowW = screen.width;
    windowH = screen.height;

    divW = div.clientWidth;
    divH = div.clientHeight;

    mouseX = event.screenX;
    mouseY = event.screenY;

    eyeball.style.left = 0.10 * windowW + mouseX / windowW * (1 * divW / 5) + 'px';

    console.log(mouseX / windowW * (3 * divW / 5));
  });

});
