const menu = document.querySelector('.menu');
const menuP = document.querySelector('.menu p');
console.log(menuP);
const list = document.querySelector('.list');
const texts = document.querySelectorAll('.list li a');
console.log(texts);


menu.addEventListener('click', () => {
    menu.classList.toggle('active');
    list.classList.toggle('hide');
});

texts.forEach((a) => {
    a.addEventListener('click', () => {
        console.log(a);
        menuP.innerHTML = a.innerHTML;
        list.classList.add('hide');
        menu.classList.toggle('active');
    })
});
