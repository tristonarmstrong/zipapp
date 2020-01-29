import React from 'react'
import Buttons from '../buttons/Buttons'
import Display from '../display/Display'
import './index.css'

export default class Container extends React.Component {
	constructor() {
		super()
		this.state = {
			city0: null,
			city1: null
		}
	}

	// receive the zips from the inputs and find their cities
	getZips = ( zips ) => {
		// loop through both zips
		zips.forEach( ( zip, i ) => {
			// fetch corosponding data file for each zip
			fetch( `/data/data${zip[0]}.json` )
				.then( res => res.json() )
				.then( data => {
					// loop through the cities
					data.forEach( ( city, j ) => {
						// find a match and set city
						if ( city.Zipcode == zips[ i ] ) {
							this.setCity( city, i )
						}
					} )
				} )
				.catch( err => `Looks like theres an error: ${err}` )
		} )
	}

	// sets cities to state
	setCity = ( city, i ) => {
		this.setState( {
			[ `city${i}` ]: {
				// new city object
				City: city.City,
				Zipcode: city.Zipcode,
				Lat: city.Lat,
				Long: city.Long

			}
		} )
	}


	render() {
		console.log( this.state )
		return ( 
			<div>
				<div className='container'>
					<div className='color'>
						<Display city0={this.state.city0}
						 		city1={this.state.city1}/> 
					</div>
					<Buttons getZips={this.getZips}/>
				</div>
			</div>
			)
	}
}