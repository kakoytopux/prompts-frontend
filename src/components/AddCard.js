export default class AddCard {
  constructor(container, arrCards, { renderer }) {
    this._container = document.querySelector(container);
    this._arrCards = arrCards;
    this._renderer = renderer;
  }
  setElementData() {
    this._arrCards.forEach(item => {
      this._renderer(item);
    });
  }
  addCard(item) {
    this._container.append(item);
  }
}