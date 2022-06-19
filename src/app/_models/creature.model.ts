import { Entity } from "./entity.model";
import { StatusEffectState } from "./IEntity.interface";

export class Creature extends Entity {
    statusEffectState?: StatusEffectState;
}