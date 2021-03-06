import React, {Component} from 'react';
import {render} from 'react-dom';
import MapGL from 'react-map-gl';
import DeckGLOverlay3 from './deckgl-overlay3.js';

import {csv as requestCsv} from 'd3-request';//加载csv文件
const MAPBOX_TOKEN = 'pk.eyJ1Ijoib3JhbmdlbW9vbjM0IiwiYSI6ImNqaXZ3NGllbzFqazgzcXJ4bW12ZHBvam0ifQ.XVNRZdOrcyT83fFH6Nbxjw'


export default class Root extends Component {

  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        ...DeckGLOverlay3.defaultViewport,
        width: 500,
        height: 500
      },
      data: null
    };
    //请求csv数据
    requestCsv('./data/heatmap-data.csv', (error, response) => {
      if (!error) {
        const data = response.map(d => ([Number(d.lng), Number(d.lat)]));
        this.setState({data});
      }
    });
  }

  componentDidMount() {
    window.addEventListener('resize', this._resize.bind(this));
    this._resize();
  }

  _resize() {
    this._onChangeViewport({
      width: window.innerWidth*0.78,
      height: window.innerHeight
    });
  }

  _onChangeViewport(viewport) {
    this.setState({
      viewport: {...this.state.viewport, ...viewport}
    });
  }

  render() {
    const {viewport, data} = this.state;
    const stylemap = {
      style:{
        cssFloat: 'right',
        display: 'inline-block',
      }
    }

    
    return (
      <MapGL style={stylemap.style}
        {...viewport}
        mapStyle="mapbox://styles/orangemoon34/cjjdy3kwu1ejp2srk98kq7ap5"
        perspectiveEnabled={true}
        onChangeViewport={this._onChangeViewport.bind(this)}
        mapboxApiAccessToken={MAPBOX_TOKEN}>
        <DeckGLOverlay3 
          viewport={viewport}
          data={data || []}
        />
      </MapGL>
    );
  }
}


