import Card from "./Card";
import AddCard from './AddCard';
import { arrCardsMarketplace } from '../utils/const';

const createCard = item => {
  const card = new Card('#card', item);
  
  return card.createCard();
}

const cardAdd = new AddCard('.cards', arrCardsMarketplace, { renderer: item => {
  cardAdd.addCard(createCard(item));
}});
cardAdd.setElementData();
