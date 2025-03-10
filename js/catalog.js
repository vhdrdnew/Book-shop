const categories = document.querySelectorAll(".product-category");
const sections = document.querySelectorAll(".content-section");
const prices = document.querySelectorAll(".product-card__price");

const activeBgColor = "#E499C4";
const activeTextColor = "black";
const defaultBgColor = "transparent";
const defaultTextColor = "var(--light_pink)";

const defaultCategory = "cleanse";

function setActiveCategory(target) {
  categories.forEach(category => {
    const isActive = category.dataset.target === target;

    category.style.backgroundColor = isActive ? activeBgColor : defaultBgColor;
    category.style.color = isActive ? activeTextColor : defaultTextColor;
    category.querySelector(".product__arrow").style.display = isActive ? "inline-block" : "none";
  });

  sections.forEach(section => {
    section.style.display = section.id === target ? "grid" : "none";    
  });
}

function getRandomPrice(min = 20, max = 100) {
  return (Math.random() * (max-min) + min).toFixed(2);
}

function setRandomPrices() {
  prices.forEach(price => {
    price.textContent = `$${getRandomPrice()}`;
  });
}

document.addEventListener("DOMContentLoaded", function(){
  setActiveCategory(defaultCategory);
  setRandomPrices();
  categories.forEach(category => {
    category.addEventListener("click", () => setActiveCategory(category.dataset.target));
  });
});