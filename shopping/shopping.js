document.addEventListener('DOMContentLoaded',function (event) {
   document.querySelector('button').addEventListener('click',function (event) {
       let inputBox = document.getElementById('item');
       console.log(inputBox.value);
   });
});

console.log('my list');

function list(itemName) {
    let elli1 = document.createElement('li');
    let elspan = document.createElement('span');
    elspan.innerText = itemName;

    elli1.appendChild(elspan);
    let elbutton = document.createElement('button')
    elbutton.innerText ='Delete';
    elli1.appendChild(elbutton);
    return elli1;

}
