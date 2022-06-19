import { NgModule } from '@angular/core';

import { LoadSpinnerComponent } from './load-spinner.component';
import { LoadSpinnerService } from './load-spinner.service';

@NgModule({
  declarations: [
    LoadSpinnerComponent
  ],
  imports: [],
  providers: [
    LoadSpinnerService
  ]
})
export class LoadSpinnerModule { }
