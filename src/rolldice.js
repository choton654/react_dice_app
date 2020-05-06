import React, { Component } from 'react';
import Dice from './dice';
import "./Rolldice.css";
class RollDice extends Component {
  static defaultProps = {
    sides: ['one', 'two', 'three', 'four', 'five', 'six']
  };
  constructor(props) {
    super(props);
    this.state = { dice1: 'one', dice2: 'two', rolling: false };
    this.roll = this.roll.bind(this);
  }

  roll() {
    const rollDice1 = this.props.sides[Math.floor(Math.random() * 6)];
    const rollDice2 = this.props.sides[Math.floor(Math.random() * 6)];
    this.setState({ dice1: rollDice1, dice2: rollDice2, rolling: true });
    setTimeout(() => {
      this.setState({ rolling: false });
    }, 1000);
  }

 

  render() {
    return (
      <div className="RollDice">
        <div>
          <Dice face={this.state.dice1} rolling={this.state.rolling} />
          <Dice face={this.state.dice2} rolling={this.state.rolling} />
        </div>
        {this.state.dice1 === this.state.dice2 && (
          <h1>Winner</h1>
        )}
        <button onClick={this.roll} disabled={this.state.rolling}>
          {this.state.rolling ? 'Rolling...!' : 'Roll Dice'}
        </button>
      </div>
    );
  }
}

export default RollDice;