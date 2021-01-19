var signet = document.getElementById('signet');
var bagdes = document.getElementsByClassName('badge-wrapper');
var lightbox = document.getElementById('lightbox');
var close = document.getElementById('close');

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

Array.from(bagdes).forEach(function(bagde) {
  bagde.addEventListener('click', function() {
    var article = bagde.querySelector('article');
    var lightboxContent = lightbox.querySelector('.lightbox-content');
    lightboxContent.innerHTML = article.innerHTML;
    lightbox.classList.add('shown');
  });
});

close.addEventListener('click', function() {
  lightbox.classList.remove('shown');
});