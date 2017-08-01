var mainnav = document.querySelector(".main-nav__toggler");
if (mainnav) {
  var foundhotel = document.querySelector(".page-content-index-form-btn-open-closed");
  popup.classList.add("page-content-index-appointment-form-close");
  foundhotel.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.toggle("page-content-index-appointment-form-close");
    console.log("Клик по ссылке вход");
  });
}
