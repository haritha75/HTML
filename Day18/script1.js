function addItem() {

    let input=document.getElementsByTagName('input')[0];
    let ol=document.getElementsByTagName('ol')[0];

    let li=document.createElement('li');
    li.innerText=input.value;
    ol.appendChild(li);
    input.value='';

}