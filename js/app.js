var signet = document.getElementById('signet');

function changePage() {
  var body = document.getElementsByTagName('body')[0];
  body.classList.remove('main');
  body.classList.add('family-tree');

  var imgCover = document.getElementsByClassName('img-cover')[0];
  if (imgCover) {
    var img = imgCover.getElementsByClassName('main-bg');
    if (img && img[0]) {
      img[0].setAttribute('src', './images/family-tree.jpg');
    }

    var content = imgCover.getElementsByClassName('content');
    if (content && content[0]) {
      content[0].classList.add('shown')
    }
  }

  signet.classList.add('hidden');
}

function play() {
  var audio = document.getElementById("audio");
  audio.volume = 0.1;
  // audio.play();
  changePage();
}

signet.addEventListener('click', function(e) {
  e.preventDefault();
  play();
})