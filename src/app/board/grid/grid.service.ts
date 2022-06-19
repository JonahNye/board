import { Injectable, Renderer2 } from "@angular/core";
import { GridDimensions } from "./_models/grid.model";

@Injectable() 
export class GridService {

    constructor(
        private _renderer: Renderer2
    ){}

    /**
     * INfers screen width in inches based on dpi and a 1 inch square of the screen
     * @param screenRef a 1 inch x 1 inch element used to infer dpi
     * @returns Grid object
     */
    public getDimensions(screenRef: HTMLDivElement): GridDimensions {
        let dpi_x: number = screenRef.offsetWidth;
        let dpi_y: number = screenRef.offsetHeight;
        let widthInches: number = screen.width / dpi_x;
        let heightInches: number  = screen.height / dpi_y;
        return {
            gridWidthInPixels: screen.width,
            gridHeightInPixels: screen.height,
            gridWidthInInches: widthInches,
            gridHeightInInches: heightInches,
            dpi: screen.pixelDepth
        };
    }

    public buildRow(numberOfCells: number): HTMLDivElement {
        let row : HTMLDivElement = this._renderer.createElement('div');
        this._renderer.addClass(row, 'grid-row');
        for (let i: number = 0; i <= numberOfCells; i++){
            let cell : HTMLDivElement = this._renderer.createElement('div');
            this._renderer.addClass(cell, 'grid-cell');
            this._renderer.addClass(cell, this._applyGridSettings())
            this._renderer.appendChild(row, cell);
        }
        return row;
    }

    private _applyGridSettings(): string {
        return "cell-color-dark"
    }
    
}