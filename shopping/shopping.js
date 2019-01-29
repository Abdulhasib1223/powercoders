function domContentLoaded() {
  /** Widget that the user types on item in to. */
  const inputBox = document.getElementById('item');
  const shoppingList = document.querySelector('ul');
  const addItemButton = document.querySelector('button');
  const btn = document.getElementById('clear');
  btn.addEventListener('click', function (event) {
    let arr = document.querySelectorAll('li');
    arr.forEach(function (el) {
      el.remove();
      const clearListButton = document.querySelector('button');
      const listItem = document.querySelectorAll('li');
      clearListButton.disabled = listItem.length === 0;
      // or we can chain it like this:
      // document.querySelector('button#clear').disabled =
      //   document.querySelectorAll('li').length === 0;


    });
    btn.disabled = true;
  });

  inputBox.addEventListener('keyup', function (event) {
    const trimmedValue = inputBox.value.trim();
    addItemButton.disabled = trimmedValue === '';

    if (trimmedValue === '') {
      return;
    }

    if (event.key !== 'Enter') {
      return;
    }

    shoppingList.appendChild(createNewListItem(trimmedValue));
    inputBox.value = '';
    addItemButton.disabled = true;
    btn.disabled = false;

  });

  addItemButton.addEventListener('click', function (event) {
    const trimmedValue = inputBox.value.trim();

    shoppingList.appendChild(createNewListItem(trimmedValue));
    inputBox.value = '';
    inputBox.focus();
    addItemButton.disabled = true;
    btn.disabled = false;
  });

  inputBox.focus();
  addItemButton.disabled = true;
  btn.disabled = true;

}

if (document.readyState === 'loading') {
  //dom content loaded has not fired yet.
  document.addEventListener('DOMContentLoaded', function () {
    domContentLoaded();
  })
} else {
  domContentLoaded();
}


/**
 * Creates and returns an 'li' elements for inclusion in the shopping list.
 * The li element that is returned has the structure
 * '&lt;li><span>itemName</span> <button>Delete</button></li>
 * read the code to understand the DOM tree structure.
 *
 * @param {string} itemName name of the item to add to the list
 * @returns {HTMLElement} li element
 */
function createNewListItem(itemName) {
  const li = document.createElement('li');

  const elSpan = document.createElement('span');
  elSpan.innerText = itemName;
  li.appendChild(elSpan);

  const elButton = document.createElement('button');
  elButton.innerText = '  Delete';

  elButton.addEventListener('click', function (event) {
    console.log('Delete button is clicked');
    li.remove();
  });
  li.appendChild(elButton);
  return li;
}


//  listitems.length;
//  inputBox.focus();
//  addItembutton.disabled = true;
//  clearListButton.disabled = true;

