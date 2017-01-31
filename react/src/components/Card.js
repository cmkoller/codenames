import React, { Component } from 'react';

class Card extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let revealThisCard = () => {
      this.props.revealCard(this.props.id);
    }

    return(
      <div className={`codename-tile ${this.props.classNames}`}>
        <div className="card" onClick={revealThisCard}>
          <span className="card-title">{this.props.word}</span>
        </div>
      </div>
    );
  }
};

export default Card;
