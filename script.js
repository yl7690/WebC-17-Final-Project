var windowW, windowH, mouseX, mouseY, div, divW, divH, ballX, eyeball;
var bgEyeball, bgEyeballCon, bgEyeballConW, bgEyeballConH, bgLayer, bgLayerW, bgLayerH, horiMove, vertiMove;
var menuLogo, menu;
var menuHide = true;
var menuShow = false;
var checkbox, displayEye, lawData;
var showEye, hideEye;
let toolsElement = document.getElementById("content");
let myJSON = [
  {
    "name": "Tor Browser",
    "img": "img/tools/tor.png",
    "intro": "Tor is free and open-source software for enabling anonymous communication by directing Internet traffic through a free, worldwide, volunteer overlay network consisting of more than seven thousand relays in order to conceal the location and usage of a user from anyone conducting network surveillance or traffic analysis.",
    "link": "https://www.torproject.org/download/"
  },
  {
    "name": "ProtonMail",
    "img": "img/tools/proton.png",
    "intro": "ProtonMail is an end-to-end encrypted email service founded in 2013 in Geneva, Switzerland by scientists who spent time at the CERN research facility. It is the world's largest secure email service.",
    "link": "https://protonmail.com/"
  },
  {
    "name": "DuckDuckGo",
    "img": "img/tools/duckduckgo.png",
    "intro": "DuckDuckGo is an internet search engine that emphasizes protecting searchers' privacy and avoiding the filter bubble of personalized search results. DuckDuckGo distinguishes itself from other search engines by not profiling its users and by showing all users the same search results for a given search term.",
    "link": "https://duckduckgo.com/"
  },
  {
    "name": "HTTPS Everywhere",
    "img": "img/tools/HTTPS.jpg",
    "intro": "HTTPS Everywhere is a free and open-source browser extension for Google Chrome, Microsoft Edge, Mozilla Firefox, Opera, Brave, Vivaldi and Firefox for Android, which is developed collaboratively by The Tor Project and the Electronic Frontier Foundation.",
    "link": "https://www.eff.org/https-everywhere"
  },
  {
    "name": "Hushmail",
    "img": "img/tools/hushmail.jpg",
    "intro": "Hushmail offers encrypted, private email specifically for enterprise use for the healthcare and legal sectors. It began providing secure web mail solutions in 1999, so it’s an established player in the field. For emails sent to other Hushmail users, they will be encrypted by default. Non-users can view emails on a secure webpage.",
    "link": "https://www.hushmail.com/"
  },
  {
    "name": "Silent Circle",
    "img": "img/tools/silent.jpg",
    "intro": "Silent Circle is an encrypted communications firm based in Washington DC. Silent Circle provides multi-platform secure communication services for mobile devices and desktop.",
    "link": "https://www.silentcircle.com/"
  }
];


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

  for (let i=0; i<9; i++) {
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

for (let i = 0; i < myJSON.length; i++) {
  createSection(myJSON[i]);
}

function showCompare(x) {

      if (checkboxes[x].hideEye) {
        checkboxes[x].showEye = true;
        checkboxes[x].hideEye = false;
      } else {
        checkboxes[x].showEye = false;
        checkboxes[x].hideEye = true;
      }

      if (checkboxes[x].showEye) {
        displayEye[x].src = "img/blueOpenEye.png";
        lawData[x].classList.add('showData');
        // hideEye = true;
        // showEye = false;
      } else if (checkboxes[x].hideEye) {
          displayEye[x].src = "img/blueClosedEye.png";
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

function createSection(incomingJSON) {
  let newTool = document.createElement("DIV");
  newTool.style.backgroundColor = incomingJSON['bgColor'];
  newTool.style.backgroundImage = incomingJSON['imgUrl'];
  newTool.classList.add('toolContainer');

  let newName = document.createElement("H3");
  newName.innerText = incomingJSON['name'];
  newName.classList.add('name');
  newTool.appendChild(newName);

  let newImg = document.createElement("IMG");
  newImg.src = incomingJSON['img'];
  newImg.classList.add('toolImg');
  newTool.appendChild(newImg);

  let newIntro = document.createElement("P");
  newIntro.innerText = incomingJSON['intro'];
  newIntro.classList.add('toolIntro');
  newTool.appendChild(newIntro);

  let newLink = document.createElement('a');
  newLink.text = "Find more about it.";
  newLink.href = incomingJSON['link'];
  newLink.classList.add('links');
  newTool.appendChild(newLink);

  toolsElement.appendChild(newTool);
}
