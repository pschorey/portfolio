import React from 'react';
import styled from 'styled-components';
import NavButton from './navButton';
import Hamburger from './hamburger';

const MyNav = styled.nav `
	z-index:99;
	position:fixed;
	padding-right: 10px;
	display: flex;
	align-self: stretch;
	justify-content: flex-end;
	height: 44px;
	line-height:44px;
	/*background-color: gray;*/
	width:100%;

	/*iPad portrait and smaller center nav links*/
	@media(max-width: 768px) {
		justify-content: center;
		padding-right: calc(50% - 186px)
	}
`
const CollapsedMenu = styled.nav`
	z-index:99;
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



export default class Nav extends React.Component {
	constructor(props) {
  		super(props);
    	this.state = {
    		linkArray: [/*'Home', */'About', 'Projects', 'Contact'],
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
			{this.state.width > 470 ? 
				<MyNav id='navbar'>
					<InlineMenu>
						{
							this.state.linkArray.map( (link, index) => 
								<NavButton key={index} link={link} />
							)
						}
												
					</InlineMenu> 
				</MyNav>
				: <CollapsedMenu>
					<InlineMenu>
						<Hamburger linkArray={this.state.linkArray}/>
					</InlineMenu>
				  </CollapsedMenu>
			}
			</div>
    	);
  	}
}	