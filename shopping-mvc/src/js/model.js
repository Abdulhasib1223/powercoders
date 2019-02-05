/**
 * Shopping list model.
 *
 * The list modelled as an array.
 */
class Model {
  /** @param controller {!Controller} App controller*/
  constructor(controller) {
    console.log('Model initialised');

    /** @private {!ShoppingListItem[]} Items in the list */
    this.items_ = [
        new ShoppingListItem('First item', 'q1'),
        new ShoppingListItem('Second item', 'q2'),
        new ShoppingListItem('third item', 'q3')
    ];

    /** @private {!View} View gor this model. */
    this.view_ = new View(this, controller);

    this.view_.update();
  }
  get items () {
    return this.items_.slice();
  }
}