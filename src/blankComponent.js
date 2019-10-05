import React from 'react';
import styled from 'styled-components';


const MyDiv = styled.div`
	height:300px;
`


export default class MyComponent extends React.Component {
	constructor(props) {
  		super(props);
    	this.state = {

    	};
  	}

  render() {
    	return (
			<MyDiv>

			</MyDiv>
    	);
  	}
}	