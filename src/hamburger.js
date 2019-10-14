import React from 'react';
import {Motion, spring} from 'react-motion';
import styled from 'styled-components';
import MiniMenuLink from './miniMenuLink.js';

const Container = styled.div`
	/*overflow:hidden;*/
`

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
  position:relative;
  z-index:100;
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
    z-index:99;
    position: absolute;
    width: 100%;
    background-color: rgb(0, 0, 0, .75);
`
const MiniMenuDiv = styled.div`
	text-align:center;
	padding-top:50px;
	display:flex;
	flex-direction:column;
`


export default class Hamburger extends React.Component {
	constructor(props) {
  		super(props);
    	this.state = {
    		open: false,
    		PullDownHeight: window.innerHeight
    	};
    	this.handleMouseDown = this.handleMouseDown.bind(this);
  	}

  handleMouseDown () {
    this.setState({open: !this.state.open});
  };

  render() {
    	return (
    		<Container>
				<Motion style={{y: spring(this.state.open ? this.state.PullDownHeight : 0),
								rotUp: spring(this.state.open ? -45 : 0),
								moveDown: spring(this.state.open ? 12 : 0),
								rotDown: spring(this.state.open ? 45 : 0),
								moveUp: spring(this.state.open ? -12 : 0),
								rotX: spring(this.state.open ? 90 : 0),
								opacity: spring(this.state.open ? 0 : 1)
				}}>
		          {({y, rotUp, rotDown, moveDown, moveUp, rotX, opacity}) =>
					<div>
						<HamburgerContainer
							onClick={this.handleMouseDown} 
						>
							<HamBars
								style={{
									transform: `translate(0px, ${moveDown}px) rotate(${rotDown}deg)`
								}}
							></HamBars>
							<HamBars
								style={{
									transform: `rotateY(${rotX}deg)`
								}}
							></HamBars>
							<HamBars
								style={{
									transform: `translate(0px, ${moveUp}px) rotate(${rotUp}deg)`
								}}
							></HamBars>
						</HamburgerContainer>
			            <PullDownContainer 
							onClick={this.handleMouseDown} 
			            >
			              <PullDown style={{
			                WebkitTransform: `translate3d(0, ${y}px, 0)`,
			                transform: `translate3d(0, ${y}px, 0)`, 
			                height: this.state.PullDownHeight,
			                top: this.state.PullDownHeight * -1
			              }}>
						<MiniMenuDiv>
						{
							this.props.linkArray.map( (link, index) => 
								<MiniMenuLink key={index} link={link} />
							)
						}
						</MiniMenuDiv>
			              </PullDown>
			            </PullDownContainer>
		            </div>
		          }
	        	</Motion>
        	</Container>
    	);
  	}
}