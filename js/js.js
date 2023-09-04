let header = document.getElementsByClassName('.header')
let flex = document.getElementsByClassName('.flex')
let navbar = document.getElementsByClassName('.navbar')

// console.log(document.getElementsByClassName('icons'));
// console.log(document.getElementById('menu'));
// document.querySelector('#menu-btn').addEventListener('click', function ()  {
//     console.log('test');
//     navbar.classList.toggle('active');
// }) 

// = () => {
//     navbar.classList.toggle('active');
// }

// console.log(header)
// console.log(flex)
console.log(navbar)
document.querySelector('#menu').onclick = () => {
    // header.classList.toggle('active');
    // navbar.classList.toggle('active');
    navbar.classList.toggle('active');
}

// document.querySelector('#menu').onclick = () => {
//     document.getElementById('menu').classList.toggle('active');
// }