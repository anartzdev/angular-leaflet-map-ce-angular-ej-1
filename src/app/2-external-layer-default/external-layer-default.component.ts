import { Component } from '@angular/core';
import { IConfigMap, tileLayers } from '@mugan86/ng-leaflet';
import { THUNDERFOREST_LAYERS } from '../thunderforest-layers';

@Component({
  selector: 'app-external-layer-default',
  templateUrl: './external-layer-default.component.html',
  styleUrls: ['./external-layer-default.component.css'],
})
export class ExternalLayerDefaultComponent {
  config: IConfigMap = {
    defaultLayer: {
      map: THUNDERFOREST_LAYERS.Pioneer,
      atribution: tileLayers.baseLayers.default.atribution,
    },
  };
}
