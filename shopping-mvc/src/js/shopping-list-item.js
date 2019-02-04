/**
 * represents an item in the shopping list.
 */
class ShoppingListItem {
  /**
   * @param name {string} Name
   * @param quantity {string} Quantity
   */
  constructor(name, quantity) {
    this.name = name;
    this.quantity = quantity;
  }

  /**
   * Creates and returns an 'li' elements for inclusion in the shopping list.
   * The li element that is returned has the structure
   * '&lt;li><span>itemName</span> <button>Delete</button></li>
   * read the code to understand the DOM tree structure.
   *
   * @returns {HTMLElement} li element
   */
  toListItem() {
    const listItem = document.createElement('li');
    const elSpan = document.createElement('span');
    elSpan.innerText = this.name;
    listItem.appendChild(elSpan);

    if (this.quantity !== '') {
      listItem.appendChild(document.createTextNode(' '));
      const quantityText = document.createElement('span');
      quantityText.textContent = `(${this.quantity})`;
      listItem.appendChild(quantityText);
    }

    const elButton = document.createElement('button');
    elButton.innerText = '  Delete';
    elButton.addEventListener('click', function () {
      console.log('Delete button is clicked');
      listItem.remove();
    });
    listItem.appendChild(elButton);
    return listItem;
  }
}
