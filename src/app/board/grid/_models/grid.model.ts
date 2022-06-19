export class GridDimensions {
    constructor(
        gridWidthInPixels: number,
        gridHeightInPixels: number,
        gridWidthInInches: number,
        gridHeightInInches: number,
        dpi: number
    ){
        this.gridWidthInPixels = gridWidthInPixels;
        this.gridHeightInPixels = gridHeightInPixels;
        this.gridWidthInInches = gridWidthInInches;
        this.gridHeightInInches = gridHeightInInches;
        this.dpi = dpi;
    }
    public gridWidthInPixels: number = 0;
    public gridHeightInPixels: number = 0;
    public dpi: number = 0;
    public gridWidthInInches: number = 0;
    public gridHeightInInches: number = 0;
}