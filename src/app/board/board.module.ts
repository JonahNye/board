import { NgModule } from '@angular/core';
import { BoardComponent } from './board.component';
import { BoardService } from './board.service';


@NgModule({
  declarations: [
    BoardComponent
  ],
  imports: [],
  providers: [
    BoardService
  ]
})
export class BoardModule { }