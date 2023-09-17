import Card from "../components/Card";
import AddCard from '../components/AddCard';
import {
  arrCardsMarketplace,
  burgerMenu,
  socialLists,
  navigation,
  menu,
  cross,
} from '../utils/const';


const createCard = item => {
  const card = new Card('#card', item);
  
  return card.createCard();
}

const cardAdd = new AddCard('.cards', arrCardsMarketplace, { renderer: item => {
  cardAdd.addCard(createCard(item));
}});
cardAdd.setElementData();


const closeEscBurgerMenu = evt => {
  if(evt.key === 'Escape') {
    closeBurgerMenu();
  }
}

const openBurgerMenu = () => {
  menu.classList.remove('hidden');
  socialLists.classList.add('visible-burger-menu');
  navigation.classList.add('visible-burger-menu');
  document.addEventListener('keydown', closeEscBurgerMenu);
}

const closeBurgerMenu = () => {
  menu.classList.add('hidden');
  socialLists.classList.remove('visible-burger-menu');
  navigation.classList.remove('visible-burger-menu');
  document.removeEventListener('keydown', closeEscBurgerMenu);
}


burgerMenu.addEventListener('click', openBurgerMenu);
cross.addEventListener('click', closeBurgerMenu);
