import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgLeafletModule } from '@mugan86/ng-leaflet';
import { DefaultLayerComponent } from './1-default-layer-from-library/default-layer.component';
import { AppRoutingModule } from './app-routing.module';
import { ExternalLayerDefaultComponent } from './2-external-layer-default/external-layer-default.component';
import { ControlsOptionsComponent } from './3-controls-options/controls-options.component';

@NgModule({
  imports: [BrowserModule, NgLeafletModule.forRoot(), AppRoutingModule],
  declarations: [
    AppComponent,
    DefaultLayerComponent,
    ExternalLayerDefaultComponent,
    ControlsOptionsComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
