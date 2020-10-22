function loadPage() {
    let screen_width = window.innerWidth;

    if (screen_width > 1500) {
        document.getElementsByTagName("html")[0].classList.add("openNav")
    }

    document.getElementById("years").innerText = (new Date().getFullYear() - 2013)
}


function toggleNav(){
  document.getElementsByTagName("html")[0].classList.toggle("openNav")
  for (let toggle of document.getElementsByClassName("nav-toggle")){
      toggle.classList.toggle("active")
  }
}