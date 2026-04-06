	/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
	function m_menu() {
  		var x = document.getElementById("menulinks");
  		if (x.style.display === "flex") {
    		x.style.display = "none";
    		x.style.opacity = "0";
    		document.getElementById("carnav").setAttribute('class', 'fa-solid fa-caret-left');

  		} else {
    		x.style.display = "flex";
    		x.style.opacity = "1";
    		document.getElementById("carnav").setAttribute('class', 'fa-solid fa-caret-down');
  }
} 

function conf_menu() {
  		var x = document.getElementById("confdrop");
  		if (x.style.display === "flex") {
    		x.style.display = "none";
    		x.style.opacity = "0";
    		document.getElementById("carcon").setAttribute('class', 'fa-solid fa-caret-left');
  		} else {
    		x.style.display = "flex";
    		x.style.opacity = "1";
    		document.getElementById("carcon").setAttribute('class', 'fa-solid fa-caret-down');
  }
} 

function join_menu() {
  		var x = document.getElementById("joindrop");
  		if (x.style.display === "flex") {
    		x.style.display = "none";
    		x.style.opacity = "0";
    		document.getElementById("carjoin").setAttribute('class', 'fa-solid fa-caret-left');
  		} else {
    		x.style.display = "flex";
    		x.style.opacity = "1";
    		document.getElementById("carjoin").setAttribute('class', 'fa-solid fa-caret-down');
  }
}

function reg_menu() {
      var x = document.getElementById("regdrop");
      if (x.style.display === "flex") {
        x.style.display = "none";
        x.style.opacity = "0";
        document.getElementById("carreg").setAttribute('class', 'fa-solid fa-caret-left');
      } else {
        x.style.display = "flex";
        x.style.opacity = "1";
        document.getElementById("carreg").setAttribute('class', 'fa-solid fa-caret-down');
  }
}