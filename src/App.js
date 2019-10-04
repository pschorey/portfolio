import React from 'react';
import Nav from './nav';
import Name from './name'


class App extends React.Component {
  render() {
    return (
      <div id='root'>
        <Nav />
        <Name />
      </div>
    );
  }
}


export default App;
