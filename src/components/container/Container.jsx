import React from 'react'
import Buttons from '../buttons/Buttons'
import Display from '../display/Display'

export default class Container extends React.Component{
	constructor(){
		super()
		this.state = {
			city0: null,
			city1: null
		}
	}

	// receive the zips from the inputs and find their cities
	getZips = (zips) => {
		zips.forEach((zip, i) => {
			fetch(`/data/data${zip[0]}.json`)
			.then(res => res.json())
			.then(data => {
				data.forEach((city, j) => {
					if(city.Zipcode == zips[i]){
						this.setCity(city, i)
					}
				})
			})
			.catch(err => `Looks like theres an error: ${err}`)
		})
	}

	// sets cities in state
	setCity = (city, i) => {
		this.setState({
			[`city${i}`]: {
				City: city.City,
				Zipcode: city.Zipcode,
				Lat: city.Lat,
				Long: city.Long
				}
			})
		}


	render(){
		console.log(this.state)
		return(
				<div>
					<Display city0={this.state.city0} city1={this.state.city1}/>
					<Buttons getZips={this.getZips}/>
				</div>
			)
	}
}