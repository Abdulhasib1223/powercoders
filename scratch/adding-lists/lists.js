console.log('my list');

function list() {
     let elul = document.createElement('ul');
     let elli1 = document.createElement('li');
     let li1Content = document.createTextNode('List1');
     elli1.appendChild(li1Content);
     elul.appendChild(elli1);
     let elbody_id = document.getElementById('body_id');
     elbody_id.appendChild(elul)

     let elli2 = document.createElement('li');
     let li2Content = document.createTextNode('List2');
     elli2.appendChild(li2Content);
     elul.appendChild(elli2);
     let elli3 = document.createElement('li');
     let li3Content = document.createTextNode('List3');
     elli3.appendChild(li3Content);
     elul.appendChild(elli3);






}