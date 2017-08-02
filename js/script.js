var togler = document.querySelector(".main-nav__toggler");
var mainnav = document.querySelector(".main-nav__list");

togler.addEventListener("click", function(event) {
    event.preventDefault();
    console.log("нажата кнопка");

    mainnav.classList.toggle("main-nav--close");
    // console.log("Клик по ссылке вход");
  });
