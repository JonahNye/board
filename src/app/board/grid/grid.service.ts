import { ElementRef, Injectable, Renderer2 } from "@angular/core";
import { GridDimensions } from "./_models/grid.model";

@Injectable() 
export class GridService {

    constructor(){}

    /**
     * INfers screen width in inches based on dpi and a 1 inch square of the screen
     * @param screenRef a 1 inch x 1 inch element used to infer dpi
     * @returns Grid object
     */
    public getDimensions(screenRef: ElementRef): GridDimensions {
        let dpi_x: number = screenRef.nativeElement.offsetWidth;
        let dpi_y: number = screenRef.nativeElement.offsetHeight;
        let widthInches: number = screen.width / dpi_x;
        let heightInches: number  = screen.height / dpi_y;
        return {
            gridWidthInPixels: screen.width,
            gridHeightInPixels: screen.height,
            gridWidthInInches: Math.floor(widthInches),
            gridHeightInInches: Math.floor(heightInches),
            dpi: screen.pixelDepth
        };
    }

    /**
     * A to be implemented function: allows users to manually set screen bounds in settings
     */
    public overrideDimensions(gridDimensions : GridDimensions, width: number, height: number): void {

    }

    public buildGrid(gridDimensions: GridDimensions, renderer: Renderer2): HTMLDivElement {
        let grid: HTMLDivElement = renderer.createElement('div');
        for (let i: number = 0; i <= gridDimensions.gridHeightInInches; i++){
            let row : HTMLDivElement = this._buildRow(gridDimensions, renderer);
            renderer.appendChild(grid, row);
        }
        return grid;
    }

    private _buildRow(gridDimensions: GridDimensions, renderer: Renderer2): HTMLDivElement {
        let row : HTMLDivElement = renderer.createElement('div');
        renderer.addClass(row, 'grid-row');
        for (let i: number = 0; i <= gridDimensions.gridWidthInInches; i++){
            let cell : HTMLDivElement = renderer.createElement('div');
            renderer.addClass(cell, 'grid-cell');
            renderer.addClass(cell, this._applyGridSettings())
            renderer.appendChild(row, cell);
        }
        return row;
    }

    private _applyGridSettings(): string {
        return "cell-color-dark"
    }
    
}