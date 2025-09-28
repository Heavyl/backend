import type { Schema, Struct } from '@strapi/strapi';

export interface BonusAttack extends Struct.ComponentSchema {
  collectionName: 'components_bonus_attacks';
  info: {
    displayName: 'Dice roll';
  };
  attributes: {
    constant: Schema.Attribute.Integer;
    dice: Schema.Attribute.String;
    multiplier: Schema.Attribute.Integer;
    statsRoll: Schema.Attribute.Enumeration<
      [
        'force',
        'agility',
        'luck',
        'vigilance',
        'constitution',
        'resistance',
        'faith',
        'intelligence',
      ]
    >;
  };
}

export interface BonusBuff extends Struct.ComponentSchema {
  collectionName: 'components_bonus_buffs';
  info: {
    displayName: 'Buff';
  };
  attributes: {};
}

export interface CharacterInventory extends Struct.ComponentSchema {
  collectionName: 'components_character_inventories';
  info: {
    displayName: 'Inventory';
    icon: 'grid';
  };
  attributes: {
    experience: Schema.Attribute.Integer;
    items: Schema.Attribute.Relation<'oneToMany', 'api::item.item'>;
    money: Schema.Attribute.Integer;
  };
}

export interface CharacterStats extends Struct.ComponentSchema {
  collectionName: 'components_character_stats';
  info: {
    displayName: 'Stats';
    icon: 'connector';
  };
  attributes: {
    agility: Schema.Attribute.Integer;
    constitution: Schema.Attribute.Integer;
    faith: Schema.Attribute.Integer;
    force: Schema.Attribute.Integer;
    intelligence: Schema.Attribute.Integer;
    luck: Schema.Attribute.Integer;
    madness: Schema.Attribute.Integer;
    mental: Schema.Attribute.Integer;
    pvmax: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
    resistance: Schema.Attribute.Integer;
    vigilance: Schema.Attribute.Integer;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'bonus.attack': BonusAttack;
      'bonus.buff': BonusBuff;
      'character.inventory': CharacterInventory;
      'character.stats': CharacterStats;
    }
  }
}
