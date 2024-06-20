let playing = false;

let leftButton = document.getElementById("left-play");
let rightButton = document.getElementById("right-play");

let audio1 = document.getElementById("first-song");
let audio2 = document.getElementById("second-song");

let song = "";

let surprise = "";

leftButton.addEventListener("click", () => {
  if (leftButton.classList.contains("fa-play")) {
    if (playing) {
      audio2.pause();
      rightButton.classList.remove("fa-pause");
      rightButton.classList.add("fa-play");
    }
    audio1.play();
    playing = true;
    song = "music1";
    leftButton.classList.remove("fa-play");
    leftButton.classList.add("fa-pause");
  } else {
    playing = false;
    audio1.pause();
    song = "";
    leftButton.classList.remove("fa-pause");
    leftButton.classList.add("fa-play");
  }
});

rightButton.addEventListener("click", () => {
  if (rightButton.classList.contains("fa-play")) {
    if (playing) {
      audio1.pause();
      leftButton.classList.remove("fa-pause");
      leftButton.classList.add("fa-play");
    }
    audio2.play();
    playing = true;
    song = "music2";
    rightButton.classList.remove("fa-play");
    rightButton.classList.add("fa-pause");
  } else {
    playing = false;
    audio2.pause();
    song = "";
    rightButton.classList.remove("fa-pause");
    rightButton.classList.add("fa-play");
  }
});

let quotations = [];
let pictures = [];

async function getQuotes() {
  let url = `https://haritha75.github.io/BhagavadGitaData/quotations.json`;
  let response = await fetch(url);
  let data = await response.json();
  quotations = data[0];
  pictures = data[1];
}

let nextButton = document.getElementById("btn");
let quote = document.getElementById("text");
let quoteImage = document.getElementById("img");

nextButton.addEventListener("click", changeQuote);

function changeQuote() {
  divToImg();
  // let deg = Math.floor(Math.random() * 361);

  let color1 = generateColors();
  let color2 = generateColors();
  let color3 = generateColors();

  let value = `linear-gradient(to right,${color1},${color2},${color3})`;
  document.body.style.backgroundImage = value;

  let quoteIndex = Math.floor(Math.random() * quotations.length);
  quote.innerText = quotations[quoteIndex].quote;

  let imageIndex = Math.floor(Math.random() * 16);
  let imageSrc = pictures[imageIndex].img;
  quoteImage.setAttribute("src", imageSrc);
}

function generateColors() {
  let colorsHex = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
  ];
  let color = "#";
  for (let i = 0; i < 6; i++) {
    let num = Math.floor(Math.random() * colorsHex.length);
    color += colorsHex[num];
  }
  return color;
}

quote.addEventListener("click", () => {
  let quoteText = quote.innerText;
  navigator.clipboard.writeText(quoteText); // one time click the text it copied
});

let arrowkeys = [
  "Down",
  "Up",
  "Left",
  "Right",
  "ArrowDown",
  "ArrowUp",
  "ArrowLeft",
  "ArrowRight",
];

let spacebar = ["Space Bar", "Spacebar", " "];

let escapeKey = ["Esc", "Escape"];

document.addEventListener("keydown", (e) => {
  if (arrowkeys.includes(e.key)) {
    changeQuote();
  } else if (spacebar.includes(e.key)) {
    if (!playing) {
      audio1.play();
      playing = true;
      song = "music1";
      leftButton.classList.remove("fa-play");
      leftButton.classList.add("fa-pause");
    } else {
      if (song == "music1") {
        audio1.pause();
        leftButton.classList.remove("fa-pause");
        leftButton.classList.add("fa-play");
        audio2.play();
        song = "music2";
        rightButton.classList.remove("fa-play");
        rightButton.classList.add("fa-pause");
      } else {
        audio2.pause();
        rightButton.classList.remove("fa-pause");
        rightButton.classList.add("fa-play");
        audio1.play();
        song = "music1";
        leftButton.classList.remove("fa-play");
        leftButton.classList.add("fa-pause");
      }
    }
  } else if (escapeKey.includes(e.key)) {
    if (playing) {
      if (song == "music1") {
        audio1.pause();
        leftButton.classList.remove("fa-pause");
        leftButton.classList.add("fa-play");
        song = "";
        playing = false;
      } else {
        audio2.pause();
        rightButton.classList.remove("fa-pause");
        rightButton.classList.add("fa-play");
        song = "";
        playing = false;
      }
    }
  } else if (e.key == "b" || e.key == "B") {
    surprise += e.key;
  } else if (surprise == "b" || surprise == "B") {
    if (e.key == "g" || e.key == "G") {
      document.body.innerHTML = "";
      document.body.innerHTML = `
        <div style="display:flex; height:100vh; align-items:center; justify-content:center">
        <h1 class="glow" style="font-size:50px">Surprise unlocked, wait for a moment!</h1> 
        </div>`;
      setTimeout(() => {
        window.location.replace("surprise.html");
      }, 5000);

      surprise = "";
    } else {
      surprise = "";
    }
  } else if (e.key == "m" || e.key == "M") {
    surprise += "m";
  } else if (surprise == "m") {
    if (e.key == "e" || e.key == "E") {
      surprise += "e";
    } else {
      surprise = "";
    }
  } else if (surprise == "me") {
    if (e.key == "n" || e.key == "N") {
      surprise += "n";
    } else {
      surprise = "";
    }
  } else if (surprise == "men") {
    if (e.key == "u" || e.key == "U") {
      surprise = "";
      Swal.fire(`Spacebar Key - Play the Music \n 
      Esc Key - Pause the Music \n 
      MENU/menu - Displays All Shortcut Keys \n
      Arrow Keys - Change Quotation \n
      bg/BG - Surprise ... \n
      Enter Key - Disappear menu`);
    } else {
      surprise = "";
    }
  }
});

function divToImg() {
  $("#download").click();
}

$(document).ready(function () {
  var element = $("#quote-section");

  $("#download").on("click", function () {
    html2canvas(element, {
      onrendered: function (canvas) {
        var imageData = canvas.toDataURL("image/jpg");
        var newData = imageData.replace(
          /^data:image\/jpg/,
          "data:application/octet-stream"
        );
        $("#download").attr("download", "image.jpg").attr("href", newData);
      },
    });
  });
});

window.addEventListener("resize", () => {
  divToImg();
});
