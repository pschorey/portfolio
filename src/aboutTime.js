import React from 'react';
import styled from 'styled-components';
import returnYearsMonthsDays from './returnYearsMonthsDays';

const numbersColor = 'color:rgb(253,253,150)';
const labelColor = 'rgba(255,255,255,.95)';
const backgroundDark = 'rgba(255,255,255,.1)';
const backgroundLight = 'rgba(255,255,255,.2)';
const gridHeight = `  height:90px;
                      line-height:90px;
                      @media(min-width: 790px) {
                        height:45px;
                        line-height:45px;
                      }
                      @media(max-width: 499px) {
                        height:45px;
                        line-height:45px;
                      }`

 const numbersGridFormat = `
    font-family: scoreboard, monospace;
    color: ${numbersColor};
    font-size:28px;
    background-color:${backgroundDark};
    ${gridHeight}
`                     


const AboutTimeContainer = styled.div`
  position:relative;
  margin: 0px auto 0px auto;
  text-align:center;
  width:90%;

  height:90px;
  @media(min-width: 790px) {
    height:45px;
    line-height:45px;
  }
`

const AboutTimeBlur = styled.div`
position:absolute;
top:0;
left:0;
z-index:0;
height:100%;
width:100%;
/*box-shadow:0px 0px 100px 0px rgba(255,255,255, .8);*/

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
  /*padding:5px;*/
  display:grid;
  align-items:center;

  @media(min-width: 500px) {
      grid-template-columns: repeat(4, 1fr);
      grid-template-areas:
        "title       yearsNum    monthsNum    daysNum"
        /*"title       yearsLabel  monthsLabel  daysLabel"*/
    }

  @media(max-width: 499px) {
      grid-template-columns: repeat(3, 1fr);
      grid-template-areas:
        "title       title        title"
        "yearsNum    monthsNum    daysNum"
        /*"yearsLabel  monthsLabel  daysLabel"*/
    }

    :span {
      width:100px;
    }
`

const Title = styled.div`
	font-size: 24px;
	grid-area: title;
  text-align:center;
  color: ${labelColor};

`
const YearsNum = styled.div `
  grid-area: yearsNum;
  ${numbersGridFormat}
`

const MonthsNum = styled.div`
  grid-area: monthsNum;
  ${numbersGridFormat}
  background-color: ${backgroundLight};
`

const DaysNum = styled.div`
  grid-area: daysNum;
  ${numbersGridFormat}
`

const YearsLabel = styled.div`
  grid-area: yearsLabel;
  color: ${labelColor};
  align-self:start;
  font-size: 20px;
`

const MonthsLabel = styled.div`
  grid-area: monthsLabel;
  color: ${labelColor};
  align-self:start;
  font-size: 20px;
`

const DaysLabel = styled.div`
  grid-area: daysLabel;
  color: ${labelColor};
  align-self:start;
  font-size: 20px;
`


export default class AboutTime extends React.Component {
	constructor(props) {
  		super(props);
    	this.state = {
    		dateArray : returnYearsMonthsDays(this.props.startDate, this.props.endDate)
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
    				<Title title={this.props.tip}>{this.props.title}</Title>
    				<YearsNum className='scoreboard'>{this.state.dateArray[0]}</YearsNum>
    	
    				<MonthsNum className='scoreboard'>{this.state.dateArray[1]}</MonthsNum>
    				
    				<DaysNum className='scoreboard'>{this.state.dateArray[2]}</DaysNum>

    			</AboutTimeGrid>
          <AboutTimeBlur>
          </AboutTimeBlur>
        </AboutTimeContainer>
    	);
  	}
}	
		