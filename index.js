let count = 0

const number = document.getElementById("number");
const btns = document.querySelectorAll(".btn");

btns.forEach( (btn) => {
  btn.addEventListener("click", function(e) {
    let cls = e.currentTarget.classList;

    if(cls.contains("inc")) {
      count++;
    }else if(cls.contains("dec")) {
      count--;
    }else {
      count = 0
    };
    number.textContent = count;
    number.style.color = "red"
  });
}); 