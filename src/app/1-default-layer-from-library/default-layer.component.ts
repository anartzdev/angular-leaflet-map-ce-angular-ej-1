import { Component } from '@angular/core';

import { tileLayers, IConfigMap } from '@mugan86/ng-leaflet';

@Component({
  selector: 'app-default-layer',
  templateUrl: './default-layer.component.html',
  styleUrls: ['./default-layer.component.css'],
})
export class DefaultLayerComponent {
  // 1.- Map with default layer define use predefine layers
  config: IConfigMap = {
    defaultLayer: {
      map: tileLayers.baseLayers.cartoDb.map.positron,
      atribution: tileLayers.baseLayers.cartoDb.atribution,
    },
  };
}
