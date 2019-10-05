import React from 'react';
import styled from 'styled-components';

//https://apps.apple.com/us/developer/tamber-schorey/id1434244996
//https://play.google.com/store/apps/developer?id=Paul+Schorey


const MyNav = styled.nav `
	z-index:1;
	position:fixed;
	right: 10px;
	display: flex;
	align-self: stretch;
	justify-content: flex-end;
	height: 60px;
	line-height:60px;
	background-color:transparent;

	/*iPad portrait and smaller center nav links*/
	@media(max-width: 768px) {
		justify-content: center;
		right: calc(50% - 186px)
	}
`
const CollapsedMenu = styled.nav`
	z-index:1;
	position:fixed;
	width:100%;
	height: 60px;
	line-height:60px;
	background-color:transparent;
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
	border-radius: 8px / 20px;
	background-color: gray;
	:hover {
		background-color:gray;
		border-color:black;
	}

	:hover a {
		color:black;
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



//370 break point

  render() {
    	return (
    		<div>
			{this.state.width > 370 ? 
				<MyNav id='navbar'>
					<InlineMenu><NavLink><A href='#about'>About</A></NavLink>
					<NavLink><A href='#portfolio'>Portfolio</A></NavLink>
					<NavLink><A href='#contact'>Contact</A></NavLink></InlineMenu> 
				</MyNav>
				: <CollapsedMenu><InlineMenu><NavLink><A href='#menu'>Menu</A></NavLink></InlineMenu></CollapsedMenu>
			}
			</div>
    	);
  	}
}	