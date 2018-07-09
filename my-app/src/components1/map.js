import React,{Component} from 'react';
import ReactMapGL from 'react-map-gl';

export default class Map extends Component {
	constructor(){
		super();
		this.state ={
		    viewport: {
		      width: window.innerWidth*0.95,
		      height: window.innerHeight,
		      latitude: 13,
		      longitude: -14,
		      zoom: 6
		    },
		}
	}
  render() {
    return (
      <ReactMapGL {...this.state.viewport} mapboxApiAccessToken={'pk.eyJ1Ijoib3JhbmdlbW9vbjM0IiwiYSI6ImNqaXZ3NGllbzFqazgzcXJ4bW12ZHBvam0ifQ.XVNRZdOrcyT83fFH6Nbxjw'} onViewportChange={(viewport) => this.setState({viewport})}/>
    );
  }
}