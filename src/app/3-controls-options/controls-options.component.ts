import { Component, OnInit } from '@angular/core';
import { IConfigMap, tileLayers } from '@mugan86/ng-leaflet';

@Component({
  selector: 'app-controls-options',
  templateUrl: './controls-options.component.html',
  styleUrls: ['./controls-options.component.css'],
})
export class ControlsOptionsComponent {
  configMap: IConfigMap = {
    scale: {
      position: 'bottomleft',
    },
    layers: {
      baseLayers: [
        {
          label: 'Default',
          map: tileLayers.baseLayers.default.map,
          atribution: tileLayers.baseLayers.default.atribution,
          // default: true, // <=== To show with this selection
        },
        {
          label: 'CycloOSM',
          map: tileLayers.baseLayers.cycloOsm.map,
          atribution: tileLayers.baseLayers.cycloOsm.atribution,
        },
        {
          label: 'OSMHot',
          map: tileLayers.baseLayers.osmHot.map,
          atribution: tileLayers.baseLayers.osmHot.atribution,
        },
        {
          label: 'CartoDB',
          map: tileLayers.baseLayers.cartoDb.map.positron,
          atribution: tileLayers.baseLayers.cartoDb.atribution,
          //default: true, // <=== To show with this selection
        },
        {
          label: 'Voyager',
          map: tileLayers.baseLayers.cartoDb.map.voyager,
          atribution: tileLayers.baseLayers.cartoDb.atribution,
          default: true, // <=== To show with this selection
        },
      ],
      /*overLayers: [
        {
          label: 'Trail / Hiking',
          map: tileLayers.overlayers.wayMarkedTrails.hiking,
          select: true,
        },
        {
          label: 'Open Railway',
          map: tileLayers.overlayers.openRailway,
          select: false,
        },
      ],*/
    },
    watermark: {
      position: 'bottomleft',
      img: 'https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/graphql-256.png',
      size: '30px',
    },
    /*zoom: {
      zoomInTitle: 'Aumentar',
      zoomOutTitle: 'Alejar',
      position: 'bottomleft'
    }*/
  };
}
