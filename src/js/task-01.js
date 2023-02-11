// task 1

const categoriesEl = document.querySelector('#categories');

const numberOfCategories = categories.children.length;

console.log(`Number of categories: ${numberOfCategories}`);

// task 2

const itemsEl = document.querySelectorAll('.item');

 itemsEl.forEach(item => {
   console.log(`Category: ${item.firstElementChild.textContent}`);
   console.log(`Elements: ${item.lastElementChild.children.length}`);
  });
