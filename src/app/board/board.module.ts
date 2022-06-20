import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BoardComponent } from './board.component';
import { BoardService } from './board.service';
import { GridComponent } from './grid/grid.component';
import { GridService } from './grid/grid.service';


@NgModule({
  declarations: [
    BoardComponent,
    GridComponent
  ],
  imports: [
    CommonModule,
    BrowserModule
  ],
  providers: [
    BoardService,
    GridService
  ],
  exports: [
    BoardComponent
  ]
})
export class BoardModule { }