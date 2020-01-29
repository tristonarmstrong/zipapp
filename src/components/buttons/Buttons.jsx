import React from 'react'
import ErrorBanner from '../error/ErrorBanner'
import './index.css'

export default class Buttons extends React.Component{

	constructor(){
		super()
		this.state = {
			zip_one: '',
			zip_two: '',
			invalid: false
		}
	}

	handleChanges = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	submit = (e) => {
		e.preventDefault()
		if(this.validate(this.state.zip_one, this.state.zip_two)){
			this.props.getZips([this.state.zip_one, this.state.zip_two])
			this.setState({
				...this.state,
				invalid: false
			})
		}else{
			this.setState({
				...this.state,
				invalid: true
			})
		}
	}

	validate = (a,b) => {
		let rx = /\D/
		//check if a || b is all numbers
		if(rx.test(a) || rx.test(b)){
			return false
		}
		//ckeck if a || b is 5 numbers
		else if(a.length < 5 || 
				a.length > 5 || 
				b.length < 5 || 
				b.length > 5 ){
			return false
		}
		// return true if tests pass
		return true
	}

	render(){
		return(
			<div>
				<div className='inp_cont'>
					<input 
					name='zip_one' 
					type='text' 
					placeholder='zip one' 
					onChange={(e) => this.handleChanges(e)}
					value={this.state.zip_one}
					className='inp'/>

					<input 
					name='zip_two' 
					type='text' 
					placeholder='zip two' 
					onChange={(e) => this.handleChanges(e)}
					value={this.state.zip_two}
					className='inp'/>
				</div>
				<button 
				type='submit' 
				onClick={e=> this.submit(e)} 
				className='btn'
				>Submit</button>

				{this.state.invalid &&
					<ErrorBanner error={1}/>}
			</div>
			)
	}
}