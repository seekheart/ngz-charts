import { NgModule } from '@angular/core';
import { TimelineComponent } from './timeline.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule
  ],
  exports: [TimelineComponent],
  declarations: [TimelineComponent]
})
export class TimelineModule { }
