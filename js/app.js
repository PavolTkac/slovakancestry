var signet = document.getElementById('signet');

function changePage() {
  var body = document.getElementsByTagName('body')[0];
  body.classList.remove('main');
  body.classList.add('family-tree');
  signet.classList.add('hidden');
}

function play() {
  var audio = document.getElementById("audio");
  audio.play();
  changePage();
}

signet.addEventListener('click', function(e) {
  e.preventDefault();
  play();
})