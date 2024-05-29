const navbarnav = document.querySelector(".navbar-nav");

document.querySelector("#hamburger-menu").onclick = () => {
  // navbarnav.classList.toggle("active");
  // if (navbarnav.style.display === "block") {
  //   navbarnav.style.display = "none";
  // } else {
  //   navbarnav.style.display = "block";
  // }
    if (navbarnav.style.width === "250px") {
      navbarnav.style.width = "0"
      // document.querySelector(".navbar").style.marginRight = "0";
    } else {
      navbarnav.style.width = "250px"
      // document.querySelector(".navbar").style.marginRight = "250px";
    }
  
};

// const hamburger = document.querySelector("#hamburger-menu");

// document.addEventListener("click", function (e) {
//   if (!hamburger.contains(e.target) && !navbarnav.contains(e.target)) {
//     navbarnav.classList.remove("active");
//   }
// });
