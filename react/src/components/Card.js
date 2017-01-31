import React, { Component } from 'react';

class Card extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className={`codename-tile ${this.props.classNames}`}>
        <div className="card">
          <span className="card-title">{this.props.word}</span>
        </div>
      </div>
    );
  }
};

export default Card;
