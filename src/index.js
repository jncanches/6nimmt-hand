import React, {Component} from 'react'

import styles from './styles.scss';
import classnames from 'classnames';

import Card from '6nimmt-card'

export default class extends Component {
    constructor(props) {
        super(props);

        var cards = this.getRandomCards();

        this.state = {
            cards: cards
        };
    }

  render() {
      let handClass = classnames('hand');

      const cardList = this.state.cards.map((card, i) =>
          <div className="card-container" style={{'--card-z-index':card.zIndex}} key={i}>
            <Card faceValue={card.faceValue}></Card>
          </div>
      );

    return <div className={handClass}>
        {cardList}
    </div>
  }

  getRandomCards() {
      var cards = [];
      for (var i=0; i<10; i++) {
        cards.push({faceValue: this.randomInt(1,104), zIndex: i});
      }
      return cards;
  }

  randomInt(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
  }
}
