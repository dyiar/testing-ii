import React from 'react';

class Dashboard extends React.Component {

    render() {
        return (
            <>
            <button data-testid="balls-button" onClick={this.props.handleBalls}>Balls</button>
            </>
        )
    }
}

export default Dashboard;