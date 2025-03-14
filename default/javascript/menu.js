var close_menu = false;

function mostrarOpcoesMenu(){
  var submenu = document.getElementById("idDropdownMenu");
  
  if (submenu.classList.contains('show')){
    submenu.classList.remove('show');
  } else {
    submenu.classList.toggle("show");
    close_menu = false;
  }

}

window.onclick = function(event) {

  if (!event.target.matches('.dropoption')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }

 closeMenuResponsive();
  
}

  function closeMenuResponsive() {
    var x = document.getElementById("myNavbar");

    if (close_menu) {

      if (x.className.includes('responsive')){
        x.className = "menu";
        close_menu = false;
      }else if (x.className === "menu"){
        close_menu = false;
      }

    }else {

      if (x.className.includes('responsive')){
        close_menu = true;
      }
    }
    
  }

  function myFunction() {
   
    var x = document.getElementById("myNavbar");
    if (x.className === "menu") {
      x.className += " responsive";
    } else {
      x.className = "menu";
    }
  }

