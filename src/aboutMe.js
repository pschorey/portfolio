import React from 'react';
import styled from 'styled-components';
//import board from './img/boards/additionBoard.jpg';
import AboutTime from './aboutTime';

const labelColor = 'rgb(0,0,0)';

const AboutContainer = styled.div`
  padding-top:20px;
  padding-bottom: 20px;
	height: auto;
  min-height:100vh;
  /*background-image : url();
  background-size: cover;*/
  background-color:rgb(128, 191, 255);
  background-image: linear-gradient(to bottom, rgb(128, 191, 255) , rgb(179, 217, 255));
`
const Header = styled.h1`
  font-family: Chalk;
  margin-left: 10%;
`

const AboutTimeGridHeaderContainer = styled.div`
  position:relative;
  margin: 0px auto 0px auto;
  text-align:center;
  width:90%;
`

const AboutTimeGridHeader = styled.div`
  display: grid;

  @media(min-width: 500px) {
      grid-template-columns: repeat(4, 1fr);
      grid-template-areas:
        ".       yearsLabel  monthsLabel  daysLabel"
    }

  @media(max-width: 499px) {
      grid-template-columns: repeat(3, 1fr);
      grid-template-areas:
        "yearsLabel  monthsLabel  daysLabel"
    }
`

const YearsLabel = styled.div`
  grid-area: yearsLabel;
  color: ${labelColor};
  align-self:start;
  font-size: 20px;
  @media(max-width: 499px) {
    background-color:rgba(255,255,255,.1);
  }
`

const MonthsLabel = styled.div`
  grid-area: monthsLabel;
  color: ${labelColor};
  align-self:start;
  font-size: 20px;
  @media(max-width: 499px) {
    background-color:rgba(255,255,255,.2);
  }
`

const DaysLabel = styled.div`
  grid-area: daysLabel;
  color: ${labelColor};
  align-self:start;
  font-size: 20px;
  @media(max-width: 499px) {
    background-color:rgba(255,255,255,.1);
  }
`


export default class AboutMe extends React.Component {
	constructor(props) {
  		super(props);
    	this.state = {
        aboutTime : [
          {title: 'Husband', startDate: 'March 12, 2005'},
          {title: 'Father', startDate: 'April 21, 2014'},
          {title: 'Teacher', startDate: 'August 14, 2009'},
          {title: 'Web Developer', startDate: 'January 15, 2015'},
          {title: 'App Developer', startDate: 'August 31, 2018'},
          {title: 'Track Coach', startDate: 'February 12, 2004'},
          {title: 'Football Coach', startDate: 'August 7, 2016'}
        ]
    	};
  	}

  render() {
    	return (
			<AboutContainer id='about'>
          <Header>About Time...</Header>
          <AboutTimeGridHeaderContainer>
            <AboutTimeGridHeader>
              <YearsLabel >Years</YearsLabel>
              <MonthsLabel>Months</MonthsLabel>
              <DaysLabel>Days</DaysLabel>
            </AboutTimeGridHeader>
          </AboutTimeGridHeaderContainer>
            { this.state.aboutTime.map((aboutTime, index) => 
               <AboutTime key={index} title={aboutTime.title} startDate={aboutTime.startDate}/>
              )
            }

			</AboutContainer>
    	);
  	}
}	