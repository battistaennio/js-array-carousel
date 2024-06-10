//inseriamo tutte le immagini dinamicamente servendoci dell’array fornito e un semplice ciclo for che concatena un template literal. Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile. Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.

//creazione array carosello
const imgArray = ["img/01.webp", "img/02.webp", "img/03.webp", "img/04.webp", "img/05.webp"];

//selettore container
const itemsContainer = document.querySelector(".items-container");

//creazione ciclo
for (let i = 0; i < imgArray.length ; i++) {

    //creazione div.item con all'interno le img dell'array
    let itemContent = `
            <div class="item">
                <img src="${imgArray[i]}">
            </div>`;
    
    //inserimento div.item nel div.items-container
    itemsContainer.innerHTML += itemContent;

}