import React from 'react';
import styled from 'styled-components';
import ProjectGridChild from './projectGridChild';
import ftl from './img/profile/freeTypingLessons.png';
import st from './img/profile/squadTiming.png';
import cfss from './img/profile/calculatorForSocialSecurity.jpg';
import pt from './img/profile/playerTiming.png';
import sm from './img/profile/splatMath.png';
import th from './img/profile/typingHome.png';



const ProjectTitle = styled.h1`
  margin-left:10%;
  font-family:chalk;
`

const MyDiv = styled.div`
	padding-top:60px;
  padding-bottom:60px;
  height:auto;
	min-height:100vh;
	background-color:orange;
  /*background-image : url();
  background-size: cover;*/
  background-color: rgb(255, 179, 255);
  background-image: linear-gradient(to bottom, rgb(255, 179, 255), rgb(255, 102, 255));
  width:100%;

`

const ProjectGrid = styled.div`
  width:100%;
  margin:auto;
  display:grid;

  @media(min-width: 1240px) {
    grid-template-columns: 33vw 33vw 33vw;
    grid-template-rows: 400px 400px;
  }
  @media(max-width: 1239px) {
    grid-template-columns: 50vw 50vw;
    grid-template-rows: repeat(3, 350px); 
  }
  @media(max-width: 729px) {
    grid-template-columns: 100vw;
    grid-template-rows: repeat(6, 300px);  
  }

  justify-items: center;
  grid-row-gap: 25px;
`

export default class Projects extends React.Component {
	constructor(props) {
  		super(props);
    	this.state = {
        projects: [
          {title: 'Free Typing Lessons',
           link: 'https://www.squadtiming.com/freetypinglessons/',
           imgSrc: ftl
          },
          {
            title: 'Squad Timing',
            link: 'https://www.squadtiming.com/',
            imgSrc: st
          },
          {
            title: 'Calculator for Social Security',
            link: 'https://www.squadtiming.com/socialsecuritycalculator/',
            imgSrc: cfss
          },
          {
            title: 'Player Timing',
            link: 'https://www.squadtiming.com/playertiming/',
            imgSrc: pt
          },
          {
            title: 'Splat Math',
            link: 'https://www.squadtiming.com/splatmath/',
            imgSrc: sm
          },
          {
            title: 'Typing Home',
            link: '',
            imgSrc: th
          }
        ]
    	};
  	}

  render() {
    	return (
			<MyDiv id="projects">
        <ProjectTitle className="project-title">Stuff I've made...</ProjectTitle>
        <ProjectGrid>
          { this.state.projects.map((project, index) => 
               <ProjectGridChild key={index} title={project.title} link={project.link} imgSrc={project.imgSrc}/>
              )
           }                                       
        </ProjectGrid>
			</MyDiv>
    	);
  	}
}	