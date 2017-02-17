import React, { Component } from 'react';

const JoinTeamRoleButton = ({ team, role, user, postTeamRole, gameStarted}) => {
  if (user) {
    let updatePlayerRole = () => {
      postTeamRole({username: user.username, team: team, role: role})
    }

    let username = user.username;
    let userIsThisThing = user.role === role && user.team === team

    if (username && !userIsThisThing && !gameStarted) {
      return (
        <button className="btn" onClick={updatePlayerRole}>Join</button>
      );
    } else {
      return ( null );
    }
  } else {
    return ( null );
  }
};


class TeamView extends Component {
  constructor(props) {
    super(props);
    this.state = {
     players: {"hinters": [], "guessers": []}
    };
  }

  componentWillMount() {
    this.pusher = new Pusher('a805a64f3dabd2cd9fae');
    this.players = this.pusher.subscribe('players');
  }

  componentDidMount() {
    this.players.bind('new_player', function(player){
      this._getUpdatedPlayers();
    }, this);

    this._getUpdatedPlayers();
  }

  _getUpdatedPlayers() {
    var self = this;

    $.get(`/players?team=${this.props.displayedTeam}`).success(function(data) {
      self.setState({players: data})
    });
  }

  render() {
    let playersList = (players, role) => {
      return (
        players[role].map(function(player){
          let readyIcon = () => {
            if (player.ready) {
              return(<i className="material-icons">done</i>)
            } else {
              return null;
            }
          }

          return (
            <li key={"player-" + player.username}>
              { player.username }
              { readyIcon() }
            </li>
          )
        })
      )
    }

    return(
      <div className="card-content white-text">
        <h4>{this.props.displayedTeam} Players</h4>

        <h5>Hinters:</h5>

        <ul>
          { playersList(this.state.players, "hinters") }
        </ul>

        <JoinTeamRoleButton
          team={this.props.displayedTeam}
          role="hinter"
          user={this.props.user}
          postTeamRole={this.props.postTeamRole}
          gameStarted={this.props.gameStarted}
         />

        <h5>Guessers:</h5>

        <ul>
          { playersList(this.state.players, "guessers") }
        </ul>

        <JoinTeamRoleButton
          team={this.props.displayedTeam}
          role="guesser"
          user={this.props.user}
          postTeamRole={this.props.postTeamRole}
          gameStarted={this.props.gameStarted}
         />

      </div>
    );
  }
};

export default TeamView;
