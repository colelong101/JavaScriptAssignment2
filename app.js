const ul = document.getElementById('ul');
const item = document.getElementById('item');
const button = document.getElementById('button');

function addItem () {
  const itemText = item.value;
  item.value = '';
  const listItem = document.createElement('li');
  const span = document.createElement('span');
  const deleteButton = document.createElement('button');
  listItem.appendChild(span);
  listItem.appendChild(deleteButton);
  span.textContent = itemText;
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', () => {
    listItem.remove();
  });
  
  ul.appendChild(listItem);
  
  item.focus();
}

button.addEventListener('click', addItem);
