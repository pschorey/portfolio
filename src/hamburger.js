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
`
const HamBars = styled.div`
  height:0px;
  margin: 8px 4px 0px 4px;
  border: 2px solid white; 
`

const Demo0 = styled.div`
    width:100%;
    height:vh;
    background-color: rgb(240, 240, 232);
    position: absolute;
    top:0;
    left:0;
`

const DemoBlock = styled.div`
    z-index:2;
    position: absolute;
    top: -600px;
    width: 100%;
    height: 600px;
    border-radius: 0px 0px 20px 20px;
    background-color: rgb(130, 181, 198);
`

export default class Hamburger extends React.Component {
	constructor(props) {
  		super(props);
    	this.state = {
    		open: false
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
			{/* ?  # represents height of component...*/}
				<Motion style={{x: spring(this.state.open ? 600 : 0)}}>
		          {({x}) =>
		            // children is a callback which should accept the current value of
		            // `style`
		            <Demo0 className="demo0">
		              <DemoBlock className="demo0-block" style={{
		                WebkitTransform: `translate3d(0, ${x}px, 0)`,
		                transform: `translate3d(0, ${x}px, 0)`,
		              }}>
		              	<a href='ugh'>ugh</a>
		              	<a href='bro'>bro</a>
		              </DemoBlock>
		            </Demo0>
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