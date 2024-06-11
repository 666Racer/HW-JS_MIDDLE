/*1. Необходимо вывести сообщение в консоль "все теги прогрузились", когда все теги будут созданы браузером.*/

document.addEventListener("DOMContentLoaded", () => {
    console.log("все теги прогрузились");
});

/*2. Необходимо вывести сообщение в консоль "страница загрузилась", когда все ресурсы страницы будут загружены.*/

window.onload = () => {
    console.log('Страница загрузилась');
}

/*3. При клике на какой - либо тег на странице в консоль должно выводиться сообщение наподобие:
-Класс "super_element"присутствует в элементе "div".
- сообщение должно определять присутствует или отсутствует класс "super_element"
у элемента, а также выводить в нижнем регистре верный тег в данной строке, по которому был совершен клик.
- Необходимо использовать делегирование.*/

document.addEventListener('click', event => {
    const checkSuperElement = event.target.classList.contains('super_element') ?
        'присутствует' : 'отсутствует';
    console.log(`
    Класс "super_element" ${checkSuperElement} в элементе 
    "${event.target.tagName.toLowerCase()}".`);
});

/*4. Сделайте, чтобы при наведении на textarea в консоли появлялось сообщение: "Вы навели на textarea."*/

// const textArea = document.querySelector('textarea');
// textArea.addEventListener = ('mouseover', () =>
//     console.log('Вы навели на textarea.')
// );

document.querySelector('textarea').addEventListener('mouseover', () =>
    console.log("Вы навели на textarea.")); // почему код выше с пемременной не работает?!

/*5. Необходимо повесить событие клика на тег ul.В обработчике события в консоль необходимо выводить текст, который записан внутри элемента кнопки, по которой был произведен клик.Если клик был не по кнопке, то ничего выводить не нужно.Необходимо использовать делегирование.*/

const ulEl = document.querySelector('ul');
ulEl.addEventListener('click', event => {
    if (event.target.tagName !== "BUTTON") {
        return;
    }
    console.log(event.target.textContent);
}); //почему не работает с (event.target.classList.contains('button')) ?

/*6. Вопрос: Почему в console.log пишется сначала текст из 5 задания и только потом выводится текст из 3 задания, если мы кликаем по кнопкам в ul ? Ответ необходимо написать здесь же, под этим комментарием, своими словами.*/

/*Cобытия по умолчанию (в 5 задании это button) выполняют обработчики в фазе всплытия.
При клике на кнопку button событие начинает идти от document до button. У button есть свой обработчик - поэтому выполняется сначала он, затем уже выполняется предыдущий обработчик (событие не по умолчанию)*/

/*7. С помощью JS необходимо изменить цвет заднего фона каждого второго тега li.*/

const evenLiEls = document.querySelectorAll('li:nth-child(2n)');
evenLiEls.forEach(element => element.style.backgroundColor = 'darkblue');