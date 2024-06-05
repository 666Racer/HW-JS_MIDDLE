/*1. Ко всем элементам, имеющим класс "dropdown-item"
добавить еще один класс "super-dropdown", необходимо использовать методы forEach и querySelectorAll и свойство classList у элементов.*/

const dropdownItemEl = document.querySelectorAll('.dropdown-item');
dropdownItemEl.forEach(element => {
    element.classList.add('super-dropdown');
});

/*2. У элемента с классом btn необходимо убрать класс "btn-secondary", если он присутствует у этого элемента, либо добавить, если такого класса у элемента не было.*/

const btnEl = document.querySelector('.btn');
btnEl.classList.toggle('btn-secondary');

/*3. Необходимо удалить класс "dropdown-menu"
у элемента, у которого присутствует класс "menu".*/

const menuEl = document.querySelector('.menu');
menuEl.classList.remove('dropdown-menu');

/*4. Используя метод insertAdjacentHTML добавьте после div 'a с классом "dropdown" *следующую разметку:
`<a href="#">link</a>`*/

const dropdownEl = document.querySelector('.dropdown');
dropdownEl.insertAdjacentHTML('afterend', '<a href="#">link</a>');

/*5. У элемента с id "dropdownMenuButton"
замените id на "superDropdown".*/

const dropdownMenuButtonEl = document.getElementById('.dropdownMenuButton');
dropdownMenuButtonEl.id = 'superDropdown';

/*6. Добавьте атрибут data - dd со значением 3 элементу у которого существует атрибут "aria-labelledby"
равный "dropdownMenuButton"
используя dataset.*/

const attributeEl = document.querySelectorAll('[aria-labelledby="dropdownMenuButton"]');
attributeEl.dataset.dd = '3';

/*7. Удалите атрибут type у элемента с классом "dropdown-toggle".*/

const dropdownToggleEl = document.querySelectorAll('.dropdown-toggle');
dropdownToggleEl.removeAttribute('type');

//переменные можно было не создавать, но строчка длиннее была бы (особенно 6 задание)