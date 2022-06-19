import { Coordinates, IEntity, SimpleState, SpecialState } from "./IEntity.interface";

export class Entity implements IEntity {

    constructor(elementRef: unknown){
        this.elementRef = elementRef;
        this.setCoordinates();
    }

    /**
     * The entity's representation in the UI
     */
    elementRef: unknown;
    
    /**
     * The entity's positioning in the UI
     */
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

    /**
     * Master states determining visiblity and locked status
     */
    simpleState: SimpleState | undefined;
}