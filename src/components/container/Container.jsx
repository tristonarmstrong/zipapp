import React from 'react'
import Buttons from '../buttons/Buttons'
import Display from '../display/Display'

export default class Container extends React.Component{
	

	render(){
		return(
				<div>
					<Display/>
					<Buttons/>
				</div>
			)
	}
}