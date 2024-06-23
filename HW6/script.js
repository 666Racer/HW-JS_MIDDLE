const url1 = "data.json";

async function fetchData(url) {
    try {
        const responce = await fetch(url);
        const data = await responce.json();
        return data;
    } catch (error) {
        console.log(error.message);
    }
}

document.addEventListener("DOMContentLoaded", async() => {
    const data = await fetchData(url1);

    const secondGridEl = document.querySelector('.second__grid__content')

    data.forEach(el => {

        secondGridEl.insertAdjacentHTML("beforeend", `
            <div class="second__grid__content__item">
                <a href="Single_page.html">
                    <img class="card__img" src="${el.img}" alt="${el.alt}">
                    <p class="card__name ">${el.title}</p>
                    <p class="card__price">${el.price}</span></p>
                </a>
                <div class="add__box ">
                    <a href="Shopping_card.html" class="add__link ">
                        <img src="img/hover_basket_img.png" alt="hover_basket_img.png"/>
                        <p class="add__text ">Add to Cart</p>
                    </a>
                </div>
            </div>
            `)

    })
});