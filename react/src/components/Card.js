import React, { Component } from 'react';

class Card extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var { revealCard, word, id, revealed, team, userRole, assassin } = this.props;

    let revealThisCard = () => {
      revealCard(id);
    }

    let cardClassNames = () => {
      let result = "";
      let hinter = (userRole === "hinter");
      let cardVisible = (hinter || revealed);

      cardVisible ? result += `${team} ` : ""
      revealed ? result += `revealed ` : result += `hidden `
      assassin && cardVisible ? result += `assassin ` : ""

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
