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
import Text from 'ol/style/Text';
import Fill from 'ol/style/Fill';
import Stroke from 'ol/style/Stroke';
import { MatDialog } from '@angular/material/dialog';
import { CenterDialogComponent } from '../dialogs/center-dialog/center-dialog.component';
import { FacadeService } from 'src/app/shared/services/facade.service';
import { Institute } from 'src/app/shared/interfaces/interfaces';

@Component({
  selector: 'app-center',
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.scss']
})
export class CenterComponent implements OnInit {
  private map: any;
  private lat: number = -34.612188;
  private lon: number = -58.418335;
  institutes: Institute[];
  marker: any;
  vectorLayer: VectorLayer;
  markerSource: any;
  features = [];
  vectorSource = new VectorSource({
    features: []
  })
  olProj: typeof olProj;
  constructor(public dialog: MatDialog,
    private facade: FacadeService) { }

  ngOnInit(): void {
    this.olProj = olProj;
    this.facade.getInstitutes().subscribe((res)=>{
      this.institutes=res;

      navigator.geolocation.getCurrentPosition((res) => {
        console.log("Got position", res.coords);
        this.lat = res.coords.latitude;
        this.lon = res.coords.longitude;
        this.createMap();
      }, (err) => this.createMap());
    })
  }

  createMap() {
    let _this = this;
    this.institutes.forEach(item => {

      let iconFeature = new Feature({
        geometry: new Point(olProj.fromLonLat([+item.long, +item.lat])),
        name: item.name,
        address: item.address,
        time: item.time,
        locale: item.locale,
        phone: item.phone
      });

      let iconStyle = new Style({
        image: new Icon({
          anchor: [1.3, 1.3],
          src: '../../../../assets/icons/marker-map.png',
        }),
        text: new Text({
          text: item.name,

          scale: 1.4,
          fill: new Fill({
            color: "#fff",
          }),
          stroke: new Stroke({
            color: "0",
            width: 3
          })
        })
      });

      iconFeature.setStyle(iconStyle);
      this.features.push(iconFeature);

    })

    this.features.forEach(item => {
      this.vectorSource.addFeature(item);
    })

    var vectorLayer = new VectorLayer({
      source: this.vectorSource,
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
        zoom: 14,
        enableRotation: false
      })
    });

    this.map.on('singleclick', function (event) {
      event.map.forEachFeatureAtPixel(event.pixel, function (feature, layer) {
        _this.openDialog(feature)
      });
    });

    this.map.on("moveend", function (event) {
      //Traer propiedades cercanas según x,y

      console.log(_this.olProj.toLonLat(event.map.getView().getCenter()))
    });

  }

  openDialog(feature): void {
    const dialogRef = this.dialog.open(CenterDialogComponent, {
      width: '300px',
      // disableClose: true,
      data: { feature: feature.values_ }
    });
  }
}
