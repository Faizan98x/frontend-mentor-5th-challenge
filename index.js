const ratingbtn = document.getElementById("ratingbtn");

const rates = document.querySelectorAll(".card__circle");

ratingbtn.addEventListener("click", () => {
  document.getElementById("thankupage").style.display = "flex";
  document.getElementById("ratingpage").style.display = "none";
});

rates.forEach((rate) => {
  rate.addEventListener("click", () => {
    document.getElementById("rating").innerHTML = rate.innerHTML;
  });
});
