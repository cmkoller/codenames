import React, { Component } from 'react';

class ResetButtons extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="center-align">
        <hr />

        <div>
          <a className="btn" onClick={ () => this.props.clearGame() }>
            WIPE THAT GAME!
          </a>
        </div>

        <br />

        <div>
          <a className="btn" onClick={ () => {sessionStorage.clear(); location.reload();} }>
            Clear Session
          </a>
        </div>
      </div>
    );
  }
};

export default ResetButtons;
