import { Entity } from "./Entity.model";
import { StatusEffectState } from "./IEntity.interface";

export class Creature extends Entity {
    statusEffectState?: StatusEffectState;
}