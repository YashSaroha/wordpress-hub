let btn = document.getElementById("scrollToTop")
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (scrollY > 400) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
}


function goToTop(){
    window.scrollTo({ top: 0, behavior: 'smooth' });
}