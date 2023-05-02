const linkElement = document.getElementById("link");

linkElement.addEventListener("click", function(event) {

  event.preventDefault();


  const confirmed = confirm('Do you want to redirect to another page?');

  if (confirmed) {

  window.location.href = linkElement.getAttribute("href");
  }
});


const campLink = document.getElementById("camp-link");

campLink.addEventListener("click", function(event) {

  event.preventDefault();

  const confirmed = confirm('Do you want to redirect to another page?');

  if (confirmed) {

  window.location.href = linkElement.getAttribute("href");
  }
});