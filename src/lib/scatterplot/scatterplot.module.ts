import { ScatterplotComponent } from './scatterplot.component';
import { SharedModule } from '../shared/shared.module';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [ SharedModule ],
  declarations: [ ScatterplotComponent ],
  exports: [ ScatterplotComponent ]
})

export class ScatterplotModule {}
