console.log("Hello Friend")

var modalClose = document.querySelector('.modal_close');
var projectCard = document.querySelector('.projects_card')


if (modalClose) {
  modalClose.addEventListener('click', function() {
    document.querySelector('.modal').style.opacity = '0';
    setTimeout(() => {
        document.querySelector('.modal').style.display = "none";
      }, 2000);
  });
} else {
  console.error('Element with ID "myElementId" not found.');
}

if (projectCard) {
    projectCard.addEventListener('click', function() {
      document.querySelector('.modal').style.display = "flex";
      document.querySelector('.modal').style.opacity = '1';
    });
  } else {
    console.error('Element with ID "myElementId" not found.');
  }

// When the user scrolls down then
        // slide down the navbar


// window.onscroll = function() {scroll()};

// function scroll() {
//   console.log(document.documentElement.scrollTop)
//   if (document.documentElement.scrollTop > 400) {
//     document.querySelector('.navbar').className = 'navbar navbar_onscroll';
//   } else {
//     document.querySelector('.navbar').className = "navbar";
//   }
// }

window.addEventListener('scroll', function() {
  console.log(document.documentElement.scrollTop)
  document.querySelector('.navbar').classList.toggle('navbar_onscroll', window.scrollY)
  document.querySelector('.active').classList.toggle('active_white', window.scrollY)

  if (document.documentElement.scrollTop < 600) {
    console.log("Home")
    document.getElementById('navbar_home').classList.add('active')
    document.getElementById('navbar_services').classList.remove('active_white')
    document.getElementById('navbar_projects').classList.remove('active_white')
    document.getElementById('navbar_aboutme').classList.remove('active_white')
  } else if (document.documentElement.scrollTop >= 600 && document.documentElement.scrollTop < 1150) {
    console.log("services")
    document.getElementById('navbar_services').classList.add('active_white')
    document.getElementById('navbar_home').classList.remove('active_white')
    document.getElementById('navbar_projects').classList.remove('active_white')
    document.getElementById('navbar_aboutme').classList.remove('active_white')
  } else if (document.documentElement.scrollTop >= 1150) {
    console.log("projects")
    document.getElementById('navbar_projects').classList.add('active_white')
    document.getElementById('navbar_home').classList.remove('active_white')
    document.getElementById('navbar_services').classList.remove('active_white')
    document.getElementById('navbar_aboutme').classList.remove('active_white')
  }  
})

// window.addEventListener('scroll', function() {
//   var header = document.querySelector('.navbar');
//   var header_logo = document.querySelector('.navbar-logo')
//   var header_links_active = document.querySelector('.navbar-hyperlinks-active')
//   var header_links_inactive = document.querySelectorAll('.navbar-hyperlinks-inactive')
//   header.classList.toggle('sticky', window.scrollY)
//   header_logo.classList.toggle('resized', window.scrollY)
//   header_links_active.classList.toggle('underline', window.scrollY)
//   for (let i = 0; i < 3; i++) {
//     header_links_inactive[i].classList.toggle('inactive-underline', window.scrollY)
//   }
// })