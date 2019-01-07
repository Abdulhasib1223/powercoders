console.log('msg')

function creating() {
    let elP = document.createElement('p');
    let pContent = document.createTextNode('This is a new Paragraph');
    elP.appendChild(pContent);
    let elBody = document.getElementById('body');
    elBody.appendChild(elP);
}

document.addEventListener('DOMContentLoaded'/*That is the name of the event that is triggered after the DOM is loaded*/, function (event) /*function(event) is an anonymous function used as an event listener and the event is (DOMloadedContent in our case)*/ {
    document.getElementById('creating').addEventListener('click' /*That is the name of the event that is triggered after the element containing the addpara id is clicked*/, function (event) {
        creating();
    });
});