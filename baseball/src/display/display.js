import React from "react";
import Dashboard from "../dashboard/dashboard";

class Display extends React.Component {
  state = {
    balls: 0,
    strikes: 0
  };

  handleBalls = event => {
    event.preventDefault();
    if(this.state.balls === 4) {
        this.setState({
            balls: 0,
            strikes: 0
          });
        } else {
          this.setState({
            balls: this.state.balls + 1
          });
        }
      };

  handleStrikes = event => {
    event.preventDefault();
    if (this.state.strikes === 3) {
      this.setState({
        balls: 0,
        strikes: 0
      });
    } else {
      this.setState({
        strikes: this.state.strikes + 1
      });
    }
  };

  handleHit = event => {
      event.preventDefault();
      this.setState({
          balls: 0,
          strikes: 0
      })
  }

  render() {
    return (
      <>
        <div data-testid="hello">Hello! Welcome to the Ball Park!</div>
        <div data-testid="balls-total">{this.state.balls}</div>
        <div data-testid="strike-total">Strikes: {this.state.strikes}</div>
        <Dashboard
          balls={this.state.balls}
          handleBalls={this.handleBalls}
          strikes={this.state.strikes}
          handleStrikes={this.handleStrikes}
          handleHit={this.handleHit}
        />
      </>
    );
  }
}

export default Display;
