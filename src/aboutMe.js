import React from 'react';
import styled from 'styled-components';
import board from './img/boards/divisionBoard.jpeg';


const AboutContainer = styled.div`
	height:800px;
  background-image : url(${board});
  background-size: cover;
`
const Paragraphs = styled.p`
  margin:0px;
  padding-top:10px;
`

const para1 = `My Name is Paul Schorey, and I am thrilled to be a teacher at Norwell Middle School. I have been a teacher at Norwell since 2012. Prior to working for NWCS I've worked at a factory and held summer construction jobs throughout undergraduate study.  During graduate school I gained valuable experience working at a computer support help desk.  After grad school I worked as a customer service and sales representative, and finally as an alternative school teacher prior to coming to Norwell.`
const para2 = `For most of my life I have known that I wanted to work in a profession where I could try to have a positive impact on people. The desire to help people led me to choose teaching as a profession. I earned a Bachelor of Science in Secondary Education from Indiana University, and a Master of Divinity from Moody in Chicago, IL.`
const para3 = `I met my wonder wife Tamber during graduate school and we have been married since March of 2005. Together we have a daughter, Natalya, whom we cherish dearly.`


export default class AboutMe extends React.Component {
	constructor(props) {
  		super(props);
    	this.state = {
        
    	};
  	}

  render() {
    	return (
			<AboutContainer id='about'>
          <Paragraphs>{para1}</Paragraphs>
          <Paragraphs>{para2}</Paragraphs>
          <Paragraphs>{para3}</Paragraphs>
			</AboutContainer>
    	);
  	}
}	