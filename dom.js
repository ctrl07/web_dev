//Examine the Document Object

// // console.dir(document)
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);

// //document.title=123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);

// //Selecting from DOM
// //document.all[10].textContent='hello';
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);

// GET ELEMENT BY ID//
// let headerTitle= document.getElementById(header-title);
// let header=document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent='Hello';
// headerTitle.innerText='Bye';
// console.log(headerTitle,innerText);
// headerTitle.innerHTML='<h3>Hello</h3>';
// headerTitle.style.borderBottom='solid 3px #000';

//GET ELEMENT BY CLASS NAME//
// let items=document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent='Hello 2';

// let exp=document.getElementsByClassName('title');
// exp[0].style.fontWeight='bold';
// exp[0].style.color='green';

// let li= document.getElementsByTagName('li');
// let items= document.getElementsByClassName('list-group-item');

// for(let i=0;i<li.length;i++){
//     li[i].style.fontWeight='bold'
// }

// for(let i=0;i<items.length;i++){
//     items[i].style.backgroundColor='lightgrey'
// }

// QuerySelector=> Grabs the top most element if multiple use QUERYSELECTORALL //
// let li=document.querySelectorAll('li');
// li[1].style.color='green';

// let odd=document.querySelectorAll('li:nth-child(odd');

// for(var i=0;i<odd.length;i++){
//     odd[i].style.backgroundColor='green';
// }

// TRAVERSING THR DOM //

let itemList= document.querySelector('#items');

// //parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor='#f4f4f4';
// console.log(itemList.parentNode.parentNode);

//parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor='#f4f4f4';
// console.log(itemList.parentElement.parentElement);

// childNode
// console.log(itemList.childNodes);
// console.log(itemList.children);

// //firstChild//
// console.log(itemList.firstChild);
// //firstElement Child //
// console.log(itemList.firstElementChild);

// //lastChild//
// console.log(itemList.lastChild);
// //lastElement Child //
// console.log(itemList.lastElementChild);

// // nextSibiling
// console.log(itemList.nextSibling);
// // nextElementSibiling
// console.log(itemList.nextElementSibling);

// // previousSibiling
// console.log(itemList.previousSibling);
// // previousElementSibiling
// console.log(itemList.previousElementSibling);

// createElement

// create a div

let newDiv=document.createElement('div');

//Add class
newDiv.className='hello';

// Add id
newDiv.id='hello1';

// Add attribute
newDiv.setAttribute('title','Hello Div');
//console.log(newDiv);

// CREATE TEXT NODE
let newDivText=document.createTextNode('HEllo word');

// add text to div
newDiv.appendChild(newDivText);

let container=document.querySelector('header .container');
var h1 = document.querySelector('header h1');
//console.log(newDiv);

// add HEllo word before Item Lister

container.insertBefore(newDiv,h1);


// add HEllo word before Item 1
let oldDiv=document.createElement('div');
oldDiv.className='hellow';
oldDiv.id='hello2'
oldDiv.setAttribute('li','Hello Div1');
let oldDivText=document.createTextNode('HEllo word');
oldDiv.appendChild(oldDivText);
let random=document.querySelector('ul .list-group-item');
var li = document.querySelector('header ul li');
random.insertBefore(oldDiv,li);