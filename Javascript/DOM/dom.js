
//Dom Manipulation

const title = document.querySelector('#main-heading');
title.style.color = 'red';

console.log(title);

const listItems = document.querySelectorAll('.list-items');

for (i =0; i <listItems.length; i++ ) {
    listItems[i].style.fontSize = '2rem';
    listItems[i].style.color = 'green';
}

console.log(listItems);

//creating element

const ul = document.querySelector('ul');
const li = document.createElement('li');

ul.append(li);

//modifying the text

li.innerText="X-men";


//Modifying attributes and classes

li.setAttribute('class', 'list-items');
li.style.fontSize = '2rem';
li.style.color = 'green';



// const firstListItem = document.querySelector('.list-items');

// console.log(firstListItem.innerText);
// console.log(firstListItem.textContent);
// console.log(firstListItem.innerHtML);


// //Get elementById()
// const title = document.getElementById("main-heading");
// console.log(title);

// //Get elementByClassName()
// const listitems = document.getElementsByClassName('list-items');
// console.log(listitems);


// //Get elementByTagName()

// const listItem = document.getElementsByTagName('li');
// console.log(listItem);

// // querySelector()

// const container = document.querySelector('div');
// console.log(container);

// querySelectorAll()l

// const container = document.querySelectorAll('div');
// console.log(container);

