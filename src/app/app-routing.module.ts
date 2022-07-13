import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultLayerComponent } from './1-default-layer-from-library/default-layer.component';
import { ExternalLayerDefaultComponent } from './2-external-layer-default/external-layer-default.component';
import { ControlsOptionsComponent } from './3-controls-options/controls-options.component';

const routes: Routes = [
  { path: '', component: DefaultLayerComponent },
  { path: 'external-layer', component: ExternalLayerDefaultComponent },
  { path: 'control-options', component: ControlsOptionsComponent },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
