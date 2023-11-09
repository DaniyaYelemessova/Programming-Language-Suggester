window.addEventListener("load", function(){
  const form = document.querySelector("form");
  form.addEventListener("submit", infoGathering);
});

function resetForm(){
  const form = document.querySelector("form");
  form.reset();
}

function classHidden(){
  document.querySelector("#detail-front").setAttribute("class", "hidden");
  document.querySelector("#detail-back").setAttribute("class", "hidden");
  document.querySelector("#detail-full").setAttribute("class", "hidden");
  document.querySelector("#creative-front").setAttribute("class", "hidden");
  document.querySelector("#creative-back").setAttribute("class", "hidden");
  document.querySelector("#creative-full").setAttribute("class", "hidden");
  document.querySelector("#solver-front").setAttribute("class", "hidden");
  document.querySelector("#solver-back").setAttribute("class", "hidden");
  document.querySelector("#solver-full").setAttribute("class", "hidden");
  document.querySelector("#analytical-front").setAttribute("class", "hidden");
  document.querySelector("#analytical-back-full").setAttribute("class", "hidden");
  document.querySelector("#alert").setAttribute("class", "hidden");
}

function infoGathering(e) {
  e.preventDefault();
  classHidden();
  const inputName = document.getElementById("name").value;
  const inputNumber = parseInt(document.getElementById("number").value);
  const movieInput = document.querySelectorAll("input[name=movie]:checked");
  const movieArray = Array.from(movieInput);
  const newMovieArray = [];
  movieArray.forEach(function(movie){
    newMovieArray.push(movie.value)
  });
  if(movieInput.length === 0){
    document.querySelector("#alert").removeAttribute("class");
    return
  }
  const output = document.getElementById("output");
  const radioInput = document.querySelector("input[name=personality]:checked").value;
  const dropInput = document.getElementById("web-path").value;

  output.innerText = `Hi, ${inputName}! Happy to see you here! it's interesting! your less favorite number is ${inputNumber}! i wonder why? I see that you have ${radioInput} personality and your preferred role in web development is ${dropInput}. By the way, great choice of  ${newMovieArray} movie(s).`;


  if(radioInput === "detail-oriented"){
    if(dropInput === "Front-end"){
      document.querySelector("#detail-front").removeAttribute("class");
    }else if(dropInput === "Back-end"){
      document.querySelector("#detail-back").removeAttribute("class");
    }else if(dropInput === "Full-stack"){
      document.querySelector("#detail-full").removeAttribute("class");
    }
  } if(radioInput === "creative thinker"){
      if(dropInput === "Front-end"){
        document.querySelector("#creative-front").removeAttribute("class");
      }else if(dropInput === "Back-end"){
        document.querySelector("#creative-back").removeAttribute("class");
      }else if(dropInput === "Full-stack"){
        document.querySelector("#creative-full").removeAttribute("class");
      }
  } if(radioInput === "problem solver"){
      if(dropInput === "Front-end"){
        document.querySelector("#solver-front").removeAttribute("class");
      }else if(dropInput === "Back-end"){
        document.querySelector("#solver-back").removeAttribute("class");
      }else if(dropInput === "Full-stack"){
        document.querySelector("#solver-full").removeAttribute("class");
      }
  }if(radioInput === "analytical mind"){
    if(dropInput === "Front-end"){
      document.querySelector("#analytical-front").removeAttribute("class");
    }else if(dropInput === "Front-end" || "Full-stack"){
      document.querySelector("#analytical-back-full").removeAttribute("class");
    }
  }
  resetForm();
}