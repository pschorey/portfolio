import React from 'react';
import styled from 'styled-components';

let scroll = require('scroll')
let page = require('scroll-doc')()
let ease = require('ease-component')

const MiniLink = styled.a`
	color:white;
	font-family:"Comic Sans MS", cursive, sans-serif;
	font-size:20px;
	margin-bottom:10px;
	width:auto;
	align-self:center;

	:hover {
		color: rgb(253,253,150);
		cursor: pointer;
	}
`

export default class MiniMenuLink extends React.Component {
	constructor(props) {
  		super(props);
    	this.state = {
    		anchorTarget: null,
    		stiffAndDamp: {
    			stiffness:250,
    			damping:4
    		}
    	};
    	this.handleClick = this.handleClick.bind(this);  	
  	}


	handleClick(e) {
  		scroll.top(page, this.state.anchorTarget.offsetTop, { ease: ease.inQuad })
  	}

  	componentDidMount() {
 		//callback console.log because this.setState is async, using a callback will give correct state after it has been set
  	    console.log(this.props.link.toLowerCase());
  	    this.setState({
  	    	anchorTarget : document.getElementById(this.props.link.toLowerCase())
  	    })		
  	}

  render() {
    	return (

  			<MiniLink
  				onClick={this.handleClick}
  			>{this.props.link}
		    </MiniLink>
    	);
  	}
}	
		