import React from 'react';
import styled from 'styled-components';
import resume from './Schorey_Resume.pdf';

const ResumeContainer = styled.div`
  background-size: 100% 100%;
  background-repeat: no-repeat;
  height:auto;
  min-height:100vh;
  display:flex;
  flex-direction:column;
  justify-content:center;
  padding:15px;
  /*background-image: linear-gradient(to top, rgba(0,0,0,.9), rgba(50,50,50,.95));*/
  background-image: linear-gradient(to top, rgba(203,105,105, 1), rgba(203,105,105, .5));

  @media(max-width : 523px) {
    height:auto;
    min-height:100vh;
    display:flex;
    justify-content:center;
    flex-direction:column;
  } 
`

/*
const Title = styled.div`
  margin:70px auto 45px auto;
  width:50%;
  text-align:center;
  font-size:2em;
  background-color: rgba(255,255,255,.5);
  border-radius:10px;

  @media(max-width: 280px) {
    font-size:1.5em;
  }

  @media(max-width: 280px) {
    font-size:1em;
  }
`
*/


export default class Resume extends React.Component {
	constructor(props) {
  		super(props);
    	this.state = {
    	};
  	}

  render() {
    	return (
			<ResumeContainer id="resume">
          <object data={resume} type="application/pdf" width="80%" height="1200px">
            <p>Link to <a href="./Schorey_Resume.pdf">resume</a></p>
          </object>
			</ResumeContainer>
    	);
  	}
}	
