/* Slideshow Logic */
let slides = document.querySelectorAll(".slideshow img");
let current = 0;

setInterval(() => {
  slides[current].classList.remove("active");
  current = (current + 1) % slides.length;
  slides[current].classList.add("active");
}, 2500);

/* Running No Button */
function moveNo() {
  const noBtn = document.getElementById("no");
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 50);
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
}

/* Yes Button */
function yesClicked() {
  document.getElementById("card").innerHTML = `
    <h1>YAYYYYY 💖</h1>
    <p>
      Happy Valentine’s Day Bhoomi 💘<br><br>
      I choose you. Always.<br>
      Today, tomorrow & every version of us.
    </p>
    <h2>Love, Vivaan ❤️</h2>
  `;
}

/* Floating Hearts */
setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = 20 + Math.random() * 20 + "px";
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}, 300);
