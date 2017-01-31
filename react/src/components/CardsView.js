import React, { Component } from 'react';
import Card from './../components/Card';

class CardsView extends Component {
  constructor(props) {
    super(props);
    this.state = {
     cards: []
    };
  }

  componentWillMount() {
    this.pusher = new Pusher('a805a64f3dabd2cd9fae');
    this.players = this.pusher.subscribe('cards');
  }

  componentDidMount() {
    this.players.bind('card_update', function(player){
      this._getUpdatedCards();
    }, this);

    this._getUpdatedCards();
  }

  _getUpdatedCards() {
    var self = this;

    $.get(`/cards`).success(function(data) {
      self.setState({cards: data.cards})
    });
  }

  render() {
    let user = this.props.user;
    let revealCard = this.props.revealCard;

    let cardsList = (cards) => {
      return (
        cards.map(function(card){
          let classNames = "";

          if(user.role == "hinter" || card.revealed == true) {
            classNames += card.team;
            classNames += " ";
            classNames += card.revealed;
          }

          let revealThisCard

          return (
            <Card
              word={card.word}
              key={card.id}
              id={card.id}
              classNames={classNames}
              revealCard={revealCard}
            />
          )
        })
      )
    }

    return(
      <div>
        {cardsList(this.state.cards)}
      </div>
    );
  }
};

export default CardsView;
