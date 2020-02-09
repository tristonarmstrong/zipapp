import React from 'react'
import {Map, GoogleApiWrapper, Marker} from 'google-maps-react'

const AnyReactComponent = ({text}) => <div>{text}</div>

class GMap extends React.Component{
	constructor(props){
		super(props)
	}

	shouldComponentUpdate = () => true

	addMarkers = (markers) => 
	markers.map( (marker, i) => {
		return <Marker 
			key={i} 
			id={i} 
			position={{lat: marker.latitude, lng: marker.longitude}}/>
		})

	render(){
		return(
				 <Map
          			google={this.props.google}
          			zoom={8}
          			style={mapStyles}
          			initialCenter={{ lat: this.props.center.lat, lng: this.props.center.lng}}>

				{/* plot points here */}
					{this.props.coords && this.addMarkers(this.props.coords)}
          		</Map>
			)
	}
}

const mapStyles = {
	height: '300px',
	width: '400px',
	position: 'absolute',
	left: 0
}


export default GoogleApiWrapper({
  apiKey: 'AIzaSyByZWwZr1QzkVBry0ZKbc50nmjqAbZueQg'
})(GMap);