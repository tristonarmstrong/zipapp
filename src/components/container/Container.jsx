import React from 'react'
import Buttons from '../buttons/Buttons'
import Display from '../display/Display'

export default class Container extends React.Component{
	constructor(){
		super()
		this.state = {
			city0: {},
			city1: {}
		}
	}

	getZips = (zips) => {
		let zipLists = []
		zips.forEach((zip, i) => {
			fetch(`/data/data${zip[0]}.json`)
			.then(res => res.json())
			.then(data => {
				zipLists.push(data)

				zipLists.forEach((list, i) => {
					list.forEach(city => {
						if(city.Zipcode == zips[i]){
							this.setState({
								[`city${i}`]: {
									City: city.City,
									Zipcode: city.Zipcode,
									Lat: city.Lat,
									Long: city.Long
								}
							})
						}
					})
				})
			})
			.catch(err => `Looks like theres an error: ${err}`)
		})
		
	}

	render(){
		console.log(this.state)
		return(
				<div>
					<Display/>
					<Buttons getZips={this.getZips}/>
				</div>
			)
	}
}