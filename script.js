let firstHeading= document.createElement('h1');
firstHeading.className= 'first';
firstHeading.innerHTML='My Assignment';

document.body.appendChild(firstHeading);


let div = document.createElement('div');
div.className= 'best';
div.innerHTML= 'This is my div element created using javaScript.';

document.body.appendChild(div);

let firstPara= document.createElement('p');
firstPara.id= 'exclusive';
firstPara.innerHTML= 'I am doing this assignment by myself!!';

document.body.appendChild(firstPara);

const removeHead= document.querySelector('.first');
removeHead.remove();

const removeDiv= document.querySelector('.best');
removeDiv.remove();

const removePara= document.getElementById('exclusive');
removePara.remove();

// let newDiv= document.createElement('div');
// newDiv.id= 'parent';
// newDiv.innerHTML= 'This is my third question!';
// document.body.appendChild(newDiv);

// let newP= document.createElement('p');
// newP.innerHTML='This is a child.'
// document.getElementById('parent').appendChild(newP);

let newP= document.createElement('p');
newP.innerHTML='Soyam added new paragraph!!';

let refNode= document.querySelector('h1');
refNode.after(newP);