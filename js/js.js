// let navbar = document.getElementsByTagName('nav')[0]

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
// console.log(navbar)
// document.querySelector('#menu').onclick = () => {
//     navbar.classList.toggle('active');
// }

// document.querySelector('#menu').onclick = () => {
//     document.getElementById('menu').classList.toggle('active');
// }

let navbar = document.querySelector(".header .flex .navbar");

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
};