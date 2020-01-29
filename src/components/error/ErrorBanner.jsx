import React from 'react'
import './index.css'

export default class ErrorBanner extends React.Component{

	render(){
		return(
			<>
			{this.props && this.props.error == 1 &&
				<div id='error'>
						<h4>Please use a 5 digit zipcode!</h4>
				</div>}

			{this.props && this.props.error == 2 &&
				<div id='error'>
						<h4>That is not a real zipcode!</h4>
				</div>}
			</>
			)
	}
}