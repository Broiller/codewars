/*
You get any card as an argument. Your task is to return the suit of this card (in lowercase).

Our deck (is preloaded):

('3♣') -> return 'clubs'
('3♦') -> return 'diamonds'
('3♥') -> return 'hearts'
('3♠') -> return 'spades'
*/

function defineSuit(card) {
card.split("")
if(card[1] == "♣") {
 return 'clubs'
} if(card[1] == "♠") {
 return 'spades'
} if(card[1] == "♦") {
 return 'diamonds'
} if(card[1] == "♥") {
 return 'hearts'
  }
}
