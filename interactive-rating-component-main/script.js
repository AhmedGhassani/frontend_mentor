// Handle styling for selected rating
const ratingButtons = document.querySelectorAll("button.rating_button");

ratingButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    ratingButtons.forEach((btn) => {
      btn.classList.remove("selected");
    });
    btn.classList.add("selected");
  });
});

//Handle form submision
const submitButton = document.querySelector("#submit");
const ratingCard = document.querySelector("#rating");
submitButton.addEventListener("click", () => {
  const selectedButton = document.querySelector(".selected");
  const thankYou = document.querySelector("#thankYou");
  const score = document.querySelector("#score");
  if (selectedButton !== null) {
    rating = selectedButton.innerHTML;
    ratingCard.style.display = "none";
    score.innerHTML = `You selected ${rating} out of 5`;
    thankYou.style.display = "flex";
  }
});
