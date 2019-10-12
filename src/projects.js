import React from 'react';
import styled from 'styled-components';
import board from './img/boards/multiplyBoard.jpg';

const MyDiv = styled.div`
	padding-top:60px;
  height:auto;
	min-height:100vh;
	background-color:orange;
  background-image : url(${board});
  background-size: cover;
`


export default class Projects extends React.Component {
	constructor(props) {
  		super(props);
    	this.state = {

    	};
  	}

  render() {
    	return (
			<MyDiv id="projects">
				<div className="project-title">some project title</div>
			</MyDiv>
    	);
  	}
}	