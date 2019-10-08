import React from 'react';
import {Motion, spring} from 'react-motion';
import styled from 'styled-components';


const HamburgerContainer = styled.div`
  float:right;
  width:44px;
  height:42px;
  margin-right:20px;

  :hover {
  	cursor:pointer;
  }

  :hover div {
  	border-color: rgb(253,253,150);  	
  }
`
const HamBars = styled.div`
  height:0px;
  margin: 8px 4px 0px 4px;
  border: 2px solid white;
`

const PullDownContainer = styled.div`
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

	:hover {
		color: rgb(253,253,150);
	}
`

export default class Hamburger extends React.Component {
	constructor(props) {
  		super(props);
    	this.state = {
    		open: false,
    		PullDownHeight: window.innerHeight
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
    		<div>
				<HamburgerContainer 
					onMouseDown={this.handleMouseDown} 
					onTouchStart={this.handleTouchStart}
				>
					<HamBars></HamBars>
					<HamBars></HamBars>
					<HamBars></HamBars>
				</HamburgerContainer>
			{/* ?  # represents height of component...*, # was 600 */}
				<Motion style={{y: spring(this.state.open ? this.state.PullDownHeight : 0)}}>
		          {({y}) =>
		            // children is a callback which should accept the current value of
		            // `style`
		            <PullDownContainer className="demo0"
						onMouseDown={this.handleMouseDown} 
						onTouchStart={this.handleTouchStart}
		            >
		              <PullDown className="demo0-block" style={{
		                WebkitTransform: `translate3d(0, ${y}px, 0)`,
		                transform: `translate3d(0, ${y}px, 0)`, 
		                height: this.state.PullDownHeight,
		                top: this.state.PullDownHeight * -1
		              }}>
		              	<MiniMenu>
			              	<MiniLink href='#about'>About</MiniLink>
			              	<MiniLink href='#projects'>Projects</MiniLink>
			              	<MiniLink href='#contact'>Contact</MiniLink>
		              	</MiniMenu>
		              </PullDown>
		            </PullDownContainer>
		          }
	        	</Motion>
        	</div>
    	);
  	}
}	

/*
const Demo0 = styled.div`
    border-radius: 4px;
    background-color: rgb(240, 240, 232);
    position: relative;
    margin: 5px 3px 10px;
    width: 450px;
    height: 50px;
`

const DemoBlock = styled.div`
    position: absolute;
    width: 50px;
    height: 50px;
    border-radius: 4px;
    background-color: rgb(130, 181, 198);
`

export default class SocialContacts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
  };

  handleMouseDown = () => {
    this.setState({open: !this.state.open});
  };

  handleTouchStart = (e) => {
    e.preventDefault();
    this.handleMouseDown();
  };

  render() {
    return (
      <div>
        <button
          onMouseDown={this.handleMouseDown}
          onTouchStart={this.handleTouchStart}>
          Toggle
        </button>

        <Motion style={{x: spring(this.state.open ? 400 : 0)}}>
          {({x}) =>
            // children is a callback which should accept the current value of
            // `style`
            <Demo0 className="demo0">
              <DemoBlock className="demo0-block" style={{
                WebkitTransform: `translate3d(${x}px, 0, 0)`,
                transform: `translate3d(${x}px, 0, 0)`,
              }} />
            </Demo0>
          }
        </Motion>
      </div>
    );
  };
}
*/