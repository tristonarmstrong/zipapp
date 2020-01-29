import React from 'react'

export default class Display extends React.Component{
	componentWillReceiveProps(newProps){
		if(newProps.city1){ // if second city prop has been received
			this.CalculateDistance(
			newProps.city0.Lat, 
			newProps.city0.Long, 
			newProps.city1.Lat,
			newProps.city1.Long
			)
		}
		
	}

	CalculateDistance = (a0,a1,b0,b1) => {
		/*
		a0 = city0 lat
		a1 = city0 long
		b0 = city1 lat
		b1 = city1 long
		*/

		// haversine formula for calculating distance between two Coords
		let R = 6371e3; // meters
		//convert coords to radians
		let φ1 = this.toRadians(a0);
		let φ2 = this.toRadians(b0);
		let Δφ = this.toRadians((b0-a0));
		let Δλ = this.toRadians((b1-a1));

		// formula for calculating a
		let a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
        		Math.cos(φ1) * Math.cos(φ2) *
        		Math.sin(Δλ/2) * Math.sin(Δλ/2);
        // formula for calculating b
		let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
		//formula for d
		let d = R * c;

		d /= 1e3 // convert from met to km

		d /= 1.609 // convert from km to mi
		this.setState({
			distance: d // rerender the component
		})
		/*
		credit: https://www.movable-type.co.uk/scripts/latlong.html
		for the formula for calculating distance between two points.
		Some alterations were made
		*/
	}

	toRadians = (deg) => {
	let pi = Math.PI
	return deg * (pi/180)

	}

	render(){
		return(
			<div>
				{ // if both cities are processed
					this.props.city0 && this.props.city1 && 
					<div>
					<h1>{`${this.state.distance.toFixed(2)}mi`}</h1>
					<h3>{`Zips ${this.props.city0.Zipcode} and ${this.props.city1.Zipcode} are ${this.state.distance.toFixed(2)}mi apart`}</h3>
					</div>
				}

				{ // if not both cities are processed
					(!this.props.city0 || !this.props.city1) &&
					<>
					<h1>- - -</h1>	
					<h3>Awaiting input. Try some zips!</h3>	
					</>			
				}
			</div>
			)
	}
}