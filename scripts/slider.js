let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function () {
  nextImage();
}, 8000);

function nextImage() {
  count++;
  if (count > 5) {
    count = 1;
  }

  document.getElementById("radio" + count).checked = true;
}

function prevImage() {
  count--;

  if (count < 1) {
    count = 5;
  }

  document.getElementById("radio" + count).checked = true;
}

function nextImage() {
  count++;

  if (count > 5) {
    count = 1;
  }

  document.getElementById("radio" + count).checked = true;
}
