/*
import React from 'react';
import styled from 'styled-components';
import {Motion, spring} from 'react-motion';

const PullDownMenuDiv = styled.div`
	width:100%;
    height:vh;
    background-color: rgb(240, 240, 232);
    position: absolute;
    top:0;
    left:0;
`

const PullDown = styled.div`
    z-index:2;
    position: absolute;
    width: 100%;
    background-color: rgb(0, 0, 0, .75);
`

const MiniMenu = styled.div`
	text-align:center;
	padding-top:50px;
	display:flex;
	flex-direction:column;
`

const MiniLink = styled.a`
	color:white;
	font-family:"Comic Sans MS", cursive, sans-serif;
	font-size:20px;
	margin-bottom:10px;
	width:auto;
	align-self:center;

	:hover {
		color: rgb(253,253,150);
	}
`

export default class PullDownMenu extends React.Component {
	constructor(props) {
  		super(props);
    	this.state = {
    		open: this.props.open,
    		pullDownHeight: this.props.PullDownHeight
    	};
  	}

  handleMouseDown = () => {
    this.setState({open: !this.state.open});
  };

  handleTouchStart = (e) => {
    e.preventDefault();
    this.handleMouseDown();
  };

  render() {
    	return (
    		<Motion 
    		style={{y: spring(this.state.open ? this.state.pullDownHeight : 0, 100, 5)}}>
		          {({y}) =>
	  			<PullDownMenuDiv className="demo0"
					onMouseDown={this.handleMouseDown} 
					onTouchStart={this.handleTouchStart}
				>
				    <PullDown className="demo0-block" style={{
				        WebkitTransform: `translate3d(0, ${y}px, 0)`,
				        transform: `translate3d(0, ${y}px, 0)`, 
				        height: this.state.pullDownHeight,
				        top: this.state.pullDownHeight * -1
				    }}>
					    <MiniMenu>
						    <MiniLink href='#about'>About</MiniLink>
						    <MiniLink href='#projects'>Projects</MiniLink>
						    <MiniLink href='#contact'>Contact</MiniLink>
					    </MiniMenu>
				    </PullDown>
	  			</PullDownMenuDiv>
  			 }
	     </Motion>
    	);
  	}
}*/	
		