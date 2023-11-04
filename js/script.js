window.addEventListener("load", function(){
  const form = document.querySelector("form");
  form.addEventListener("submit", infoGathering)
})

function classHidden(){
  document.querySelector("#detail-front").setAttribute("class", "hidden");
  document.querySelector("#detail-back").setAttribute("class", "hidden");
  document.querySelector("#detail-full").setAttribute("class", "hidden");
  document.querySelector("#creative-front").setAttribute("class", "hidden");
  document.querySelector("#creative-back").setAttribute("class", "hidden");
  document.querySelector("#creative-full").setAttribute("class", "hidden");

}

function infoGathering(e) {
  e.preventDefault();
  classHidden()
  const inputName = document.getElementById("name").value;
  const output = document.getElementById("output");
  const radioInput = document.querySelector("input[name=personality]:checked").value;
  const dropInput = document.getElementById("web-path").value;
  output.innerText = `Hi, ${inputName}! Happy to see you here! I see that you have ${radioInput} personality and your preferred role in web development is ${dropInput}.`;

  if(radioInput === "detail-oriented" && dropInput === "Front-end"){
    document.querySelector("#detail-front").removeAttribute("class");
  }else if(radioInput === "detail-oriented" && dropInput === "Back-end"){
    document.querySelector("#detail-back").removeAttribute("class");
  }else if(radioInput === "detail-oriented" && dropInput === "Full-stack"){
    document.querySelector("#detail-full").removeAttribute("class");
  }else if(radioInput === "creative thinker" && dropInput === "Front-end"){
    document.querySelector("#creative-front").removeAttribute("class");
  }else if(radioInput === "creative thinker" && dropInput === "Back-end"){
    document.querySelector("#creative-back").removeAttribute("class");
  }else if(radioInput === "creative thinker" && dropInput === "Full-stack"){
    document.querySelector("#creative-full").removeAttribute("class");
  }
  

}