import React from 'react';
//import styled from 'styled-components';
//import Name from './name'
import Nav from './nav';
import AboutMe from './aboutMe';
import Projects from './projects';
import Resume from './resume';
import SocialContainer from './socialContainer';
import GlobalFonts from './fonts/fonts.js'


class App extends React.Component {
  render() {
    return (
      <div>
        <GlobalFonts />
        {/*<Name />*/}
        <Nav />
        <AboutMe />
        <Projects />
        {/*<Resume />*/}
        <SocialContainer />
      </div>
    );
  }
}


export default App;
