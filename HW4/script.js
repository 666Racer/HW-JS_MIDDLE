/*1. При изменении значения в input с id="from", значение содержащееся в нем должно моментально отображаться в span. То есть при печати в input'е тег span также должен меняться.*/

const inputText = document.querySelector('#from');
const spanText = document.querySelector('span');
inputText.addEventListener('input', () => {
    spanText.textContent = inputText.value;
});

/*2. При клике на кнопку с классом messageBtn необходимо элементу с классом message:
    -добавить два класса: animate_animated и animate_fadeInLeftBig -
    поставить данному элементу стиль visibility в значение 'visible'.*/

const messageBtnEl = document.querySelector('.messageBtn');
messageBtnEl.addEventListener('click', () => {
    messageBtnEl.classList.add('animate_animated', 'animate_fadeInLeftBig');
    messageBtnEl.style.visibility = 'visible';
});

/*3. Необходимо при отправке формы проверить, заполнены ли все поля в этой форме. Если какое-либо поле не заполнено, форма не должна отправляться, также должны быть подсвечены незаполненные поля (необходимо поставить класс error незаполненным полям). Как только пользователь начинает заполнять какое-либо поле, необходимо, при вводе в данное поле, произвести проверку:
- Если поле пустое, необходимо данное поле подсветить (поставить класс error данному полю).
- Если поле было чем-либо заполнено, подсветку (класс error) необходимо убрать.*/

const inputEls = document.querySelectorAll('.form-control');
const formEl = document.querySelector('form');

formEl.addEventListener('submit', event => { //проверка на отправку пустой формы
    inputEls.forEach(formControlEl => {
        if (formControlEl.value === '') {
            formControlEl.classList.add('error');
            event.preventDefault();
        }
    });
});

formEl.addEventListener('input', event => { //проверка на пустой ввод
    if (!event.target.classList.contains('form-control')) {
        return;
    }
    event.target.value === '' ?
        event.target.classList.add('error') :
        event.target.classList.remove('error');
});