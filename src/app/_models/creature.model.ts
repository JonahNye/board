import { Entity } from "./entity.model";
import { StatusEffectState } from "./IEntity.interface";

/**
 * Represents tokens for creatures. distinct from items and entities in that they can have status effects applied to them
 */
export class Creature extends Entity {
    statusEffectState?: StatusEffectState;
}