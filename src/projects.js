import React from 'react';
import styled from 'styled-components';


const MyDiv = styled.div`
	height:800px;
	background-color:orange;
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