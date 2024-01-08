function toggleVideo() {
  const trailer = document.querySelector('.trailer');
  const video = document.querySelector('#uno');
  video.pause();
  trailer.classList.toggle('active');
}
function toggleVideo2() {
  const trailer2 = document.querySelector('.trailer2');
  const video2 = document.querySelector('#dos');
  video2.pause();
  trailer2.classList.toggle('active');
}
function toggleVideo3() {
  const trailer3 = document.querySelector('.trailer3');
  const video3 = document.querySelector('video');
  video3.pause();
  trailer3.classList.toggle('active');
}
function toggleVideo4() {
  const trailer4 = document.querySelector('.trailer4');
  const video4 = document.querySelector('video');
  video4.pause();
  trailer4.classList.toggle('active');
}
function toggleVideo5() {
  const trailer5 = document.querySelector('.trailer5');
  const video5 = document.querySelector('video');
  video5.pause();
  trailer5.classList.toggle('active');
}

// change the background images and movie content text
function changeBg(bg, title) {
  const banner = document.querySelector('.banner');
  const contents = document.querySelectorAll('.content');
  banner.style.background = `url("./images/movies/${bg}")`;
  banner.style.backgroundSize = 'cover';
  banner.style.backgroundPosition = 'center';

  contents.forEach(content => {
    content.classList.remove('active');
    if (content.classList.contains(title)) {
      content.classList.add('active');
    }
  });
}

