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

//selettore elementi div.item
const divItems = document.getElementsByClassName("item");

//asseganzione classe .active al primo elemento generato (default)
let activeItem = 0;
divItems[activeItem].classList.add("active");

//selettore "bottone" arrow-down
const next = document.getElementById("arrow-down")

//creazione evento "foto successiva" su click di arrow-down
next.addEventListener("click",
    function () {

        //condizione per verificare se siamo alla fine della lista
        if (activeItem < imgArray.length - 1){

        //togliere .active alla foto precedente
        divItems[activeItem].classList.remove("active");
        
        //incremento valore di activeItem per passare alla foto successiva
        activeItem++;

        //aggiungere la classe active alla nuova foto
        divItems[activeItem].classList.add("active");

        } else {  //altrimenti
            //togliere .active alla foto precedente
            divItems[activeItem].classList.remove("active");

            //resetta activeItem alla prima foto in lista
            activeItem = 0;

            //aggiungere .active alla nuova foto
            divItems[activeItem].classList.add("active");
        }

    } 
);

//selettore "bottone" arrow-up
const previous = document.getElementById("arrow-up");

//creazione evento "foto precedente" su click di arrow-up
previous.addEventListener("click",
    function () {

        //condizione per verificare se siamo all'inizio della lista
        if (activeItem != 0){

        //togliere .active alla foto precedente
        divItems[activeItem].classList.remove("active");
        
        //incremento valore di activeItem per passare alla foto successiva
        activeItem--;

        //aggiungere la classe active anche alla nuova foto
        divItems[activeItem].classList.add("active");

        } 
        
        else {  //altrimenti
            //togliere .active alla foto precedente
            divItems[activeItem].classList.remove("active");

            //resetta activeItem all'ultima foto in lista
            activeItem = imgArray.length - 1;

            //aggiungere .active alla nuova foto
            divItems[activeItem].classList.add("active");
        }
    }
);
