document.querySelector("#showlogin").addEventListener("click",function(){
  document.querySelector(".popup").classList.add("active");
});
document.querySelector(".popup .closebtn").addEventListener("click",function(){
  document.querySelector(".popup").classList.remove("active");
});


