import React from 'react';
import styled from 'styled-components';
import Hamburger from './hamburger';
import addBoard from './img/boards/additionBoard.jpg'

const MyNav = styled.nav `
	z-index:1;
	position:fixed;
	padding-right: 10px;
	display: flex;
	align-self: stretch;
	justify-content: flex-end;
	height: 44px;
	line-height:44px;
	background-color: transparent;
	width:100%;

	/*iPad portrait and smaller center nav links*/
	@media(max-width: 768px) {
		justify-content: center;
		padding-right: calc(50% - 186px)
	}
`
const CollapsedMenu = styled.nav`
	z-index:1;
	position:fixed;
	width:100%;
	height: 44px;
	line-height:44px;
	background-color:transparent;
	text-align:right;
`

const InlineMenu = styled.div`
	display: inline-flex;
	align-self:stretch;
`

const NavLink = styled.div`
	/*color:white;*/
	height:30px;
	line-height:30px;
	margin:5px 10px;
	border:solid 2px white;
	border-radius: 10px / 20px;
	background-color: gray;
	background-image : url(${addBoard});
	:hover {
		background-color:gray;
		border-color: rgb(253,253,150);
	}

	:hover a {
		color: rgb(253,253,150);
	}
`
const A = styled.a`
	padding:0px 15px;	
	font-family:"Comic Sans MS", cursive, sans-serif;
	text-decoration:none;
	font-size:20px;
	color:white;
`

export default class Nav extends React.Component {
	constructor(props) {
  		super(props);
    	this.state = {
    		width: 371,
    	};
		this.updateDimensions = this.updateDimensions.bind(this);
  	}

  	updateDimensions () {
  		let width = window.innerWidth;
  		this.setState({width: width});
  	}

	componentDidMount() {
	    window.addEventListener('resize', this.updateDimensions);
	    this.updateDimensions();
	}
	componentWillUnmount() {
		window.removeEventListener('resize', this.updateDimensions);
	}

  render() {
    	return (
    		<div>
			{this.state.width > 370 ? 
				<MyNav id='navbar'>
					<InlineMenu><NavLink><A href='#about'>About</A></NavLink>
					<NavLink><A href='#projects'>Projects</A></NavLink>
					<NavLink><A href='#contact'>Contact</A></NavLink></InlineMenu> 
				</MyNav>
				: <CollapsedMenu>
					<InlineMenu>
						<Hamburger />
					</InlineMenu>
				  </CollapsedMenu>
			}
			</div>
    	);
  	}
}	