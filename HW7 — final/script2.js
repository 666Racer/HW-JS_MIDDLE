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

const basketBoxEl = document.querySelector('.basket-box');

//Подсчет суммы покупок в тотале в мини-окне и на таблице на странице Shopping Cart
let totalAmountValue = 0;
for (let i = 0; i < localStorage.length; i++) {
    totalAmountValue += JSON.parse(localStorage.getItem(localStorage.key(i))).price;
}
const grandTotalVal = document.querySelector('.shopping__information');
grandTotalVal.textContent = `$${totalAmountValue}`;
const totalSumMiniCart = document.querySelector('.total-sum');
totalSumMiniCart.textContent = `$${totalAmountValue}`;