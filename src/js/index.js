

const imagesPainel = document.querySelectorAll('.image');
const card1 = document.querySelector('#card-pro1');
const card2 = document.querySelector('#card-pro2');
const card3 = document.querySelector('#card-pro3');
const card4 = document.querySelector('#card-pro4');
const card = document.querySelectorAll('.card');
const modal = document.querySelector('#productsmodal');
const close = document.querySelector('#btn-close');
const painel = document.querySelector('.product-panel');
const imagesModal = document.querySelectorAll('.imagemodal');
const cardModal1 = document.querySelector('#card-modal1');
const cardModal2 = document.querySelector('#card-modal2');
const cardModal3 = document.querySelector('#card-modal3');
const cardModal4 = document.querySelector('#card-modal4');
const cardModal = document.querySelectorAll('.card-modal');
const btnNext = document.querySelector('.btn-avancar');
const btnPrevious = document.querySelector('.btn-voltar');
let nuImage = 0;
const imageCard = document.querySelectorAll('.element');
const btnPlus = document.querySelector('#btnplus');
const btnMinus = document.querySelector('#btnminus');
const painelQtd = document.querySelector('.qtd-painel');
const imageCardModal = document.querySelectorAll('.elementModal');
let qtdProduct = 0;


function showImage(imagemAtual, element) {
    element.forEach(element => {
        element.classList.remove('mostrar');
    })

    element[imagemAtual].classList.add('mostrar');


}

function checkoutteste(elements, elementclick, nameClass) {
    elementclick.forEach((elementclick, index) => {
        // element.classList.remove(nameClass);
        elementclick.addEventListener('click', function () {
            elements.forEach(element => {
                element.classList.remove(nameClass);
            })
            elements[index].classList.add(nameClass);

        })
        console.log(elementclick);

    })

}

console.log(imagesPainel);
console.log(card);
function checkout(imagemAtual, element, nameClass) {
    element.forEach(element => {

        element.classList.remove(nameClass);
    })

    element[imagemAtual].classList.add(nameClass);


}




function toggleClass(operacao, nomeClass, elementoDiv) {
    if (operacao === 'remove') {
        elementoDiv.classList.remove(nomeClass);
    } else if (operacao === 'add') {
        elementoDiv.classList.add(nomeClass);
    } else {
        console.log(`${operacao} Operação Invalidação`);
    }

}

checkoutteste(imagesPainel, card, 'mostrar');

// card1.addEventListener('click', function () {
//     showImage(1, imagesPainel);
//     checkout(0, imageCard, 'checkout');
//     checkout(0, card, 'pro')

// })
// card2.addEventListener('click', function () {
//     showImage(2, imagesPainel);
//     checkout(1, imageCard, 'checkout');
//     checkout(1, card, 'pro')

// })
// card3.addEventListener('click', function () {
//     showImage(3, imagesPainel);
//     checkout(2, imageCard, 'checkout');
//     checkout(2, card, 'pro')

// })
// card4.addEventListener('click', function () {
//     showImage(4, imagesPainel);
//     checkout(3, imageCard, 'checkout');
//     checkout(3, card, 'pro')

// })



cardModal1.addEventListener('click', function () {

    showImage(0, imagesModal);
    nuImage = 0;
    checkout(0, imageCardModal, 'checkout');
    checkout(0, cardModal, 'pro');

})
cardModal2.addEventListener('click', function () {
    showImage(1, imagesModal);
    nuImage = 1;
    checkout(1, imageCardModal, 'checkout');
    checkout(1, cardModal, 'pro')
})
cardModal3.addEventListener('click', function () {
    showImage(2, imagesModal);
    nuImage = 2;
    checkout(2, imageCardModal, 'checkout');
    checkout(2, cardModal, 'pro');
})
cardModal4.addEventListener('click', function () {
    showImage(3, imagesModal);
    nuImage = 3;
    checkout(3, imageCardModal, 'checkout');
    checkout(3, cardModal, 'pro');
})


// () => toggleClass('remove', 'mostrar', modal)
close.addEventListener('click', () => toggleClass('remove', 'mostrar', modal))

painel.addEventListener('click', function () {
    toggleClass('add', 'mostrar', modal);
    nuImage = 0;
    showImage(nuImage, imagesModal);
})


btnNext.addEventListener('click', function () {

    if (nuImage === imagesModal.length - 1) {
        return;
    } else {
        nuImage++;
        showImage(nuImage, imagesModal);
    }

})

btnPrevious.addEventListener('click', function () {
    if (nuImage === 0) {
        return;
    } else {
        nuImage--;
        showImage(nuImage, imagesModal);
    }

});

//qtd Produtos

btnPlus.addEventListener('click', function () {
    qtdProduct++;
    painelQtd.textContent = qtdProduct;

})
btnMinus.addEventListener('click', function () {
    if (qtdProduct <= 0) {

        return;
    }
    qtdProduct--;
    painelQtd.textContent = qtdProduct;


})












