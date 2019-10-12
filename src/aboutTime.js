import React from 'react';
import styled from 'styled-components';
import returnYearsMonthsDays from './returnYearsMonthsDays';

const AboutTimeContainer = styled.div`
  position:relative;
  margin: 15px auto 0px auto;
  text-align:center;
  width:90%;
  height:115px;
`

const AboutTimeBlur = styled.div`
position:absolute;
top:0;
left:0;
z-index:0;
height:100%;
width:100%;
box-shadow:10px 3px 50px 2px rgba(255,255,255, .8);

/*
background-image: linear-gradient(to bottom, #29323c , #485563);
border-radius:20px;
*/

/*  -webkit-filter: blur(20px);
  filter: blur(20px);*/
`

const AboutTimeGrid = styled.div`
  position:absolute;
  top:0;
  left:0;
  height:100%;
  width:100%;
  z-index:1;
  padding:5px;
  display:grid;
  align-items:center;
font-family: "Comic Sans MS",cursive,sans-serif;


  @media(min-width: 500px) {
      grid-template-columns: repeat(4, 1fr);
      grid-template-areas:
        "title       yearsNum    monthsNum    daysNum"
        "title       yearsLabel  monthsLabel  daysLabel"
    }

  @media(max-width: 499px) {
      grid-template-columns: repeat(3, 1fr);
      grid-template-areas:
        "title       title        title"
        "yearsNum    monthsNum    daysNum"
        "yearsLabel  monthsLabel  daysLabel"
    }

    :span {
      width:100px;
    }
`


const Scoreboard = styled('.scoreboard')`
	font-family: scoreboard, monospace;
	color:rgb(253,253,150);
	font-size:20px;
`

const Title = styled.div`
	font-size: 24px;
	grid-area: title;
  text-align:center;
`
const YearsNum = styled.div `
	grid-area: yearsNum;
	font-family: scoreboard, monospace;
  color:rgb(253,253,150);
	font-size:28px;
`
const YearsLabel = styled.div`
	grid-area: yearsLabel;
  color: rgba(255, 255, 255, .88);
  align-self:start;
  font-size: 20px;
`
const MonthsNum = styled.div`
	grid-area: monthsNum;
	font-family: scoreboard, monospace;
  color:rgb(253,253,150);
	font-size:28px;
`
const MonthsLabel = styled.div`
	grid-area: monthsLabel;
  color: rgba(255, 255, 255, .88);
  align-self:start;
  font-size: 20px;
`
const DaysNum = styled.div`
	grid-area: daysNum;
	font-family: scoreboard, monospace;
  color:rgb(253,253,150);
	font-size:28px;
`
const DaysLabel = styled.div`
	grid-area: daysLabel;
  color: rgba(255, 255, 255, .88);
  align-self:start;
  font-size: 20px;
`

export default class AboutTime extends React.Component {
	constructor(props) {
  		super(props);
    	this.state = {
    		dateArray : returnYearsMonthsDays(this.props.startDate)
    	};
  	}

    	componentDidMount () {
    		let tempArr = []
    		this.state.dateArray.forEach((x, index) => {
    			tempArr.push(x < 10 ? '0' + x : x)	
    		})
    		this.setState({
    			dateArray : tempArr
    		})
    	}

  render() {
    	return (
        <AboutTimeContainer>
    			<AboutTimeGrid>
    				<Title>{this.props.title}</Title>
    				<YearsNum className='scoreboard'>{this.state.dateArray[0]}</YearsNum>
    				<YearsLabel >Years</YearsLabel>
    				<MonthsNum className='scoreboard'>{this.state.dateArray[1]}</MonthsNum>
    				<MonthsLabel>Months</MonthsLabel>
    				<DaysNum className='scoreboard'>{this.state.dateArray[2]}</DaysNum>
    				<DaysLabel>Days</DaysLabel>
    			</AboutTimeGrid>
          <AboutTimeBlur>
          </AboutTimeBlur>
        </AboutTimeContainer>
    	);
  	}
}	
		