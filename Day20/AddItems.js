let input = document.querySelector('input');

let items=[];

function addItems() {

    let value =input.value;

    //items.push(value);
    //items.reverse();
    items.unshift(value);
    dispalyItems();
}

function dispalyItems() {

    let ol=document.querySelector('ol');

    ol.innerHTML='';

    for(let i=0;i<items.length;i++) {

        let li=document.createElement('li');
        let text=document.createTextNode(items[i]);
        li.appendChild(text);
        ol.appendChild(li);
    }

}