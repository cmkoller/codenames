import React from 'react';

let App = props => {
  return (
    <div>
      <div className="clearfix">
        {props.children}
      </div>
    </div>
  );
};

export default App;
