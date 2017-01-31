import React, { Component } from 'react';
import { connect } from 'react-redux';
import { change, formValueSelector, reduxForm } from 'redux-form';
import { postUsername } from './../actions/postUsername';
import WelcomeView from './../components/WelcomeView';

class WelcomeViewContainer extends Component {
  render() {
    return(
      <WelcomeView
        username={this.props.username}
        team={this.props.team}
        postUsername={this.props.postUsername}
        _onTeamSelect={this.props._onTeamSelect}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    username: state.user.username,
    team: state.user.team
  };
}

export default connect(
  mapStateToProps,
  { postUsername }
)(WelcomeViewContainer)
