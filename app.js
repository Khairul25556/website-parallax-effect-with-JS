let text = document.querySelector('#text');
let leaf = document.querySelector('#leaf');
let hill1 = document.querySelector('#hill1');
let hill4 = document.querySelector('#hill4');
let hill5 = document.querySelector('#hill5');

window.addEventListener('scroll', () =>{
    let value = window.scrollY; //* So this will be the vertical distance that the page has scrolled.

    text.style.marginTop = `${value * 2.5}px`; //*change their position using variable value
    leaf.style.top = `${value * -1.5}px`;
    leaf.style.left = `${value * 1.5}px`;
    hill5.style.left = `${value * 1.5}px`;
    hill4.style.left = `${value * -1.5}px`;
    hill1.style.top = `${value * 1}px`;
}) //*whatever code we will add here inside this callback function will be executed whenever we scroll the page