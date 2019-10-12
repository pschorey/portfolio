import React from 'react';
import styled from 'styled-components';
import board from './img/boards/divisionBoard.jpeg';
import android from './img/icons/android.svg';
import apple from './img/icons/apple.svg';
import github from './img/icons/github.svg';
import linkedin from './img/icons/linkedin.svg';
import stack from './img/icons/stack-overflow.svg';
import twitter from './img/icons/twitter.svg';
import SocialLink from './socialLink';

const MyDiv = styled.div`
  background-image : url(${board});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  height:auto;
  min-height:100vh;
  display:flex;
  flex-direction:column;
  justify-content:center;

  @media(max-width : 523px) {
    height:600px;
    min-height:100vh;
    display:flex;
    justify-content:center;
    flex-direction:column;
  } 
`

const Title = styled.div`
  margin:0px auto 15px auto;
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

const IconContainer = styled.div`
  display:flex;
  flex-direction:row wrap;
  justify-content: space-around;
  align-items:center;

  @media(max-width : 523px) {
    flex-direction:column
  }  
`

export default class SocialContainer extends React.Component {
	constructor(props) {
  		super(props);
    	this.state = {
         socialPages: [
         	{siteImg: github, link:'https://github.com/pschorey'},
         	{siteImg:stack, link:'https://stackoverflow.com/users/7512559/paul-schorey'},
         	{siteImg:apple, link: 'https://apps.apple.com/us/developer/tamber-schorey/id1434244996'},
         	{siteImg:android, link: 'https://play.google.com/store/apps/developer?id=Paul+Schorey'},
         	{siteImg:linkedin, link: 'https://www.linkedin.com/in/paul-schorey'},
         	{siteImg:twitter, link: 'https://twitter.com/PaulSchorey'}
         ]
    	};

  	}

  render() {
    	return (
			<MyDiv id="contact">
		        <Title>Let's Connect...</Title>
		        <IconContainer>
					{this.state.socialPages.map((socialPage, index) => 
					   <SocialLink key={index} img={socialPage.siteImg} link={socialPage.link}/>
					 )}
		        </IconContainer>  
			</MyDiv>
    	);
  	}
}	
