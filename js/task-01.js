const categoriesList = document.querySelectorAll("ul#categories > li.item");
console.log(`Number of categories: ${categoriesList.length}`);

categoriesList.forEach((category) => {
  const categoryName = category.firstElementChild.textContent;
  const categoryElements = category.lastElementChild.children.length;
  console.log(`Elements: ${categoryElements}`);
  console.log(`Category: ${categoryName}`);
});
