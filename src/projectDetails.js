import React from 'react';
import styled from 'styled-components';
import {Motion, spring} from 'react-motion';

const ProjectDetailsContainer = styled.div`
  width:100%;
  height:100%;
  position:absolute;
	
`

const PullDown = styled.div`
    z-index:99;
    position: absolute;
    height: 100%;
    width: 100%;
    top:-0px;
    left:0px;
    background-color: white;
`
/*
                      WebkitTransform: `translate3d(0, ${x}px, 0)`,
                      transform: `translate3d(0, ${x}px, 0)`, 

                      left:  0,
                      top: -350,
*/
export default class ProjectDetails extends React.Component {
	constructor(props) {
  		super(props);
    	this.state = {
        clicked: true,
        sliderWidth: window.innerWidth,
        sliderHeight: window.innerHeight,
    	};
      this.handleMouseDown = this.handleMouseDown.bind(this)
  	}

  handleMouseDown () {
    this.setState({
      clicked: !this.state.clicked,
    })
  }

  render() {
    	return (
  			<ProjectDetailsContainer onClick={this.handleMouseDown} >
          <Motion style={{x: spring(this.state.clicked ? 350 : 700),
            opac: spring(this.state.clicked ? 0 : 1)
          }}>
  				{({x, opac}) =>
            <PullDown style={{
                      opacity: `${opac}`
                    }}/>
          }
          </Motion>
  			</ProjectDetailsContainer>
    	);
  	}
}	
		