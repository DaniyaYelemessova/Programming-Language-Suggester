window.addEventListener("load", function(){
  const form = document.querySelector("form");
  form.addEventListener("submit", infoGathering)
})

function infoGathering(e) {
  e.preventDefault();
}