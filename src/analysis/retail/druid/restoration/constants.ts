import SPELLS from 'common/SPELLS';
import Spell from 'common/SPELLS/Spell';

export const REJUVENATION_BUFFS: Spell[] = [SPELLS.REJUVENATION, SPELLS.REJUVENATION_GERMINATION];

export const LIFEBLOOM_BUFFS: Spell[] = [
  SPELLS.LIFEBLOOM_HOT_HEAL,
  SPELLS.LIFEBLOOM_UNDERGROWTH_HOT_HEAL,
];

// TODO double check the entries on this list for Dragonflight

export const ABILITIES_AFFECTED_BY_HEALING_INCREASES: number[] = [
  SPELLS.REJUVENATION.id,
  SPELLS.REJUVENATION_GERMINATION.id,
  SPELLS.REGROWTH.id,
  SPELLS.WILD_GROWTH.id,
  SPELLS.CULTIVATION.id,
  SPELLS.SPRING_BLOSSOMS.id,
  SPELLS.CENARION_WARD_HEAL.id,
  // frenzied regen?
  SPELLS.LIFEBLOOM_HOT_HEAL.id,
  SPELLS.LIFEBLOOM_UNDERGROWTH_HOT_HEAL.id,
  SPELLS.LIFEBLOOM_BLOOM_HEAL.id,
  SPELLS.SWIFTMEND.id,
  SPELLS.TRANQUILITY_HEAL.id,
  SPELLS.EFFLORESCENCE_HEAL.id,
  SPELLS.ADAPTIVE_SWARM_HEAL.id,
  SPELLS.GROVE_TENDING.id,
  SPELLS.VERDANCY.id,
];

// procs Nature's Vigil
export const SINGLE_TARGET_HEALING: Spell[] = [
  SPELLS.REJUVENATION,
  SPELLS.REJUVENATION_GERMINATION,
  SPELLS.REGROWTH,
  SPELLS.CULTIVATION,
  SPELLS.SPRING_BLOSSOMS, // for some reason lol
  SPELLS.CENARION_WARD_HEAL,
  SPELLS.FRENZIED_REGENERATION,
  SPELLS.LIFEBLOOM_HOT_HEAL,
  SPELLS.LIFEBLOOM_UNDERGROWTH_HOT_HEAL,
  SPELLS.LIFEBLOOM_BLOOM_HEAL,
  SPELLS.SWIFTMEND,
  SPELLS.ADAPTIVE_SWARM_HEAL,
  SPELLS.GROVE_TENDING,
  SPELLS.VERDANCY, // TODO double check
];

export const ABILITIES_AFFECTED_BY_HEALING_INCREASES_SPELL_OBJECTS = ABILITIES_AFFECTED_BY_HEALING_INCREASES.map(
  (id) => SPELLS[id],
);

/** IDs of all buffs that give a mastery stack */
export const MASTERY_STACK_BUFF_IDS: number[] = [
  SPELLS.REJUVENATION.id,
  SPELLS.REJUVENATION_GERMINATION.id,
  SPELLS.REGROWTH.id,
  SPELLS.WILD_GROWTH.id,
  SPELLS.CULTIVATION.id,
  SPELLS.SPRING_BLOSSOMS.id,
  SPELLS.CENARION_WARD_HEAL.id,
  SPELLS.FRENZIED_REGENERATION.id,
  SPELLS.LIFEBLOOM_HOT_HEAL.id,
  SPELLS.LIFEBLOOM_UNDERGROWTH_HOT_HEAL.id,
  SPELLS.TRANQUILITY_HEAL.id,
  SPELLS.ADAPTIVE_SWARM_HEAL.id,
  SPELLS.RENEWING_BLOOM.id,
  SPELLS.GROVE_TENDING.id,
];

// HoTs that get rate increased by Flourish
export const FLOURISH_INCREASED_RATE = [
  SPELLS.REJUVENATION,
  SPELLS.REJUVENATION_GERMINATION,
  SPELLS.REGROWTH,
  SPELLS.WILD_GROWTH,
  SPELLS.CULTIVATION,
  SPELLS.CENARION_WARD_HEAL,
  SPELLS.LIFEBLOOM_HOT_HEAL,
  SPELLS.LIFEBLOOM_UNDERGROWTH_HOT_HEAL,
  SPELLS.TRANQUILITY_HEAL,
  SPELLS.ADAPTIVE_SWARM_HEAL,
  SPELLS.RENEWING_BLOOM,
  SPELLS.GROVE_TENDING,
];

// HoTs that get rate increased by Photosynthesis, which is different from the Flourish one because Blizzard
export const PHOTO_INCREASED_RATE = [
  ...FLOURISH_INCREASED_RATE,
  SPELLS.SPRING_BLOSSOMS,
  SPELLS.EFFLORESCENCE_HEAL,
];
