console.log("Hello Friend")

var modals = document.querySelectorAll('.modal') 
var modalClose = document.querySelectorAll('.modal_close')
var projectCard = document.querySelectorAll('.projects_card')

for(let i = 0; i < modals.length; i++) {
  console.log(modals[i])

  // To Close Modal
  if (modalClose[i]) {
    modalClose[i].addEventListener('click', function() {
      setTimeout(function() {
        modals[i].style.opacity = '0';
        modals[i].style.display = "none";
        modals[i].classList.remove('fadeIn')
      }, 1000)
      modals[i].classList.add('fadeOut')
    });
  } else {
    console.error('Element with ID "myElementId" not found.');
  }


  // To Open Modal
  if (projectCard[i]) {
    projectCard[i].addEventListener('click', function() {
      modals[i].style.display = "flex";
      modals[i].style.opacity = '1';
      modals[i].classList.remove('fadeOut')
      modals[i].classList.add('fadeIn')
    });
  } else {
    console.error('Element with ID "myElementId" not found.');
  }

}


// When the user scrolls down then
        // slide down the navbar

window.addEventListener('scroll', function() {
  console.log(document.documentElement.scrollTop)
  document.querySelector('.navbar').classList.toggle('navbar_onscroll', window.scrollY)
  document.querySelector('.active').classList.toggle('active_white', window.scrollY)

  var navbarItems = document.querySelectorAll('.navbar_item')
  
  for(let i = 0; i < navbarItems.length; i++) {
    navbarItems[i].classList.toggle('navbar_onscroll_navbar_item', window.scrollY)
  }

  if (document.documentElement.scrollTop < 600) {
    // Home
    document.getElementById('navbar_home').classList.add('active')
    document.getElementById('navbar_services').classList.remove('active_white')
    document.getElementById('navbar_projects').classList.remove('active_white')
    document.getElementById('navbar_aboutme').classList.remove('active_white')
  } else if (document.documentElement.scrollTop >= 600 && document.documentElement.scrollTop < 1150) {
    // Services
    document.getElementById('navbar_services').classList.add('active_white')
    document.getElementById('navbar_home').classList.remove('active_white')
    document.getElementById('navbar_projects').classList.remove('active_white')
    document.getElementById('navbar_aboutme').classList.remove('active_white')
  } else if (document.documentElement.scrollTop >= 1150 && document.documentElement.scrollTop < 2552) {
    // Projects
    document.getElementById('navbar_projects').classList.add('active_white')
    document.getElementById('navbar_home').classList.remove('active_white')
    document.getElementById('navbar_services').classList.remove('active_white')
    document.getElementById('navbar_aboutme').classList.remove('active_white')
  } else if (document.documentElement.scrollTop >= 2552) {
    // About me
    document.getElementById('navbar_projects').classList.remove('active_white')
    document.getElementById('navbar_home').classList.remove('active_white')
    document.getElementById('navbar_services').classList.remove('active_white')
    document.getElementById('navbar_aboutme').classList.add('active_white')
  }
})