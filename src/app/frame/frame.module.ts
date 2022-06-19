import { NgModule } from '@angular/core';
import { FrameComponent } from './frame.component';
import { FrameService } from './frame.service';

@NgModule({
  declarations: [
    FrameComponent
  ],
  imports: [],
  providers: [
    FrameService
  ],
  exports: [
    FrameComponent
  ]
})
export class FrameModule { }