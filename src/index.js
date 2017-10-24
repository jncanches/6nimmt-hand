import React, {Component} from 'react'

import styles from './styles.scss';
import classnames from 'classnames';

import Card from '6nimmt-card'

export default class extends Component {
    constructor(props) {
        super(props);
        this.sortCards = this.sortCards.bind(this);
    }

  render() {
      let handClass = classnames('hand');

      const cardList = [].concat(this.props.cards)
          .sort((a, b) => a.faceValue > b.faceValue)
          .map((card, i) =>
              <div className="card-container" style={{'--card-z-index':card.zIndex}} key={i}>
                <Card faceValue={card.faceValue}></Card>
              </div>
      );

    return <div className={handClass}>
        {cardList}
        <div className="actions">
            <button onClick={this.sortCards} value='ltr'>Sort -&gt;</button>
            <br/>
            <button onClick={this.sortCards} value='ltr'>Sort &lt;-</button>
        </div>
    </div>
  }

  sortCards(a,b,c) {
        console.log(a,b,c);
    this.setState({cards: this.state.cards.sort(this.cardsComparator)});
  }

  cardsComparator(a, b) {
      if (a.faceValue < b.faceValue)
        return -1;
      if (a.faceValue > b.faceValue)
          return 1;
      return 0;
    }
}
