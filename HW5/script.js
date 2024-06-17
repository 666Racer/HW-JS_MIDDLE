/*Задание 1
1. Поиск в интернете (бесплатные api примеры).
2. Найти любые данные, на произвольную тему.
3. Создать файл data.js.
4. Создать переменную которая будет хранить данные из публичных api.*/

/*Задание 2
1. Создать файл index.html.
2. Подключить data.js.
3. Сформировать контент из данных(картинка, заголовок и параграф).
4. Добавить данный контент в вёрстку.
5. * Добавить стили при необходимости(по желанию).*/

const content = document.createElement('div');
content.setAttribute('class', 'content');
document.body.appendChild(content);
content.insertAdjacentHTML('afterbegin', `
<h1 class="desc">Персонаж из "Рика и Морти"</h1>`)

const parsedData = JSON.parse(data);
console.log(parsedData);
parsedData.forEach(item => {
    content.insertAdjacentHTML('beforeend', `
<div class="item">
<p class="item__message">Получение данных из data.js, куда скопирован JSON:</p>
<a href="https://rickandmortyapi.com/api/character/108"></a>
<img class="item__img" src=${item.image}>
<h2 class="item__name">${item.name}</h2>
<p class="item__status">Status: ${item.status}</p>
<p class="item__species">Species: ${item.species} </p>
<p class="item__type">Type: ${item.type}</p>
<p class="item__gender">Gender: ${item.gender}</p>
<br>
<br>
<br>
</div>`)
});


const url = "https://rickandmortyapi.com/api/character/106"; //здесь можно менять число
fetch(url)
    .then((response) => {
        return response.json()
    })
    .catch((error) => {
        console.log(error.message);
        console.log("Что-то пошло не так!");
    });

const getData = async(url) => {
    try {
        const res = await fetch(url);
        const jsonFromServer = await res.json();
        return jsonFromServer;
    } catch {
        console.log(error.message);
    }
};

const fetchedData = await getData(url);
console.log(fetchedData);

content.insertAdjacentHTML('beforeend', `
<div class="item">
<p class="item__message">Получение данных JSON с сервера</p>
<br>
<img class="item__img" src=${fetchedData.image}>
<h2 class="item__name">${fetchedData.name}</h2>
<p class="item__status">Status: ${fetchedData.status}</p>
<p class="item__species">Species: ${fetchedData.species} </p>
<p class="item__type">Type: ${fetchedData.type}</p>
<p class="item__gender">Gender: ${fetchedData.gender}</p>
</div>`);