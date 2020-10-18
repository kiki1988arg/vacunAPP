import { Component, OnInit } from '@angular/core';

import Map from 'ol/Map';
import View from 'ol/View';
import VectorLayer from 'ol/layer/Vector';
import Style from 'ol/style/Style';
import Icon from 'ol/style/Icon';
import OSM from 'ol/source/OSM';
import * as olProj from 'ol/proj';
import TileLayer from 'ol/layer/Tile';
import VectorSource from 'ol/source/Vector';
import { Feature } from 'ol';
import Point from 'ol/geom/Point';
import Layer from 'ol/layer/Layer';

@Component({
  selector: 'app-center',
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.scss']
})
export class CenterComponent implements OnInit {
  private map: any;
  private lat: number = -34.612188;
  private lon: number = -58.418335;
  marker: any;
  vectorSource: any;
  vectorLayer: VectorLayer;
  markerSource: any;
  constructor() { }

  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition((res) => {
      console.log("Got position", res.coords);
      this.lat = res.coords.latitude;
      this.lon = res.coords.longitude;
      this.createMap();
    }, (err) => this.createMap());
  }

  createMap() {

    var iconFeature = new Feature({
      geometry: new Point(olProj.fromLonLat([-58.418335, -34.612188])),
      name: 'Null Island',
      population: 4000,
      rainfall: 500,
    });

    var iconStyle = new Style({
      image: new Icon({
        anchor: [0.2, 0.2],
        src: '../../../../assets/icons/icon-72x72.png',
      }),
    });

    iconFeature.setStyle(iconStyle);

    var vectorSource = new VectorSource({
      features: [
        iconFeature
      ]
    })
    var vectorLayer = new VectorLayer({
      source: vectorSource,
    });

    this.map = new Map({
      target: 'hotel_map',
      layers: [
        new TileLayer({
          source: new OSM()
        }), vectorLayer
      ],
      view: new View({
        center: olProj.fromLonLat([this.lon, this.lat]),
        zoom: 15
      })
    });
  }
}
