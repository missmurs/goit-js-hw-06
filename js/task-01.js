const categoriesList = document.querySelectorAll("ul#categories > li.item");
console.log(`Number of categories: ${categoriesList.length}`);

categoriesList.forEach((category) => {
  const categoryName = category.firstElementChild.textContent;
  const categoryElements = category.querySelectorAll("ul > li");

  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryElements.length}`);
});
