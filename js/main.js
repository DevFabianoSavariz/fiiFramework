/* scroll reveal */
  function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 80;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

/* header box-shadow */
const header = document.querySelector('.header')

function changeHeaderWhenScroll() {
  if (window.scrollY  >= 50) {
    header.classList.add('show')
  } else {
    header.classList.remove('show')
  }
}

/* scrollUp */
const scrollUpTop = document.querySelector('.scrollUp')

function scrollUp() {
  if (window.scrollY >= 500) {
    scrollUpTop.classList.add('show')
  } else {
     scrollUpTop.classList.remove('show')
  }
}

/* When Scroll */
window.addEventListener('scroll', function () {
   changeHeaderWhenScroll()
   reveal()
   scrollUp()
})