document.getElementById("showlogin").addEventListener("click", function () {
  document.querySelector(".popup").classList.add("active");
});

document.querySelector(".closebtn").addEventListener("click", function () {
  document.querySelector(".popup").classList.remove("active");
});
//scroll automatico hacia el top
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Desplazamiento suave
  });
}