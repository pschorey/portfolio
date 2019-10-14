import React from 'react';
import styled from 'styled-components';
import ProjectDetails from './projectDetails';

const ProjectChild = styled.div`

  position:relative;

  @media(min-width: 1240px) {
    height:400px;
    width:400px;    
  }
  @media(max-width: 1239px) {
    height:350px;
    width:350px;    
  }
  @media(max-width: 729px) {
    height:300px;
    width:300px;    
  }
  @media(max-width: 319px) {
    width: 90%;
    height: auto;
  }

  :hover {
  	cursor: pointer;
  }
`

const Title = styled.div`
	top:0;
	left:0;
	position:absolute;
	z-index:3;
`

const Img = styled.img`
	position:absolute;
	width:100%;
	/*max-width:490px;*/
	height:auto;
	align-self:center;
`

export default class ProjectGridChild extends React.Component {
	constructor(props) {
  		super(props);
    	this.state = {

    	};
  	}

  			    //<Title>{this.props.title}</Title>

  render() {
    	return (
    		<div>

  			<ProjectChild>
  				<Img title='ugh' alt='ugggh' src={this.props.imgSrc} />
  				<ProjectDetails />
  			</ProjectChild>
  			</div>
    	);
  	}
}	
		