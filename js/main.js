
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
      items: 1,
    },
    767: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  }
})

// scroll header

window.addEventListener('scroll', function() {
  var header = document.querySelector('.header-box');
  var scrollPosition = window.scrollY;
  var logo = document.querySelector('.header__logo-green')
  var logo_white = document.querySelector('.header__logo-white')
  if (scrollPosition > 100) { // Adjust 100 to your desired scroll position
      header.classList.add('header-fixed');
      logo.classList.add('logo-block');
      logo_white.classList.add('logo-hidden');
  } else {
      header.classList.remove('header-fixed');
      logo_white.classList.remove('logo-hidden');
      logo.classList.remove('logo-block');
  }
});

document.addEventListener("DOMContentLoaded", function () {
  var elementA = document.querySelector('.add-new');
  var elementB = document.querySelector('.address-popup');
  var elementC = document.querySelector('.address-popup__submit-back');
  elementA.addEventListener('click', function () {
    if (elementB.classList.contains('address-popup--opacity')) {
      elementB.classList.remove('address-popup--opacity');
    } else {
      elementB.classList.add('address-popup--opacity');
    }
  });
  elementC.addEventListener('click', function () {
    if (elementB.classList.contains('address-popup--opacity')) {
      elementB.classList.remove('address-popup--opacity');
    } else {
      elementB.classList.add('address-popup--opacity');
    }
  });
});


function toggleDropdown(element) {

  var dropdown = document.getElementById("myDropdown");
  dropdown.classList.toggle("clicked");

  if (dropdown.style.display === "none") {
    dropdown.style.display = "block";
  } else {
    dropdown.style.display = "none";
  }
}


document.addEventListener('DOMContentLoaded', function() {
  // Get all elements with class 'a'
  var iconMenu = document.querySelector('.hamburger-menu');
  var menu = document.querySelector('.header-menu');
  console.log(111)
  // Loop through each element and add click event listener
  iconMenu.addEventListener('click', function () {
    if (menu.classList.contains('menu-block')) {
      menu.classList.remove('menu-block');
    } else {
      menu.classList.add('menu-block');
    }
  });
});

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

