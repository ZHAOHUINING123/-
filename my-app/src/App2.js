/* global document, fetch, window */
import React, {Component} from 'react';
import {render} from 'react-dom';
import MapGL from 'react-map-gl';
import DeckGLOverlay2 from './deckgl-overlay2.js';

// Set your mapbox token here
const MAPBOX_TOKEN = 'pk.eyJ1Ijoib3JhbmdlbW9vbjM0IiwiYSI6ImNqaXZ3NGllbzFqazgzcXJ4bW12ZHBvam0ifQ.XVNRZdOrcyT83fFH6Nbxjw'; // eslint-disable-line

// Source data GeoJSON
const DATA_URL =
  'https://raw.githubusercontent.com/uber-common/deck.gl-data/master/examples/arc/counties.json'; // eslint-disable-line

export default class Root2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        ...DeckGLOverlay2.defaultViewport,
        width: 500,
        height: 500
      },
      data: null,
      selectedCounty: null
    };

    fetch(DATA_URL)
      .then(response => response.json())
      .then(({features}) => {
        this.setState({
          data: features,
          selectedCounty: features.find(f => f.properties.name === 'Los Angeles, CA')
        });
      });
  }

  componentDidMount() {
    window.addEventListener('resize', this._resize.bind(this));
    this._resize();
  }

  _resize() {
    this._onViewportChange({
      width: window.innerWidth*0.78,
      height: window.innerHeight
    });
  }

  _onHover(info) {
    // Hovered over a county
  }

  _onClick(info) {
    // Clicked a county
    this.setState({selectedCounty: info.object});
  }

  _onViewportChange(viewport) {
    this.setState({
      viewport: {...this.state.viewport, ...viewport}
    });
  }

  render() {
    const {viewport, data, selectedCounty} = this.state;
    const stylemap = {
      style:{
        cssFloat: 'right',
        display: 'inline-block',
      }
    }

    return (
      <MapGL style={stylemap.style}
        {...viewport}
        onViewportChange={this._onViewportChange.bind(this)}
        mapboxApiAccessToken={MAPBOX_TOKEN}
      >
        <DeckGLOverlay2
          viewport={viewport}
          data={data}
          selectedFeature={selectedCounty}
          onHover={this._onHover.bind(this)}
          onClick={this._onClick.bind(this)}
          strokeWidth={2}
        />
      </MapGL>
    );
  }
}

