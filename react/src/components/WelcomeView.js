import React, { Component } from 'react';

class UsernameSelection extends Component {
  render() {
    let postThatUsername = () => {
      let username = document.getElementById("username").value;
      this.props.postUsername(username);
    }

    return(
      <div className="center-align">
        <h1>Welcome to Codenames!</h1>
        <h4>Please enter your username to get started:</h4>
        <input id="username" placeholder="Please enter your username" />
        <button className="btn" onClick={postThatUsername}>Go!</button>
      </div>
    );
  }
}

class TeamSelection extends Component {
  render() {
    let username = this.props.user.username;
    let postTeamRole = this.props.postTeamRole;

    return(
      <div>
        <h4>Welcome, {username}!</h4>
        <h3>Choose your team:</h3>
        <div className="col m6">
          <div className="card red" value="red" onClick={() => postTeamRole({username: username, team: "red", role: "hinter"})}>
            <div className="card-content">
              <span className="card-title">Red Hinter</span>
            </div>
          </div>
        </div>

        <div className="col m6">
          <div className="card blue" value="red" onClick={() => postTeamRole({username: username, team: "blue", role: "hinter"})}>
            <div className="card-content">
              <span className="card-title">Blue Hinter</span>
            </div>
          </div>
        </div>

        <div className="col m6">
          <div className="card red" value="red" onClick={() => postTeamRole({username: username, team: "red", role: "guesser"})}>
            <div className="card-content">
              <span className="card-title">Red Guesser</span>
            </div>
          </div>
        </div>

        <div className="col m6">
          <div className="card blue" value="red" onClick={() => postTeamRole({username: username, team: "blue", role: "guesser"})}>
            <div className="card-content">
              <span className="card-title">Blue Guesser</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class ReadyToPlayButton extends Component {
  render() {
    let username = this.props.user.username;
    let postTeamRole = this.props.postTeamRole;

    return (
      <div className="center-align">
        <h1>Welcome {username}</h1>
        <button className="btn-large" onClick={() => postTeamRole({username: username, ready: true})}>Ready to start?</button>
      </div>
    )
  }
}

class ReadyToPlay extends Component {
  render() {
    let username = this.props.user.username;
    let startGame = this.props.startGame;
    let postTeamRole = this.props.postTeamRole;

    let startThatGame = () => {
      startGame();
    }

    let postThatTeamRole = () => {
      postTeamRole({username: username, ready: false})
    }

    return(
      <div className="center-align">
        <h1>Welcome {username}</h1>
        <i className="large material-icons">done</i>
        <br />
        <div>
          <button className="btn-large" onClick={startThatGame}>Start the game!</button>
        </div>
        <div>
          <a onClick={postThatTeamRole}>Actually, I am not ready to start!</a>
        </div>
      </div>
    );
  }
}

class WelcomeView extends Component {
  render() {
    let user = this.props.user;
    let team = this.props.team;

    if (user.ready) {
      this.props.checkStartedGame();
      return(<ReadyToPlay user={user} postTeamRole={this.props.postTeamRole} startGame={this.props.startGame} />);
    } else if (user.username && team) {
      return(<ReadyToPlayButton user={user} postTeamRole={this.props.postTeamRole} />);
    } else if (user.username) {
      return(<TeamSelection user={user} postTeamRole={this.props.postTeamRole} />);
    } {
      return(<UsernameSelection postUsername={this.props.postUsername} />);
    }

    return view;
  }
}

export default WelcomeView;
