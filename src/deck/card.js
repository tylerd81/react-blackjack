class Card {
  constructor(suit, value) {
    this.suit = suit;
    this.value = value;
  }

  toImageString() {

    console.log(`Suit: ${this.suit} Value: ${this.value}`);
    // 2 to 9
    if(this.value > 1 && this.value <= 10) {
      return `${this.value}${this.suit.charAt(0).toUpperCase()}.png`;
    }

    // Aces
    if(this.value === 1) {
      return `A${this.suit.charAt(0).toUpperCase()}.png`;
    }

    // Face cards
    let face ='';
    if(this.value === 11) {
      face = 'J';
    }else if(this.value === 12) {
      face = 'Q';
    }else if(this.value === 13) {
      face = 'K';
    }else{
      console.log('default happened ' + this.value)
    }
    return `${face}${this.suit.charAt(0).toUpperCase()}.png`;
  }

}

Card.suits = {
  hearts: 'hearts',
  clubs: 'clubs',
  diamonds : 'diamonds',
  spades : 'spades'
};

export default Card;

// module.exports = Card;