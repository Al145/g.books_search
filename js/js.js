let wrapper = document.querySelector(".wrapper");
let text = document.querySelector(".text");

let textCont = text.textContent;
text.style.display = "none";

for (let i = 0; i < textCont.length; i++) {
  (function(i) {
    setTimeout(function() {
      let texts = document.createTextNode(textCont[i])
      let span = document.createElement('span');
      span.appendChild(texts);

      span.classList.add("wave");
      wrapper.appendChild(span);

    }, 140 * i);
  }(i));
}