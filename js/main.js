const child = document.querySelector('.child');

let greet = 'hello';
let yourName = 'Josh';


function sayHi() {
    alert(greet + ' ' + yourName);
}

addEventListener('click', sayHi);