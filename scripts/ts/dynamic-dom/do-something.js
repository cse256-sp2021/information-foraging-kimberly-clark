export function doSomething() {
  console.log("Put some code in here!");
  
  var header = document.getElementById("main-menu-container");
  var sticky = header.offsetTop;
  
  function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}
  
  window.onscroll = function() {myFunction()};
    

}



