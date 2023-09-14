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