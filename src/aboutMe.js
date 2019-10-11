import React from 'react';
import styled from 'styled-components';
import board from './img/boards/divisionBoard.jpeg';
import AboutTime from './aboutTime';

const AboutContainer = styled.div`
  padding-top:20px;
  padding-bottom: 20px;
	height: auto;
  background-image : url(${board});
  background-size: cover;
  color:white;
`
const Header = styled.h1`

`

export default class AboutMe extends React.Component {
	constructor(props) {
  		super(props);
    	this.state = {
        aboutTime : [
          {title: 'Husband', startDate: 'March 12, 2005'},
          {title: 'Father', startDate: 'April 21, 2014'},
          {title: 'Teacher', startDate: 'August 14, 2009'},
          {title: 'Track Coach', startDate: 'February 12, 2004'},
          {title: 'Football Coach', startDate: 'August 7, 2016'},
          {title: 'Web Developer', startDate: 'January 15, 2015'},
          {title: 'App Developer', startDate: 'August 31, 2018'}
        ]
    	};
  	}

  render() {
    	return (
			<AboutContainer id='about'>
          <Header>About Time...</Header>
            { this.state.aboutTime.map((aboutTime, index) => 
               <AboutTime key={index} title={aboutTime.title} startDate={aboutTime.startDate}/>
              )
            }
			</AboutContainer>
    	);
  	}
}	