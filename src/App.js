import React from 'react';
//import Nav from './nav';
import Name from './name'
import AboutMe from './aboutMe';
import Projects from './projects';
import SocialContacts from './socialContacts';


class App extends React.Component {
  render() {
    return (
      <div id='root'>
        <Name />
        <SocialContacts />
        <AboutMe />
        <Projects />

      </div>
    );
  }
}


export default App;
