import React from 'react';

var MessageList = React.createClass({
  render: function() {
    var list = this.props.messages.map(function(message){
      return  (
        <li>
          <b>{message.username} - {message.time}</b>
          <p>{message.text}</p>
        </li>
      )
    });

    return (
      <ul>
        {list}
      </ul>
    );
  }
});

export default MessageList;
