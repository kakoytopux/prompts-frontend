export default class Card {
  constructor(arrCards) {
    this._arrCards = arrCards;
  }
  _getTemplate() {
    return document.querySelector('#card').content.cloneNode(true);
  }
  _setElementData({ name, tech, price }) {
    this._element = this._getTemplate();
    this._element.querySelector('.cards__name').textContent = name;
    this._element.querySelector('.cards__technology').textContent = tech;
    this._element.querySelector('.cards__price').textContent = price;

    return this._element;
  }
  createCard() {
    this._arrCards.forEach(item => {
      this._setElementData(item);
    });
  }
}
