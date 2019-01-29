import React from 'react';

class Dashboard extends React.Component {

    render() {
        return (
            <>
            <button data-testid="balls-button" onClick={this.props.handleBalls}>Balls</button>
            <button data-testid="strike-button" onClick={this.props.handleStrikes}>Strikes</button>
            <button data-testid="hit-button" onClick={this.props.handleHit}>Hit!</button>
            </>
        )
    }
}

export default Dashboard;