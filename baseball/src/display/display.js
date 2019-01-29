import React from "react";
import Dashboard from "../dashboard/dashboard";

class Display extends React.Component {
  state = {
    balls: 0,
    strikes: 0,
    foul: 0,
    total: 0,
    outs: 0
  };

  handleBalls = event => {
    event.preventDefault();
    if (this.state.balls === 3 || this.state.total === 5) {
      this.setState({
        balls: 0,
        strikes: 0,
        foul: 0,
        total: 0,
      });
    } else {
      this.setState({
        balls: this.state.balls + 1,
        total: this.state.total + 1
      });
    }
  };

  handleStrikes = event => {
    event.preventDefault();
    if (this.state.strikes === 2 || this.state.total === 5) {
      this.setState({
        balls: 0,
        strikes: 0,
        foul: 0,
        total: 0,
        outs: this.state.outs + 1
      });
    } else {
      this.setState({
        strikes: this.state.strikes + 1,
        total: this.state.total + 1
      });
    }
  };

  handleHit = event => {
    event.preventDefault();
    this.setState({
      balls: 0,
      strikes: 0,
      foul: 0,
      total: 0
    });
  };

  handleFoul = event => {
    event.preventDefault();
    if (this.state.strikes === 2) {
      this.setState({
        balls: 0,
        strikes: 0,
        foul: 0,
        total: 0,
        outs: this.state.outs + 1
      });
    } else {
      this.setState({
        foul: this.state.foul + 1
      });
    }
  };

  render() {
    return (
      <>
        <div data-testid="hello">Hello! Welcome to the Ball Park!</div>
        <div data-testid="balls-total">Balls: {this.state.balls}</div>
        <div data-testid="strike-total">Strikes: {this.state.strikes}</div>
        <div data-testid="foul-total">Fouls: {this.state.foul}</div>
        <Dashboard
          balls={this.state.balls}
          handleBalls={this.handleBalls}
          strikes={this.state.strikes}
          handleStrikes={this.handleStrikes}
          handleHit={this.handleHit}
          handleFoul={this.handleFoul}
        />
      </>
    );
  }
}

export default Display;
