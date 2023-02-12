const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector('#ingredients');

// Розв'язок 1

// const items = [];

// for (const ingredient of ingredients) {
  
//  const item = document.createElement("li");
//  item.textContent = ingredient;
//  item.classList.add("item");
//  items.push(item);

// }

// listEl.append(...items);


// Чому не працює через map? Тепер працює через map, я забула return, дякую)

// Розв'язок 2

const items = ingredients.map(ingredient => {
 const item = document.createElement("li");
 item.textContent = ingredient;
 item.classList.add("item");
  return item
});

listEl.append(...items);