const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector('#ingredients');
const items = [];

for (const ingredient of ingredients) {
  
 const item = document.createElement("li");
 item.textContent = ingredient;
 item.classList.add("item");
 items.push(item);

}

listEl.append(...items);


// Чому не працює через map?

// const items = ingredients.map(ingredient => {
//  const item = document.createElement("li");
//  item.textContent = ingredient;
//  item.classList.add("item");
  
// });