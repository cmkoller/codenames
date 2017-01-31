import React, { Component } from 'react';
import { connect } from 'react-redux';
import { change, formValueSelector, reduxForm } from 'redux-form';
import { loadUserData } from './../actions/loadUserData';
import { postUsername } from './../actions/postUsername';
import { postTeamRole } from './../actions/postTeamRole';
import { startGame, loadStartedGame } from './../actions/startGame';
import WelcomeView from './../components/WelcomeView';
import GamePlayContainer from './../containers/GamePlayContainer';
import TeamView from './../components/TeamView';
import ChatView from './../components/ChatView';

class MainContainer extends Component {
  componentDidMount() {
    let username = sessionStorage.username;
    let team = sessionStorage.team;
    let role = sessionStorage.role;
    let ready = sessionStorage.ready;
    ready === "true" ? ready = true : ready = false
    let gameStarted = sessionStorage.gameStarted;
    gameStarted === "true" ? gameStarted = true : gameStarted = false

    this.props.loadUserData({username: username, team: team, role: role, ready: ready});

    if(gameStarted) {
      this.props.loadStartedGame();
    }
  }

  render() {
    let mainArea;

    if(this.props.gameStarted) {
      mainArea = <GamePlayContainer
        user={this.props.user}
        team={this.props.team}
      />
    } else {
      mainArea = <WelcomeView
        user={this.props.user}
        team={this.props.team}
        postUsername={this.props.postUsername}
        postTeamRole={this.props.postTeamRole}
        startGame={this.props.startGame}
      />
    }

    return(
      <div className="row">
        <div className="col m3">
          <div className="card red">
            <TeamView
              displayedTeam="red"
              user={this.props.user}
              postTeamRole={this.props.postTeamRole}
            />
          </div>
        </div>

        <div className="col m6">
          {mainArea}
        </div>

        <div className="col m3">
          <div className="card blue">
            <TeamView
              displayedTeam="blue"
              user={this.props.user}
              postTeamRole={this.props.postTeamRole}
            />
          </div>
        </div>

        <div className="col s12">
          <ChatView username={this.props.username} />
        </div>

        <div className="col s12">
          <div className="center-align">
            <a className="btn" onClick={ () => {sessionStorage.clear();} }>
              Clear Session
            </a>
          </div>
        </div>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    username: state.user.username,
    user: state.user,
    team: state.user.team,
    gameStarted: state.game.gameStarted
  };
}

let mapDispatchToProps = (dispatch) => {
  return {
    loadUserData: (username) => dispatch(loadUserData(username)),
    loadStartedGame: () => dispatch(loadStartedGame()),
    postUsername: (username) => dispatch(postUsername(username)),
    postTeamRole: (username, team, role) => dispatch(postTeamRole(username, team, role)),
    startGame: () => dispatch(startGame())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainContainer)
