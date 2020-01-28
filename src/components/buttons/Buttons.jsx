import React from 'react'

export default class Buttons extends React.Component{

	render(){
		return(
			<div>
				<label target='format'>Format</label>
				<input type='radio' id='format' label='button'/>
				<div>
					<input type='text' placeholder='zip 1'/>
					<input type = 'text' placeholder='zip 2'/>
				</div>
				<button type='submit'>Submit</button>
			</div>
			)
	}
}