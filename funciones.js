document.getElementById("showlogin").addEventListener("click", function () {
    document.querySelector(".popup").classList.add("active");
  });
  
  document.querySelector(".closebtn").addEventListener("click", function () {
    document.querySelector(".popup").classList.remove("active");
  });
  