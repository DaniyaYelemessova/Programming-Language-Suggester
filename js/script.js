window.addEventListener("load", function(){
  const form = document.querySelector("form");
  form.addEventListener("submit", infoGathering)
})

function infoGathering(e) {
  e.preventDefault();
  const inputName = document.getElementById("name").value;
  const output = document.getElementById("output");
  const radioInput = document.querySelector("input[name=personality]:checked").value;
  const dropInput = document.getElementById("web-path").value;
  output.innerText = `Hi, ${inputName}! Happy to see you here!`
  

}