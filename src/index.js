import React, {Component} from 'react'

import styles from './styles.scss';
import classnames from 'classnames';

import Card from '6nimmt-card'

export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: this.props.cards,
        };
    }

  render() {
        console.log("render");
      console.log(this.state.cards);
      let handClass = classnames('hand');

      const cardList = [].concat(this.state.cards)
          .map((card, i) =>
              <div className="card-container" style={{'--card-z-index':i}} key={i}>
                  <Card faceValue={card}></Card>
              </div>
          );

    return <div className={handClass}>
        {cardList}
        <div className="actions">
            <button onClick={this.sortCards.bind(this, 'faceValue')} value='ltr'>Face value -&gt;</button>
            <br/>
            <button onClick={this.sortCards.bind(this, 'faceValue')} value='rtl'>Face value &lt;-</button>
            <br/>
            <button onClick={this.sortCards.bind(this, 'weight')} value='ltr'>Weight -&gt;</button>
            <br/>
            <button onClick={this.sortCards.bind(this, 'weight')} value='rtl'>Weight &lt;-</button>
        </div>
    </div>
  }

  sortCards(sortBy, e) {
      var reverse = e.target.value === "rtl";
      const cards = [...this.state.cards];
      cards.sort((a,b) => (a - b) * (reverse?-1:1));
      this.setState({cards: cards});
  }
}
