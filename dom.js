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

let exp=document.getElementsByClassName('title');
exp[0].style.fontWeight='bold';
exp[0].style.color='green';


