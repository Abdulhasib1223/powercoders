document.addEventListener('DOMContentLoaded', function (event) {
  document.querySelector('button').addEventListener('click', function (event) {
    let inputBox = document.getElementById('item');
    document.querySelector('ul').appendChild(
        createNewListItem(inputBox.value));
  });

  document.querySelector('input').addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
      let inputBox = document.getElementById('item');
      document.querySelector('ul').appendChild(
          createNewListItem(inputBox.value));
    }
  });
});

function createNewListItem(itemName) {
  let li = document.createElement('li');

  let elSpan = document.createElement('span');
  elSpan.innerText = itemName;
  li.appendChild(elSpan);

  let elButton = document.createElement('button');
  elButton.innerText = 'Delete';

  elButton.addEventListener('click', function (event) {
    console.log('Delete button is clicked');
    li.remove();
  });
  li.appendChild(elButton);
  return li;
}
