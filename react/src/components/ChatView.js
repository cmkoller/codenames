import React, { Component } from 'react';
import MessageList from './MessageList';

class ChatView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: []
    };
  }

  componentWillMount() {
    this.pusher = new Pusher('a805a64f3dabd2cd9fae');
    this.chatRoom = this.pusher.subscribe('messages');
  }

  componentDidMount() {
    this.chatRoom.bind('new_message', function(message){
      this.setState({messages: this.state.messages.concat(message)})
    }, this);
  }

  _onMessage(e){
    if (e.nativeEvent.keyCode != 13) return;

    var input = e.target;
    var text = input.value;

    // if the text is blank, do nothing
    if (text === "") return;

    var message = {
      message: {
        username: "juuuulia",
        text: text,
        time: new Date()
      }
    }

    $.post('/messages', message).success(function(){
      input.value = ""
    });
  }

  render() {
    if (!this.props.username) var style = {display:'none'}

    return (
      <div style={style} className="card blue-grey darken-1">
        <div className="card-content">
          <span className="card-title">Chat</span>
          <MessageList messages={this.state.messages}  />
          <input placeholder="Type your message" onKeyPress={this._onMessage} />
        </div>
      </div>
    );
  }
};

export default ChatView;
