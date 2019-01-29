import React from 'react';
import Dashboard from '../dashboard/dashboard';

class Display extends React.Component {
    state = {
        balls: 0,
        strikes: 0
    }

    handleBalls = event => {
        event.preventDefault();
        console.log('hello')
        this.setState({ 
            balls: this.state.balls + 1
        })
        
    }

    

    render() {
        return (
            <>
            <Dashboard
            balls={this.state.balls}
            handleBalls={this.handleBalls} />
            <div data-testid="hello">Hello</div>
            <div data-testid="balls-total">{this.state.balls}</div>
            </>
        )
    }
}

export default Display;