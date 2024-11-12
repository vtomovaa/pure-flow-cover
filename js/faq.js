
let faqItems = document.querySelectorAll(".faq-content");

const onClickFaq = (e) => {
  const answer = e.currentTarget.querySelector(".a");
  const symbol = e.currentTarget.querySelector(".toggle-symbol");

  // Close all other answers
  faqItems.forEach(item => {
    const itemAnswer = item.querySelector(".a");
    const itemSymbol = item.querySelector(".toggle-symbol");
    if (itemAnswer !== answer) {
      itemAnswer.style.display = "none";
      itemSymbol.textContent = "+";
    }
  });

  // Toggle the clicked answer
  if (answer.style.display === "none" || answer.style.display === "") {
    answer.style.display = "block";
    symbol.textContent = "-";
  } else {
    answer.style.display = "none";
    symbol.textContent = "+";
  }
  
};

faqItems.forEach(item => {
  item.addEventListener("click", onClickFaq);
});
