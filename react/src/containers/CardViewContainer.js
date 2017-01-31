import React, { Component } from 'react';
import { connect } from 'react-redux';
import { change, formValueSelector, reduxForm } from 'redux-form';
import { revealCard } from './../actions/revealCard';
import CardsView from './../components/CardsView';

class CardViewContainer extends Component {
  render() {
    return(
      <div>
        <CardsView
          user={this.props.user}
          revealCard={this.props.revealCard}
        />
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    // username: state.user.username,
    // user: state.user,
    // team: state.user.team
  };
}

let mapDispatchToProps = (dispatch) => {
  return {
    revealCard: (id) => dispatch(revealCard(id))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardViewContainer);
