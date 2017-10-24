import React, {Component} from 'react'
import {render} from 'react-dom'

import Hand from '../../src'

class Demo extends Component {
  render() {
    return <div>
      <h1>6nimmt-hand Demo</h1>
      <Hand cards={this.getRandomCards()}/>
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

render(<Demo/>, document.querySelector('#demo'))
