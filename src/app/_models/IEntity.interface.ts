import { ParticalEffectEnum } from "./enums/partical-effect.enum";
import { StatusEffectIconEnum } from "./enums/status-effect.enum";

export interface IEntity extends IHasCoordinates, IIntrospectsCoordinates {
    simpleState?: SimpleState;
    specialState?: SpecialState;
}

export interface IIntrospectsCoordinates {
    getCoordinates(elementRef: unknown) : Coordinates;
}

export interface IHasCoordinates {
    coordinates?: Coordinates
}

export interface Coordinates {
    xCoordinate: number;
    yCoordinate: number;
    zIndex: number;
}

export interface SimpleState {
    isVisible: boolean;
    isMoveable: boolean;
}

export interface SpecialState {
    particalEffect: ParticalEffectEnum;
    statusEffectIcon: StatusEffectIconEnum;
}