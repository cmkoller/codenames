import React, { Component } from 'react';

class ResetButtons extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let username = this.props.user.username;

    return(
      <div className="center-align reset-button-section">
        <div className="reset-button">
          <a className="btn" onClick={ () => this.props.clearGame() }>
            Reset Game
          </a>
        </div>

        <div className="reset-button">
          <a className="btn" onClick={ () => this.props.leaveGame(username) }>
            Sign Out
          </a>
        </div>
      </div>
    );
  }
};

export default ResetButtons;
