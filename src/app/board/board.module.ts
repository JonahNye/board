import { NgModule } from '@angular/core';
import { BoardComponent } from './board.component';
import { BoardService } from './board.service';
import { GridComponent } from './grid/grid.component';


@NgModule({
  declarations: [
    BoardComponent,
    GridComponent
  ],
  imports: [],
  providers: [
    BoardService
  ],
  exports: [
    BoardComponent
  ]
})
export class BoardModule { }