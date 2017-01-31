import React, { Component } from 'react';

class Card extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var { revealCard, word, id, revealed, team, userRole } = this.props;

    let revealThisCard = () => {
      revealCard(id);
    }

    let cardClassNames = () => {
      let result = ""

      revealed === true ? result += `revealed ${team} ` : result += `hidden `
      userRole === "hinter" ? result += `${team} ` : ""

      return result;
    }

    return(
      <div className={`codename-tile ${cardClassNames()}`}>
        <div className="card" onClick={revealThisCard}>
          <span className="card-title">{this.props.word}</span>
        </div>
      </div>
    );
  }
};

export default Card;
