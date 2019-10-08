import React from 'react';
import styled from 'styled-components';
import android from './img/icons/android.svg';
import apple from './img/icons/apple.svg';
import github from './img/icons/github.svg';
import linkedin from './img/icons/linkedin.svg';
import stack from './img/icons/stack-overflow.svg';
import twitter from './img/icons/twitter.svg';
import SocialLink from './socialLink';

const MyDiv = styled.div`
	height:200px;
  background-color:green;

  @media(max-width : 420px) {
    height:530px !important;
  } 
`

const Title = styled.h1`
  padding-top:30px;
  margin-top:0px;
  text-align:center;
`

const IconContainer = styled.div`
  display:flex;
  flex-direction:row wrap;
  justify-content: space-around;
  align-items:center;

  @media(max-width : 420px) {
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
					{this.state.socialPages.map(socialPage => 
					   <SocialLink img={socialPage.siteImg} link={socialPage.link}/>
					 )}
		        </IconContainer>  
			</MyDiv>
    	);
  	}
}	
