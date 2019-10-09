import React from 'react';
//import styled from 'styled-components';
import Name from './name'
import AboutMe from './aboutMe';
import Projects from './projects';
import SocialContainer from './socialContainer';
import GlobalFonts from './fonts/fonts.js'


class App extends React.Component {
  render() {
    return (
      <div id='root'>
        <GlobalFonts />
        <Name />
        <AboutMe />
        <Projects />
        <SocialContainer />
      </div>
    );
  }
}


export default App;
