import React from 'react';
import styled from 'styled-components';
import ProjectGridChild from './projectGridChild';
import tfs from './img/profile/trackandfieldscorebook.png';
import arrm from './img/profile/appratingsandreviewmonitor.png';
import ftl from './img/profile/freeTypingLessons.png';
import fm from './img/profile/farmermath.png';
import st from './img/profile/squadTiming.png';
import cfss from './img/profile/calculatorForSocialSecurity.jpg';
import pt from './img/profile/playerTiming.png';
import sm from './img/profile/splatMath.png';
import th from './img/profile/typingHome.png';



const ProjectTitle = styled.h1`
  margin-left:10%;
  /*font-family:chalk;*/
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
    grid-template-rows: repeat(400px);/*400px 400px;*/
  }
  @media(max-width: 1239px) {
    grid-template-columns: 50vw 50vw;
    grid-template-rows: repeat(350px);*/repeat(3, 350px);*/ 
  }
  @media(max-width: 729px) {
    grid-template-columns: 100vw;
    grid-template-rows: repeat(300px);/*repeat(6, 300px);  */
  }

  justify-items: center;
  grid-row-gap: 25px;
`

export default class Projects extends React.Component {
	constructor(props) {
  		super(props);
    	this.state = {
        projects: [
          {title: 'App Ratings and Review Monitor',
           link: 'https://www.squadtiming.com/appratingsandreviewmonitor/',
           imgSrc: arrm,
           summary: 'A tool for developers to monitor user feedback.',
           tech: ['React Native', 'Expo', 'Facebook\'s Audience Network', 'Apple\'s REST APIs', 'XML & JSON Parsing']
          }, 
          {title: 'Track and Field Scorebook',
           link: 'https://www.squadtiming.com/trackandfieldscorebook/',
           imgSrc: tfs,
           summary: 'An app used to record and share Track and Field meet results.',
           tech: ['React Native', 'Realm DB', 'HTML to PDF', 'RN BLob', 'RN In App Purchases']
          },        
          {title: 'Free Typing Lessons',
           link: 'https://www.squadtiming.com/freetypinglessons/',
           imgSrc: ftl,
           summary: 'An app and website that is used by 1000\'s of students to learn touch typing.',
           tech: ['Apache Cordova', 'JavaScript, jQuery, CSS3, HTML5', 'Amazon Web Services Hosting', 'Unity Ads Implementation', 'App Store Optimization']
          },
          {title: 'Farmer Math',
           link: 'https://www.squadtiming.com/farmermath/',
           imgSrc: fm,
           summary: 'A platform for solving real-world math word problems',
           tech: ['Cordova App using React JS', 'AWS Lambda API', 'Firebase Analytics', 'Web, iOS, & Android optimized with one codebase' ]
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
            summary: 'This app takes the complicated Social Security withdraw and inflation rules and calculates hypothetical lifetime returns.',
            tech: ['JS, HTML5, Grid, Flex', 'Chart.js', 'Android and iOS In-App-Purchasing']
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
            summary: 'Former projects used for myself and my students, but are now archived.',
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