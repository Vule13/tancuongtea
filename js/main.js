
$('.contact-carousel').owlCarousel({
  loop: true,
  items: 3,
  center: true,
  autoplayTimeout: 4000,
  smartSpeed: 1000,
  margin: 30,
  autoplay: false,
  autoplayHoverPause: true,
  responsive : {
    0: {
      items: 1,
    },
    379: {
      items: 3,
    },
    767: {
      items: 3,
    },
  }
})


function openPopup(videoId) {
  var videoFrame = document.querySelector('.popup iframe');
  videoFrame.src = 'https://www.youtube.com/embed/' + videoId + '?autoplay=1';
  document.getElementById('popup').style.display = 'block';
}

function closePopup() {
  var videoFrame = document.querySelector('.popup iframe');
  videoFrame.src = '';
  document.getElementById('popup').style.display = 'none';
}

document.getElementById('video-link').addEventListener('click', function(event) {
  event.preventDefault();
  openPopup('lFpq-qIRc4M?si=frmhLz27X0ffcx6n'); // Thay VIDEO_ID_HERE bằng ID của video YouTube bạn muốn nhúng
});

document.getElementById('popup').addEventListener('click', function(event) {
  // Ngăn chặn sự kiện click trên popup từ propagate lên các phần tử cha
  event.stopPropagation();
});