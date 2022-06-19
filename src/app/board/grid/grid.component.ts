import { AfterViewInit, Component, Renderer2, ViewChild } from '@angular/core';
import { GridService } from './grid.service';
import { GridDimensions } from './_models/grid.model';

@Component({
  selector: 'grid-component',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements AfterViewInit {
  @ViewChild("screenRef") public screenRef: HTMLDivElement | undefined;
  
  public gridDimensions: GridDimensions | undefined;
  
  constructor(
    private _gridService: GridService,
    private _renderer: Renderer2
    ) { }

  ngAfterViewInit(): void {
    this._getGridDimensions();
  }

  private _getGridDimensions (): void {
    if (this.screenRef){
    this.gridDimensions = this._gridService.getDimensions(this.screenRef);
    }
  }

  public buildRow(): HTMLDivElement{
    return this._gridService.buildRow(this.gridDimensions?.gridWidthInInches as number, this._renderer);
  }
}
