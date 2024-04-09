
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


// product detail

$(document).ready(function() {
  $('.product-detail__size-choose input').on('click', function() {
      var headphonesColor = $(this).attr('data-image');
      $('.active').removeClass('active');
      $('.product-detail__left img[data-image = ' + headphonesColor + ']').addClass('active');
      $(this).addClass('active');
  });

});

// slideshow


document.getElementById('next').onclick = function() {
  let lists = document.querySelectorAll('.slide-show__items');
  document.getElementById('slide').appendChild(lists[0]);
}

document.getElementById('prev').onclick = function() {
  let lists = document.querySelectorAll('.slide-show__items');
  document.getElementById('slide').prepend(lists[lists.length - 1]);
}

// quantity

const plus = document.querySelector(".quantity__plus"),
minus = document.querySelector(".quantity__minus"),
number = document.querySelector(".quantity__number");
let soluong = 1;
plus.addEventListener("click", ()=>{
  soluong ++;
  soluong = (soluong < 10) ? "0" + soluong : soluong;
  number.value = soluong;
  console.log(soluong);
});

minus.addEventListener("click", ()=>{
  if(soluong > 1) {
    soluong--;
    soluong = (soluong < 10) ? "0" + soluong : soluong;
    number.value = soluong;
  }
  
});

// banner video

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




// tab-item
// const $ = document.querySelector.bind(document);
// const $$ = document.querySelectorAll.bind(document);

// const tabs = $$(".tab-item");
// const panes = $$(".tab-pane");

// const tabActive = $(".tab-item.active");
// const line = $(".tabs .line");

// requestIdleCallback(function () {
//   line.style.left = tabActive.offsetLeft + "px";
//   line.style.width = tabActive.offsetWidth + "px";
// });

// tabs.forEach((tab, index) => {
//   const pane = panes[index];

//   tab.onclick = function () {
//     $(".tab-item.active").classList.remove("active");
//     $(".tab-pane.active").classList.remove("active");

//     line.style.left = this.offsetLeft + "px";
//     line.style.width = this.offsetWidth + "px";

//     this.classList.add("active");
//     pane.classList.add("active");
//   };
// });

