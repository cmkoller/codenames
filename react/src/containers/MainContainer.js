import React, { Component } from 'react';
import { connect } from 'react-redux';
import { change, formValueSelector, reduxForm } from 'redux-form';
import { loadUserData } from './../actions/loadUserData';
import { postUsername, deleteUser } from './../actions/postUsername';
import { postTeamRole } from './../actions/postTeamRole';
import {
  startGame,
  loadStartedGame,
  checkStartedGame,
  clearGame,
  clearGameSession
} from './../actions/game';

import WelcomeView from './../components/WelcomeView';
import GamePlayContainer from './../containers/GamePlayContainer';
import TeamView from './../components/TeamView';
import ChatView from './../components/ChatView';
import ResetButtons from './../components/ResetButtons';

class MainContainer extends Component {
  componentWillMount() {
    this.pusher = new Pusher('a805a64f3dabd2cd9fae');
    this.players = this.pusher.subscribe('games');
  }

  componentDidMount() {
    this._loadSessionPlayerInfo();
    this._loadSessionGameStarted()

    this.players.bind('game_started', function(){
      this.props.loadStartedGame();
    }, this);

    this.players.bind('game_cleared', function(){
      this.props.clearGameSession();
    }, this);
  }

  _loadSessionGameStarted() {
    let gameStarted = (sessionStorage.gameStarted === "true");

    if(gameStarted) {
      this.props.loadStartedGame();
    }
  }

  _loadSessionPlayerInfo() {
    let username = sessionStorage.username;
    let team = sessionStorage.team;
    let role = sessionStorage.role;
    let ready = sessionStorage.ready;
    ready === "true" ? ready = true : ready = false


    this.props.loadUserData({username: username, team: team, role: role, ready: ready});
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
        checkStartedGame={this.props.checkStartedGame}
        startGame={this.props.startGame}
      />
    }

    return(
      <div className="row">
        <div className="col m3">
          <div className="card red darken-3">
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
          <div className="card blue darken-2">
            <TeamView
              displayedTeam="blue"
              user={this.props.user}
              postTeamRole={this.props.postTeamRole}
            />
          </div>
        </div>

        <div className="col s12">
          <ResetButtons
            user={this.props.user}
            clearGame={this.props.clearGame}
            leaveGame={this.props.leaveGame}
          />
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
    checkStartedGame: () => dispatch(checkStartedGame()),
    startGame: () => dispatch(startGame()),
    clearGame: () => dispatch(clearGame()),
    clearGameSession: () => dispatch(clearGameSession()),
    leaveGame: (username) => dispatch(deleteUser(username))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainContainer)
