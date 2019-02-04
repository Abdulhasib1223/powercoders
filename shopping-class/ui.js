function domContentLoaded() {
  /** Widget that the user types on item in to. */
  const inputBox = document.getElementById('item');
  const quantityBox = document.getElementById('quantity');
  const shoppingList = document.querySelector('ul');
  const addItemButton = document.querySelector('button');
  const btn = document.getElementById('clear');

  btn.addEventListener('click', function () {
    let arr = document.querySelectorAll('li');
    arr.forEach(function (el) {
      el.remove();
      const clearListButton = document.querySelector('button');
      const listItem = document.querySelectorAll('li');
      clearListButton.disabled = listItem.length === 0;
      // or we can chain it like this:
      // document.querySelector('button#clear').disabled =
      // document.querySelectorAll('li').length === 0;
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

    const item = new ShoppingListItem(trimmedValue, quantityBox.value);
    shoppingList.appendChild(item.toListItem());
    inputBox.value = '';
    addItemButton.disabled = true;
    btn.disabled = false;
  });

  addItemButton.addEventListener('click', function () {
    const trimmedValue = inputBox.value.trim();

    shoppingList.appendChild(
        new ShoppingListItem(trimmedValue, quantityBox.value.trim()).toListItem());
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


//  listItems.length;
//  inputBox.focus();
//  addItemButton.disabled = true;
//  clearListButton.disabled = true;