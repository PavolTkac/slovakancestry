var signet = document.getElementById('signet');
var bagdes = document.getElementsByClassName('badge-wrapper');
var lightbox = document.getElementById('lightbox');
var close = document.getElementById('close');
var badgeMain = document.getElementsByClassName('badge-img-main');

function changePage() {
  var body = document.getElementsByTagName('body')[0];
  body.classList.toggle('main');
  body.classList.toggle('family-tree');

  var imgCover = document.getElementsByClassName('img-cover')[0];
  if (imgCover) {
    var content = imgCover.getElementsByClassName('content');
    if (content && content[0]) {
      content[0].classList.toggle('shown')
    }
  }

  signet.classList.toggle('hidden');
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

// Array.from(bagdes).forEach(function(bagde) {
//   bagde.addEventListener('click', function() {
//     var article = bagde.querySelector('article');
//     var lightboxContent = lightbox.querySelector('.lightbox-content');
//     lightboxContent.innerHTML = article.innerHTML;
//     lightbox.classList.add('shown');
//   });
// });

close.addEventListener('click', function() {
  lightbox.classList.remove('shown');
});

if (badgeMain && badgeMain.length > 0) {
  badgeMain[0].addEventListener('click', changePage);
}