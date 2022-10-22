let navbar = document.querySelector("nav");
let scrollbtn = document.querySelector(".scroll");
let links = document.querySelector("ul");
let Home = document.querySelector("#Home");
let about = document.querySelector("#About");
let Services = document.querySelector("#Services");
let port = document.querySelector("#PORTFOLIO");
let Contact = document.querySelector("#Contact");



  window.onscroll = function () {
    if (window.scrollY >= 50) {
      navbar.style.background = "#fff";
     
    } else if (window.scrollY >= 0) {
      navbar.style.background = "transparent";
      
    } 
  };
scrollbtn.onclick = function () {
  window.scroll({
    top: 950,
  });
};
Home.onclick = function () {
  window.scroll({
    top: 0,
  });
};
about.onclick = function () {
  window.scroll({
    top: 930,
  });
};
Services.onclick = function () {
  window.scroll({
    top: 1800,
  });
};
port.onclick = function () {
  window.scroll({
    top: 2700,
  });
};
Contact.onclick = function () {
  window.scroll({
    top: 3100,
  });
};


// 
