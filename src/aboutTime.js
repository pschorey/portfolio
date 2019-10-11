import React from 'react';
import styled from 'styled-components';
import returnYearsMonthsDays from './returnYearsMonthsDays';

const AboutTimeContainer = styled.div`
	margin:25px;
	text-align:center;
	display:grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-areas:
		"title       title        title"
		"yearsNum    monthsNum    daysNum"
		"yearsLabel  monthsLabel  daysLabel"
`



const Scoreboard = styled('.scoreboard')`
	font-family: scoreboard, monospace;
	color:yellow;
	font-size:20px;
`
/*

    .container{
      grid-template-areas:
        "header header"
        "advert content"
        "footer footer";
    }
*/
const Title = styled.div`
	font-size:24px;
	grid-area: title;
`
const YearsNum = styled.div `
	grid-area: yearsNum;
	font-family: scoreboard, monospace;
	color:yellow;
	font-size:20px;
`
const YearsLabel = styled.div`
	grid-area: yearsLabel;
`
const MonthsNum = styled.div`
	grid-area: monthsNum;
	font-family: scoreboard, monospace;
	color:yellow;
	font-size:20px;
`
const MonthsLabel = styled.div`
	grid-area: monthsLabel;
`
const DaysNum = styled.div`
	grid-area: daysNum;
	font-family: scoreboard, monospace;
	color:yellow;
	font-size:20px;
`
const DaysLabel = styled.div`
	grid-area: daysLabel;
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
  				<Title>{this.props.title}</Title>
  				<YearsNum className='scoreboard'>{this.state.dateArray[0]}</YearsNum>
  				<YearsLabel >Years</YearsLabel>
  				<MonthsNum className='scoreboard'>{this.state.dateArray[1]}</MonthsNum>
  				<MonthsLabel>Months</MonthsLabel>
  				<DaysNum className='scoreboard'>{this.state.dateArray[2]}</DaysNum>
  				<DaysLabel>Days</DaysLabel>
  			</AboutTimeContainer>
    	);
  	}
}	
		