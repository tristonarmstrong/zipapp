import React from 'react'
import Buttons from '../buttons/Buttons'
import Display from '../display/Display'
import ErrorBanner from '../error/ErrorBanner'
import './index.css'

export default class Container extends React.Component {
	constructor() {
		super()
		this.state = {
			city0: null,
			city1: null,
			invalid: false
		}
	}

	// receive the zips from the inputs and find their cities
	getZips = ( zips ) => {
		// loop through both zips
		this.setState({...this.state, invalid:false})
		zips.forEach( ( zip, i ) => {
			// fetch corosponding data file for each zip
			fetch( `./data/data${zip[0]}.json` )
				.then( res => res.json() )
				.then( data => {
					// loop through the cities
					for(let [j, city] of data.entries()){
						// find a match and set city
						if ( city.Zipcode === zips[ i ] ) {
							this.setCity( city, i )
							break
						}
						if(j == data.length-1){
							this.setState({
								...this.state,
								invalid: true
							})
						}
					}
				} )
				.catch( err => `Looks like theres an error: ${err}` )
		} )
	}

	// sets cities to state
	setCity = ( city, i ) => {
		this.setState( {
			...this.state,
			[ `city${i}` ]: {
				// new city object
				City: city.City,
				Zipcode: city.Zipcode,
				Lat: city.Lat,
				Long: city.Long

			}
		} )
		console.log(this.state.invalid)
	}

	render() {
		return ( 
			<div>
				<div className='container'>
					<div className='color'>
						<Display city0={this.state.city0}
						 		city1={this.state.city1}/> 
					</div>
					<Buttons getZips={this.getZips}/>

					{this.state.invalid &&
					<div >
						<ErrorBanner error={2}/>
					</div>}
				</div>
			</div>
			)
	}
}