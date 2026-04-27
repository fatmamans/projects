let icon = document.querySelector('nav .icons');
let links = document.querySelector('nav .links');
let btn = document.querySelector('nav .btn');
let li = document.querySelectorAll('nav .links .list li');
icon.addEventListener('click', () => {
    icon.classList.toggle('active');
    links.classList.toggle('show');
    btn.classList.toggle('show');
});
li.forEach((e) => {
    e.addEventListener('click', () => {
        icon.classList.remove('active');
        links.classList.remove('show');
        btn.classList.remove('show');
    });
});
btn.addEventListener('click', () => {
    icon.classList.remove('active');
    links.classList.remove('show');
    btn.classList.remove('show');
});


let container = document.querySelectorAll('.question-boxes .two-box .box .text i ');
let question = document.querySelectorAll('.question-boxes .two-box .box p');

container.forEach(e => { 
    e.addEventListener('click', () => {
        if (e.classList.contains('fa-solid')) {
            if (e.classList.contains('fa-plus')) {
                e.classList.remove('fa-plus');
                e.classList.add('fa-minus');
                e.style.color = 'white';
                e.parentElement.style.marginBottom = '20px';
                e.parentElement.nextElementSibling.style.display = 'block';
            } else {
                e.classList.remove('fa-minus');
                e.classList.add('fa-plus');
                e.style.color = 'var(--color-one)';
                e.parentElement.style.marginBottom = '0';
                e.parentElement.nextElementSibling.style.display = 'none';
            }
        }
    })
});

let grid = document.querySelectorAll('.grid');
let read = document.querySelectorAll('.grid .btn');
let text = document.querySelectorAll('.grid .btn p');
let svg = document.querySelectorAll('.grid .btn svg');

read.addEventListener('click', () => {
    grid.classList.toggle('active');
    if (grid.classList.contains('active')) {
        text.textContent = 'Read Less';
        svg.style.transform = 'rotate(181deg)';
    } else { 
        text.textContent = 'Read Full Blog';
        svg.style.transform = 'rotate(0deg)';
    }
}
);
