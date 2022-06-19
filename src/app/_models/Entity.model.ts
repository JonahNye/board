import { Coordinates, IEntity, SimpleState, SpecialState } from "./IEntity.interface";

export class Entity implements IEntity {

    constructor(elementRef: unknown){
        this.elementRef = elementRef;
        this.setCoordinates();
    }

    elementRef: unknown;
    simpleState: SimpleState | undefined;
    specialState: SpecialState | undefined;
    coordinates: Coordinates | undefined;

    getCoordinates(): Coordinates {
        return {
            xCoordinate: 0,
            yCoordinate: 0,
            zIndex: 1
        }
    }

    setCoordinates(): void {
        this.coordinates = this.getCoordinates()
    }
}