//Добавление элементов в localStorage по клику на "Add to Cart"
const addBoxEls = document.querySelectorAll('.add__box');
addBoxEls.forEach(addBoxEl => {
    addBoxEl.addEventListener('click', (e) => {
        const productToAdd = {
            title: addBoxEl.parentElement.parentElement.querySelector('.card__name').textContent,
            imgSrc: addBoxEl.parentElement.parentElement.querySelector('.card__img').src,
            price: Number(addBoxEl.parentElement.parentElement.querySelector('.card__price').textContent.slice(1)),
        }
        const nameOfItemToAdd = `productInCard${localStorage.length + 1}`;
        localStorage.setItem(nameOfItemToAdd, JSON.stringify(productToAdd));
    });
});

//Добавление элементов из localStorage в корзину на странице Shopping Card
const productsInCard = document.querySelector('.shopping__box');
for (let i = 0; i < localStorage.length; i++) {
    productsInCard.insertAdjacentHTML('beforeend', `
        <div class="shopping__item shopping__grid">
            <div class="grid__left">
                <a class="shopping__link" href="Single_page.html">
                    <img class="shopping__img" src=${JSON.parse(localStorage.getItem(localStorage.key(i))).imgSrc} alt="sc item">
                </a>
                    <div class="grid__description">
                        <p class="description__name">${JSON.parse(localStorage.getItem(localStorage.key(i))).title}</p>
                        <p class="description__details">
                                Color: <span class="description__details--lighter">Red</span>
                            </p>
                            <p class="description__details">
                                Size: <span class="description__details--lighter">Xll</span>
                            </p>
                     </div>
                        </div>
                        <p class="shopping__info">${JSON.parse(localStorage.getItem(localStorage.key(i))).price}</span>
                        <p class="shopping__info">2</p>
                        <p class="shopping__info">FREE</span>
                        <p class="shopping__info">$${JSON.parse(localStorage.getItem(localStorage.key(i))).price}</span>
                        <a class="shopping__cancel"><img class="shopping__info"><img src="img/cancel.png"
                                alt="cancel"></img></a>
            </div>`);
}

//Добавление элементов из localStorage в корзину в мини-окне (появляется при наведении на значок корзины на странице Shopping Cart)
const basketBoxEl = document.querySelector('.basket-box');
const productsinCartMini = basketBoxEl.querySelector('.purchase');
for (let i = 0; i < localStorage.length; i++) {
    productsinCartMini.insertAdjacentHTML('afterbegin', `
<a href="Single_page.html">
<div class="purchase__product">
    <div class="purchase__productImg"><img class="purchase__photo"src=${JSON.parse(localStorage.getItem(localStorage.key(i))).imgSrc} alt="purchase photo"></div>
    <div class="purchase__info">
        <p class="purchase__name">${JSON.parse(localStorage.getItem(localStorage.key(i))).title}</p>
        <img src="img/stars_rate.png" alt="stars rate">
        <p class="quantity-info">1 <span
                class="quantity-info__x">x</span>
                $${JSON.parse(localStorage.getItem(localStorage.key(i))).price}</p>
    </div>
</div>
</a>`);
}

//Подсчет суммы покупок в тотале в мини-окне и на таблице на странице Shopping Cart
let totalAmountValue = 0;
for (let i = 0; i < localStorage.length; i++) {
    totalAmountValue += JSON.parse(localStorage.getItem(localStorage.key(i))).price;
}
const grandTotalVal = document.querySelector('.shopping__information');
grandTotalVal.textContent = `$${totalAmountValue}`;
const totalSumMiniCart = document.querySelector('.total-sum');
totalSumMiniCart.textContent = `$${totalAmountValue}`;

//\Удаление товара из localStorage и из корзины по нажатию на крестик
const removeIconEls = document.querySelectorAll('.shopping__cancel');
removeIconEls.forEach(removeIcon => {
    removeIcon.addEventListener('click', (e) => {
        for (let i = 0; i < localStorage.length; i++) {
            if (JSON.parse(localStorage.getItem(localStorage.key(i))).imgSrc === e.target.parentElement.parentElement.querySelector('.shopping__img').src) {
                localStorage.removeItem(localStorage.key(i));
                productsInCard.remove(e.currentTarget.parentElement);
                location.reload();
            }

        }
    });
});