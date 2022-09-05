// Paineis Variavel//
const paineis = document.querySelectorAll('.image')
// cards Abaixo//
const cards = document.querySelectorAll('.card')
let index = 0

// Função para exibição//
function show(elementsClick, elements, className) {
  elementsClick.forEach((elementsClick, index) => {
    elementsClick.addEventListener('click', function () {
      elements.forEach(element => {
        element.classList.remove(className)
      })
      elements[index].classList.add(className)
      this.index = index
    })
  })
}

function searchByIndex(index, elements, className) {
  elements.forEach(element => {
    element.classList.remove(className)
  })
  elements[index].classList.add(className)
  this.index = index
  console.log(index)
}

//mostra imagem apartir dos cards
show(cards, paineis, 'mostrar')

// selcionar bordas no card faz aparecer
show(cards, cards, 'pro')
//deixa o elemento com opacity na imagem
const elements = document.querySelectorAll('.element')
show(cards, elements, 'checkout')

//Modal

//abrir e fechar o modal
const painel = document.querySelector('.product-panel')
const modal = document.querySelector('.product-modal')
const btnClose = document.querySelector('.close')
//abrir modal
painel.addEventListener('click', function () {
  modal.classList.add('mostrar')
  // show(cards, imagesModal, 'mostrar');
  searchByIndex(0, imagesModal, 'mostrar')
})

//fechar modal
btnClose.addEventListener('click', function () {
  modal.classList.remove('mostrar')
})
//mostra imagem do modal apartir dos cards
const imagesModal = document.querySelectorAll('.imagemodal')
const cardsModal = document.querySelectorAll('.card-modal')

//mostra a imagem apartir do click do cardModal
show(cardsModal, imagesModal, 'mostrar')
//bordas do cardModal
show(cardsModal, cardsModal, 'pro')

//opacity na imagem selecionada do Modal
const elementsModal = document.querySelectorAll('.elementModal')
show(cardsModal, elementsModal, 'checkout')

const btnPrevious = document.querySelector('#btn-voltar')
const btnNext = document.querySelector('#btn-avancar')
btnNext.addEventListener('click', function () {
  if (index === imagesModal.length - 1) {
    return
  } else {
    index++
    searchByIndex(index, imagesModal, 'mostrar')
    searchByIndex(index, cardsModal, 'pro')
    searchByIndex(index, elementsModal, 'checkout')
  }
})
btnPrevious.addEventListener('click', function () {
  if (index <= 0) {
    return
  } else {
    index--
    searchByIndex(index, imagesModal, 'mostrar')
    searchByIndex(index, cardsModal, 'pro')
    searchByIndex(index, elementsModal, 'checkout')
  }
})

const btnPlus = document.querySelector('#btnplus')
const btnMinus = document.querySelector('#btnminus')
let qtdPainel = document.querySelector('.qtd-painel')
let qtdProduct = 0

btnPlus.addEventListener('click', function () {
  qtdProduct++
  qtdPainel.textContent = qtdProduct
})

btnMinus.addEventListener('click', function () {
  if (qtdProduct === 0) {
    return
  }
  qtdProduct--
  qtdPainel.textContent = qtdProduct
})

/* codigo para comprar hardcode */
const btnCart = document.querySelector('#btncart')
const labelqtd = document.querySelector('.qtd')
const qtdCart = document.querySelector('.qtd')
const cartContent = document.querySelector('.cart-content')
const textEmpty = document.querySelector('.text-empty')
const priceCart = document.querySelector('#price')
const valueCart = document.querySelector('#value')
let resultado = 0

btnCart.addEventListener('click', function () {
  if (qtdProduct > 0) {
    labelqtd.textContent = qtdProduct
    qtdCart.classList.add('qtdexibir')
    cartContent.classList.add('produto')
    textEmpty.classList.remove('empty')

    // valor
    resultado = qtdProduct * 125
    priceCart.textContent = `$125.00 x ${qtdProduct}`
    valueCart.textContent = '$ ' + resultado + '.00'
  } else {
    qtdCart.classList.remove('qtdexibir')
    cartContent.classList.remove('produto')
    textEmpty.classList.add('empty')
  }
})

const btnIconCart = document.querySelector('.icon-cart')
const popupCart = document.querySelector('.cart')

btnIconCart.addEventListener('click', function () {
  if (!popupCart.classList.contains('exibir')) {
    popupCart.classList.add('exibir')
  } else {
    popupCart.classList.remove('exibir')
  }
})

const del = document.querySelector('.del')

del.addEventListener('click', function () {
  cartContent.classList.remove('produto')
  qtdCart.classList.remove('qtdexibir')
  textEmpty.classList.add('empty')
})
