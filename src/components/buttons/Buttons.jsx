import React from 'react'

export default class Buttons extends React.Component{

	constructor(){
		super()
		this.state = {
			zip_one: '',
			zip_two: ''
		}
	}

	handleChanges = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	submit = (e) => {
		e.preventDefault()
		this.props.getZips([this.state.zip_one, this.state.zip_two])
	}

	render(){
		return(
			<div>
				<div>
					<input 
					name='zip_one' 
					type='text' 
					placeholder='zip one' 
					onChange={(e) => this.handleChanges(e)}
					value={this.state.zip_one}/>
					<input 
					name='zip_two' 
					type='text' 
					placeholder='zip two' 
					onChange={(e) => this.handleChanges(e)}
					value={this.state.zip_two}/>
				</div>
				<button 
				type='submit' 
				onClick={e=> this.submit(e)} >Submit</button>
			</div>
			)
	}
}