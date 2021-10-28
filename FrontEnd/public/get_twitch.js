var request = new XMLHttpRequest();
request.open('GET', 'https://api.twitch.tv/helix/streams', true);


// Function to Create the Mobile Menu
function mobileMenu() {
    // desktop side menu
    var node = document.getElementById("sidenav");
    // put the side menu inside the mobile menu container
    document.getElementById("menu-display").appendChild(node);
    // Call Toggle Funtion
    toggle();
  }

  // Toggle Function: Function to show/hide the mobile menu when icon is clicked
  function toggle() {
    // Container holding mobile menu
    var x = document.getElementById("menu-display");
    // If menu is visable, make it go away
    if (x.style.display === "block") {
      x.style.display = "none";
    }
    // Otherwise display it (as block)
    else {
      x.style.display = "block";
    }
  }

  // Event Listener for clicking on mobile menu (hamberger menu) icon
  document.getElementById("menu-link").addEventListener("click", mobileMenu);