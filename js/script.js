// show password

document.addEventListener("DOMContentLoaded", function () {
 
  var showPasswordButton = document.querySelector(".show-password");
  var showrePasswordButton = document.querySelector(".show-repassword");
  var showrePasswordButton2 = document.querySelector(".show-repassword2");
  var passwordInput = document.getElementById("password");
  var repasswordInput = document.getElementById("re-password");
  var repasswordInput2 = document.getElementById("re-password2");

  showPasswordButton?.addEventListener("click", function () {
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      showPasswordButton.classList.add("show-icon-pw");
    } else {
      passwordInput.type = "password";
      showPasswordButton.classList.remove("show-icon-pw");
    }
  });

  showrePasswordButton?.addEventListener("click", function () {
    if (repasswordInput.type === "password") {
      repasswordInput.type = "text";
      showrePasswordButton.classList.add("show-icon-pw");
    } else {
      repasswordInput.type = "password";
      showrePasswordButton.classList.remove("show-icon-pw");
    }
  });
  showrePasswordButton2?.addEventListener("click", function () {
    if (repasswordInput2.type === "password") {
      repasswordInput2.type = "text";
      showrePasswordButton2.classList.add("show-icon-pw");
    } else {
      repasswordInput2.type = "password";
      showrePasswordButton2.classList.remove("show-icon-pw");
    }
  });
});

// 

// product detail

$(document).ready(function() {
  $('.product-detail__size-choose input').on('click', function() {
      var headphonesColor = $(this).attr('data-image');
      $('.active').removeClass('active');
      $('.product-detail__left img[data-image = ' + headphonesColor + ']').addClass('active');
      $(this).addClass('active');
  });

});

// quantity

const plus = document.querySelector(".quantity__plus"),
minus = document.querySelector(".quantity__minus"),
number = document.querySelector(".quantity__number");
let soluong = 1;
plus?.addEventListener("click", ()=>{
  soluong ++;
  soluong = (soluong < 10) ? "0" + soluong : soluong;
  number.value = soluong;
});

minus?.addEventListener("click", ()=>{
  if(soluong > 1) {
    soluong--;
    soluong = (soluong < 10) ? "0" + soluong : soluong;
    number.value = soluong;
  }
  
});
