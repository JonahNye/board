import { NgModule } from '@angular/core';
import { BoardComponent } from './board.component';
import { BoardService } from './board.service';
import { GridComponent } from './grid/grid.component';
import { GridService } from './grid/grid.service';


@NgModule({
  declarations: [
    BoardComponent,
    GridComponent
  ],
  imports: [],
  providers: [
    BoardService,
    GridService
  ],
  exports: [
    BoardComponent
  ]
})
export class BoardModule { }