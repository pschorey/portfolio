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
  background-color: rgb(78, 237, 158);
  background-image: linear-gradient(to bottom, rgb(78, 237, 158), rgb(27, 99, 63));
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
           imgSrc: ftl,
           summary: 'An app and website that is used by 1000\'s of students to learn touch typing.',
           tech: ['JavaScript, jQuery, CSS3, HTML5', 'Amazon Web Services', 'Unity Ads Implimentation', 'App Store Optimization']
          },
          {
            title: 'Squad Timing',
            link: 'https://www.squadtiming.com/',
            imgSrc: st,
            summary: 'A complete team management stopwatch app that is used by coaches to monitor their team\'s performances over time.',
            tech: ['JS, jQuery', 'SQLite', 'Data Tables', '.csv Data Import & Exporting', 'Xcode & Android Studio']
          },
          {
            title: 'Calculator for Social Security',
            link: 'https://www.squadtiming.com/socialsecuritycalculator/',
            imgSrc: cfss,
            summary: 'This app takes the complicated Social Security withdrawl and inflation rules and calculates hypothetical lifetime returns.',
            tech: ['React', 'Chart.js', 'Android and iOS In-App-Purchasing']
          },
          {
            title: 'Player Timing',
            link: 'https://www.squadtiming.com/playertiming/',
            imgSrc: pt,
            summary: 'An app that helps coaches monitor playing time in sports like basketball.',
            tech: ['JS, jQuery Mobile', 'SQLite', 'UI / UX Optimization', 'Bootstrap', 'Cordova']
          },
          {
            title: 'Splat Math',
            link: 'https://www.squadtiming.com/splatmath/',
            imgSrc: sm,
            summary: 'A Fruit Ninja inspired game for reviewing basic math operations.',
            tech: ['C#', 'Unity App Development', 'Unity In-App-Purchases', 'Unity Analytics', 'iOS Game Center Implementation']
          },
          {
            title: 'Typing Home & sluap Websites',
            link: '',
            imgSrc: th,
            summary: 'These sites were used for myself and my students, but are now offline due to hosting costs.',
            tech: ['PHP, Node.js', 'MySQL', 'CentOS Unmanaged VPS Setup', 'MySQL Workbench', 'SSH and FTP', 'cPanel', 'Wordpress']
          }
        ]
    	};
  	}

  render() {
    	return (
			<MyDiv id="projects">
        <ProjectTitle className="project-title">Stuff I've made</ProjectTitle>
        <ProjectGrid>
          { this.state.projects.map((project, index) => 
               <ProjectGridChild key={index} title={project.title} summary={project.summary} link={project.link} imgSrc={project.imgSrc} tech={project.tech}/>
              )
           }                                       
        </ProjectGrid>
			</MyDiv>
    	);
  	}
}	