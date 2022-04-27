import menu from '../menu.json'

const REFS = {
    menuGallery: document.querySelector('.js-menu')
}

function createMenuMarkupArr(dish) {
    const dishIngredients = dish.ingredients.map(ingredient => `<li class="tag-list__item">${ingredient}</li>`)

    return `<li class="menu__item">
                <article class="card">
                    <img src="${dish.image}" alt="${dish.name}" class="card__image" />
                    <div class="card__content">
                        <h2 class="card__name">${dish.name}</h2>
                        <p class="card__price"><i class="material-icons">monetization_on</i>${dish.price}</p>
                        <p class="card__descr">${dish.description}</p>
                    </div>
                    <ul class="tag-list">${dishIngredients.join('')}</ul>
                    <button class="card__button button">
                        <i class="material-icons button__icon">shopping_cart</i>
                        В корзину
                    </button>
                </article> 
            </li>`
}

const dishTest = menu.map(dish => createMenuMarkupArr(dish));
REFS.menuGallery.insertAdjacentHTML('beforeend', dishTest.join(''))