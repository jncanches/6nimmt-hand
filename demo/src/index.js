import React, {Component} from 'react'
import {render} from 'react-dom'

import Hand from '../../src'

class Demo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: this.getRandomCards()
        };
//        this.sortCards = this.sortCards.bind(this);
    }

    render() {
        return <div>
          <h1>6nimmt-hand Demo</h1>
          <Hand cards={this.state.cards}/>
        </div>
    }

    getRandomCards() {
        var cards = [];
        for (var i=0; i<10; i++) {
            cards.push(this.randomInt(1,104));
        }
        return cards;
    }

    randomInt(min,max) {
        return Math.floor(Math.random()*(max-min+1)+min);
    }
}

render(<Demo/>, document.querySelector('#demo'))
