const ratingState = document.querySelector("#rate-state")
const thankYouState = document.querySelector(".thanks-container")
const submitButton = document.getElementById("submit-button")
const rateAgain = document.getElementById("rating-button")
const rating = document.getElementById("selected")
const rates = document.querySelectorAll(".rating-btn")

submitButton.addEventListener("click", () => {
    thankYouState.classList.remove("hidden")
    ratingState.style.display = "none"
})

rateAgain.addEventListener("click", () => {
    thankYouState.classList.add("hidden")
    ratingState.style.display = "block"
})

rates.forEach((rate) => {
    rate.addEventListener("click", () => {
        rating.innerHTML = rate.innerHTML
    })
})
