import React from 'react';
import styled from 'styled-components';



const MyNav = styled.nav `
	display: flex;
	align-self: stretch;
	/*align-items: center;*/
	justify-content: flex-end;
	height: 60px;
	line-height:60px;
	background-color:gray;
`

const InlineMenu = styled.div`
	display: inline-flex;
`

const NavLink = styled.div`
	/*color:white;*/
	height:30px;
	line-height:30px;
	margin:5px 10px;
	border:solid 2px white;
	border-radius: 8px / 20px;

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
    		width: 371
    	};
		this.updateDimensions = this.updateDimensions.bind(this);
  	}

  	updateDimensions () {
  		//console.log('width = ' + window.innerWidth)
  		let width = window.innerWidth;
  		this.setState({width: width});
  		console.log(width);
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
			<MyNav id='navbar'>
				{this.state.width > 370 ? 
					<InlineMenu><NavLink><A href='#about'>About</A></NavLink>
					<NavLink><A href='#portfolio'>Portfolio</A></NavLink>
					<NavLink><A href='#contact'>Contact</A></NavLink></InlineMenu> 

					: <NavLink><A href='#menu'>Menu</A></NavLink>}
			   	
			</MyNav>
    	);
  	}
}	