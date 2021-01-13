import React from 'react';
import styled from 'styled-components';
import AboutTime from './aboutTime';

const labelColor = 'rgba(255,255,255,.85)';

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

const Name = styled.h1`
  margin-left:10%;
  font-size:38px;
`
  
const Header = styled.h1`
  /*font-family: Chalk;*/
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
/*
const Quote = styled.p`
  margin-left:10%;
  margin-right:10%;
  text-align:center;
  font-size:1.3em;
  color:rgba(0,0,0,.5);
`
*/
const Statement = styled.p`
  margin: 30px 10% 30px 10%;
  font-size:1.7em;
  color:rgba(0,0,0,.8);
`

export default class AboutMe extends React.Component {
	constructor(props) {
  		super(props);
    	this.state = {
        aboutTime : [ 
          {title: 'Husband', startDate: 'March 12, 2005', endDate:false, tip:'But it feels like forever...'},
          {title: 'Father', startDate: 'April 21, 2014', endDate:false, tip:'Wish I could keep you little'},
          {title: 'Teacher', startDate: 'August 14, 2009', endDate:false, tip:'Thousands of minds molded like clay.'},
          {title: 'Web Developer', startDate: 'January 15, 2015', endDate:false, tip:'What did I do to make Google mad?'},
          {title: 'App Developer', startDate: 'August 31, 2018', endDate:false, tip:"Please let my next app go viral like Flappy Bird"},
          {title: 'Track Coach', startDate: 'February 12, 2004', endDate: "May 30, 2020", tip:"Cold, wind, rain, Indiana spring while in charge of 120ish kids. Sign me up!"},
          {title: 'Football Coach', startDate: 'August 7, 2016', endDate:false, tip:"Some years we're the hammer, others the nail.  We haven't tried being the board yet."}
        ]
    	};
  	}

  render() {
    	return (
			<AboutContainer id='about'>
          <Name>Paul Schorey</Name>
          <Statement>I'm a Computer Applications teacher who likes helping people and solving problems through creating websites and mobile apps.  My other hobbies are playing guitar, gardening, enjoying the outdoors, and coaching.</Statement>
          <Header>About Time...</Header>
          <AboutTimeGridHeaderContainer>
            <AboutTimeGridHeader>
              <YearsLabel >Years</YearsLabel>
              <MonthsLabel>Months</MonthsLabel>
              <DaysLabel>Days</DaysLabel>
            </AboutTimeGridHeader>
          </AboutTimeGridHeaderContainer>
            { this.state.aboutTime.map((aboutTime, index) => 
               <AboutTime key={index} title={aboutTime.title} startDate={aboutTime.startDate} endDate={aboutTime.endDate} tip={aboutTime.tip}/>
              )
            }
          {/*<Quote>"There is a time for everything, and a season for every activity under heaven..." <span> Ecc. 3:1</span></Quote>*/}
			    
      </AboutContainer>
    	);
  	}
}	