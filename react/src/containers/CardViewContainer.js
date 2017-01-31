import React, { Component } from 'react';
import { connect } from 'react-redux';
import { change, formValueSelector, reduxForm } from 'redux-form';
import CardsView from './../components/CardsView';

class CardViewContainer extends Component {
  render() {
    return(
      <div>
        <CardsView user={this.props.user} />
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
    // postUsername: (username) => dispatch(postUsername(username)),
    // postTeamRole: (username, team, role) => dispatch(postTeamRole(username, team, role)),
    // startGame: () => dispatch(startGame())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardViewContainer);
