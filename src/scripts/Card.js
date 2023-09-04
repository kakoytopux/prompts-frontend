export default class Card {
  constructor(template, data) {
    this._template = template;
    this._name = data.name;
    this._tech = data.tech;
    this._price = data.price;
  }
  _getTemplate() {
    const template = document.querySelector(this._template).content.cloneNode(true);
    return template.querySelector('.cards__card');
  }
  createCard() {
    this._element = this._getTemplate();
    this._element.querySelector('.cards__name').textContent = this._name;
    this._element.querySelector('.cards__technology').textContent = this._tech;
    this._element.querySelector('.cards__price').textContent = this._price;

    return this._element;
  }
}
