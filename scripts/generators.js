var generators = {};

generators.minorAnomaly = function() {
    var roll = dx(20);
    var result = "";

    switch(roll)
    {
        case 1: 
            result = "You feel a sudden surge of confidence! Your next attack roll is made with advantage.";
            break;
        case 2: 
            result = "You feel a surge of uncertainty. Your next attack roll is made with disadvantage.";
            break;
        case 3: 
            result = "You feel resilient. Your next saving throw is made with advantage.";
            break;
        case 4: 
            result = "You feel ill. Your next saving throw is made with disadvantage.";
            break;
        case 5: 
            result = "Your hand becomes covered in flames. Your next melee, ranged, or spell attack deals +1d6 fire damage.";
            break;
        case 6: 
            result = "Your hand becomes covered in a chilling fog. Your next melee, ranged, or spell attack deals +1d6 cold damage.";
            break;
        case 7: 
            result = "Your hand becomes covered in sparks of lightning! Your next melee, ranged, or spell attack deals +1d6 lightning damage.";
            break;
        case 8: 
            result = "Your skin suddenly bursts into flame. Take 2d6 fire damage, and everyone within 5 feet of you must roll a DC 15 DEX saving throw or also suffer 2d6 fire damage.";
            break;
        case 9: 
            result = "Your suddenly feel chilled to the bone. Takes 3d8 frost damage.";
            break;
        case 10: 
            result = "You suddenly emit a bolt of lightning! Take 3d6 lightning damage. A random creature within 10 feet of you must also make a DC 15 dexterity saving throw, or suffer 3d6 fire damage. On a failed save, the bolt will jump from that person to another creature within 10 feet of it. The bolt can jump up to 5 times.";
            break;
        case 11: 
            result = "You disappear suddenly, and reappear 50 feet in a random direction.";
            break;
        case 12: 
            result = "You suddenly turn invisible. This effect remains until you perform an action other than moving, or are harmed.";
            break;    
        case 13: 
            result = "You and all creatures within a 20ft radius centered on you are suddenly overcome by a disgusting taste in your mouths. DC 15 CON save or you vomit uncontrollably for 1d4 minutes.";
            break;
        case 14: 
            result = "Whatever you're holding in your hands is suddenly replaced by a tiny chocolate or vanilla cake. It is tasty.";
            break;
        case 15: 
            result = "A rift opens above your head and dumps ten feet of snow onto you suddenly.";
            break;
        case 16: 
            result = "The ground beneath your feet suddenly turns to a seven foot deep pool of water and you fall in.";
            break;
        case 17: 
            result = "A small portal opens overhead. A group of tiny fae creatures appears, playing magical instruments. DC 15 charisma save, on fail, you are overcome with the urge to dance along. This lasts for 5 minutes.";
            break;
        case 18: 
            result = "You are overcome with the urge to compliment someone nearby. If you fail to do so within 30 seconds, you suffer 5d10 psychic damage.";
            break;
        case 19: 
            result = "You are overcome with the urge to confess a secret out loud. If you fail to do so in 30 seconds, you suffer 5d10 psychic damage.";
            break;
        case 20: 
            result = "Suddenly, a small horde of spiders emerges underneath their armor. DC 15 wisdom save. On a fail, you panic, screaming and trying to get the tiny spiders out from your equipment by any means necessary. Pass or fail, the spiders bite you for 2d4 turns, dealing 1d8 poison damage per turn.";
            break;
    }

    return result;
};

generators.majorAnomaly = function() {
    var roll = dx(20);
    var result = "";

    switch(roll)
    {
        case 1: 
            result = "You feel absolutely crippled. You lose all remaining hit dice for the day.";
            break;
        case 2: 
            result = "You feel emboldened, and regain any spent hit dice.";
            break;
        case 3: 
            result = "A wave of necrotic energy courses through you, sapping the life from your body. Roll all of your remaining hit dice, and deal that much necrotic damage to yourself.";
            break;
        case 4: 
            result = "A wave of soothing energy courses through you. Roll all of your remaining hit dice, and regain that much HP.";
            break;
        case 5: 
            result = "A column of flame, 15x15ft, explodes, centered on you. Anyone inside the column takes 10d6 fire damage.";
            break;
        case 6: 
            result = "You suddenly become encased in ice. You are impervious to damage, but you are frozen for 2d4 minutes. The ice can be melted through traditional meals. At the point of freezing, you suffer 5d8 cold damage.";
            break;
        case 7: 
            result = "You suddenly vomit acid in a straight line, 35 feet in front of you. You take 8d6 acid damage. Anyone in the line must make a dc 15 dexterity saving throw, suffering 5d6 acid damage on a failed save, or half on a success.";
            break;
        case 8: 
            result = "Your next attack strikes with the fury of devils, exploding violently. All creatures within 10 feet of your target, including yourself, must make a DC 15 dex saving throw, or suffer 10d6 fire damage. The target automatically takes this damage. Your hands glow an eerie black and red colour, and become hellish in appearance until your next melee, ranged, or spell attack.";
            break;
        case 9: 
            result = "Your next attack strikes with the vengeance of angels. Your hands glow with golden light until your next melee, ranged, or spell attack. On your next attack, a golden light smites your foe, dealing an additional 8d12 radiant damage.";
            break;
        case 10: 
            result = "You swap lifeforce with the closest creature to you. The creature gains your current hit points, and you gain that creatures current hit points.";
            break;
        case 11: 
            result = "You appear 100 feet above your current position (Or in the nearest available space)";
            break;
        case 12: 
            result = "A trickster spirit possesses your body. For the next 1d10 minutes, you are helpless to watch as another entity controls your every move. Tricksters hate combat, and will remain in wait until a threat is gone, then take over the body of their victim.";
            break;    
        case 13: 
            result = "A massive tree suddenly grows under your feet.";
            break;
        case 14: 
            result = "A delicious looking meal suddenly appears before you. It looks and smells delicious. Eating the food restores your hit points to full, but inflicts two levels of exhaustion upon you. The first can be resisted by a DC 15 CON saving throw, and the second with a DC 25 CON saving throw.";
            break;
        case 15: 
            result = "A rift opens above you and drops a large pond's worth of water on your current position.";
            break;
        case 16: 
            result = "The ground beneath your feet turns to quicksand. It sucks you in after 1d4 turns. Each turn, you can attempt to free yourself. A DC 20 athletics check is required. If you fail by 5 or more, you are pulled deeper into the sand. ";
            break;
        case 17: 
            result = "Your suddenly explode with healing magic! Roll all of your remaining hit dice. They are expended, but all creatures, excluding yourself, within 30ft, regain that much HP.";
            break;
        case 18: 
            result = "You suddenly surge with vampiric energies! Roll all of your remaining hit dice. All creatures within 15 feet of you lose that much HP. You regain half of what was lost.";
            break;
        case 19: 
            result = "Choose a person you can see. Roll a D6.\n1: You now love and adore this person, and must confess it to them.\n2: You now trust this person with your life.\n3: You find yourself agreeing with this person, no matter what they say or do.\n4: You now deeply respect this person.\n5: You now consider this person your best friend.\n6: You suddenly realize that this person is vastly superior to you, and now feel deferent to them.";
            break;
        case 20: 
            result = "You suddenly drop prone, and lose all feeling in your limbs. For 3d6 turns, you are unable to act at all. After this duration, you stand up as if nothing happened.";
            break;
    }

    return result;
};

generators.minorManifest = function() {
    var roll = dx(25);
    var result = "";

    switch(roll)
    {
        case 1: 
            result = "Acidic purge. Your stomach feels unsettled. When you attack with a melee attack, roll a D6. On a 6, you vomit acid instead of your attack, dealing 3d6 acid damage to yourself. Your target makes a DC 15 dexterity saving throw. They take 5d6 acid damage on a failed save, or half as much on a success.";
            break;
        case 2: 
            result = "Chilled Form. You suddenly quite cold, as if you can never get warm. Your speed is reduced by 10. You have disadvantage on ranged weapon and spell attacks, as it becomes more difficult to move your hands. However, all of your attacks, including ranged weapon and spell attacks, deal an additional 2d6 cold damage, and reduce the target's speed by 10 until the start of your next turn.";
            break;
        case 3: 
            result = "Flaming Form. You suddenly feel overheated, and constantly sweat. Periodically, when you are struck with a targeted melee, range, or spell attack, your body bursts into flames. Upon receiving damage from one of the aforementioned attacks, roll a D6. On a 6, flames burst from your body, reaching all creatures within 10 feet. They must succeed on a DC 15 Dexterity Save, or suffer 4d6 fire damage, and half as much on a successful save. While under the effects of this spell, wooden objects start on fire in your grasp, and you have disadvantage when using metal objects for melee or ranged weapon attacks, as the items become superheated in your grasp.";
            break;
        case 4: 
            result = "Projected Force. You feel unusual, as if a power inside you is struggling to get out. When you make a melee or ranged weapon attack, roll a D6. On a 1, the item suddenly flies from your hands, 20 feet backwards. On a 6, the attack knocks your enemy back 10 feet, and knocks yourself back 10 feet.";
            break;
        case 5: 
            result = "Lightning Charged. Your hair begins to stand on end, as you feel electricity flow through your form. All of your damaging spells now deal lightning damage, no matter what their original damage type was. In addition, your touch becomes electric. Whenever you touch a creature, they must succeed on a DC 15 CON save, or suffer 3D6 lightning damage. A creature wearing metal armor has disadvantage on this save.";
            break;
        case 6: 
            result = "Mending Touch. You feel more peaceful, as if all your cares, worries, and anger mean nothing anymore. Any time you make an attack roll, roll a D6. On a 6, your new peaceful mentality overflows, and instead of harming the target, you instead channel healing energies into it, healing it and another creature of your choosing within the same range  for 5d6 hit points. You now regard that creature as a friend instead of an enemy until the creature harms you or an ally.";
            break;
        case 7: 
            result = "Necrotic Touch. You suddenly feel as if a shadow has fallen over you, and that death is right around the corner. Whenever you succeed on an attack roll or friendly spellcast, roll a d4. On a 4, you expend one hit die, dealing that much necrotic damage to yourself, and double the amount to your target. Additionally, plantlife within 10 feet of you begins to wither and die. If you do not have any hit dice remaining, your target takes no damage, and you take the maximum value of that die as necrotic damage.";
            break;
        case 8: 
            result = "Venomous Poison. Whenever you take damage from a piercing or slashing attack, your blood sprays out as venomous poison. The attacker must succeed on a DC 15 CON save, or suffer 4d6 poison damage, and be poisoned. They take half damage on a successful save, and are not poisoned. Additionally, healing potions now harm you, but consuming poisons heals you.";
            break;
        case 9: 
            result = "Psionic Dissonance. You begin to hear constant mental chatter of those around you in your head. You are unable to sort out anything distinct, as your mind struggles to comprehend what you are hearing. You have disadvantage on all perception skill checks. Additionally, whenever you cast a spell, roll a D6. On a 6, instead of casting the spell (the spell slot is preserved), you suffer 3d10 psychic damage, and the targets or affected persons of your intended spell must succeed on a DC 15 INT saving throw or suffer 3d10 psychic damage as well, or half as much on a successful save.";
            break;
        case 10: 
            result = "Angelic Radiance. Your alignment becomes Lawful Good. You suddenly abhor the undead, and sprout small angelic wings from your back. You gain a flight speed of 10. When attacking Undead creatures, you deal an additional 4d10 radiant damage.";
            break;
        case 11: 
            result = "Thunderous Burst. Your ranged weapon and spell attacks sometimes convey a powerful thunderclap upon striking. After succeeding on a ranged or melee spell attack, roll a D6. On a 6, the impact creates a thunderous roar. All creatures within 15 feet of the target must make a DC 15 Strength saving throw or be knocked prone and suffer 3d6 thunder damage. The creature itself suffers 2d12 thunder damage. The feedback from the attack leaves you stunned until the end of your next turn.";
            break;
        case 12: 
            result = "Your eyes change to a random colour.";
            break;    
        case 13: 
            result = "Your hair changes to a random colour.";
            break;
        case 14: 
            result = "Your skin changes to a random colour.";
            break;
        case 15: 
            result = "A small portal opens above you. A tiny raincloud emerges, and constantly rains on your head. This quickly becomes very uncomfortable and distracting.";
            break;
        case 16: 
            result = "You gain the ability to speak with animals.";
            break;
        case 17: 
            result = "You lose the ability to understand written language, aside from spells.";
            break;
        case 18: 
            result = "You no longer understand anything when others speak to you.";
            break;
        case 19: 
            result = "You gain the ability to speak with plants, but you lose the ability to speak with any other creatures.";
            break;
        case 20: 
            result = "When hungry, you now hunger for the raw meat of a fresh kill. Neither rations nor cooked meats satisfy your hunger.";
            break;
        case 21: 
            result = "You lose the ability to insult others. Whenever you do, you suffer 3d10 psychic damage.";
            break;
        case 22: 
            result = "You are overcome by the urge to make amazing puns and battlefield jests. In combat, as a trickster god of theatrics observes your every move. In combat, if you make a pun or dramatic statement before your attack that pleases this god, you will gain advantage and deal an extra 2d8 psychic damage on hit. If you fail, the trickster god may choose to punish you by filling your head with the sounds of crowds booing, distracting you and giving you disadvantage on the attack. He may also smite you for 3d8 lightning damage.";
            break;
        case 23: 
            result = "Whenever you expend a hit dice, you must also expend another nearby willing creature's hit dice, and gain the healing of both. If you cannot find a willing creature, you cannot expend the hit die.";
            break;
        case 24: 
            result = "You levitate 10ft off the ground. You cannot increase or lower this height.";
            break;
        case 25: 
            result = "You suddenly find yourself unable to walk or run normally. Instead, once every turn, you can teleport yourself up to 30ft away to a location you can see.";
            break;
    }

    return result;
};

generators.majorManifest = function() {
    var roll = dx(25);
    var result = "";

    switch(roll)
    {
        case 1: 
            result = "Greater Acidic purge. Your stomach feels unsettled. When you attack with a melee attack, roll a D6. On a 6, you vomit acid instead of your attack, dealing 4d8 acid damage to yourself. Your target makes a DC 20 dexterity saving throw. They take 5d8 acid damage on a failed save, or half as much on a success.";
            break;
        case 2: 
            result = "Greater Frozen Form. You suddenly feel quite cold, as if you can never get warm. Your speed is reduced by 20. You have disadvantage on ranged weapon and spell attacks, as it becomes more difficult to move your hands. However, all of your attacks, including ranged weapon and spell attacks, deal an additional 2d8 cold damage, and reduce the target's speed to 0 until the start of your next turn.";
            break;
        case 3: 
            result = "Greater Flaming Form. You suddenly feel overheated, and constantly sweat. Periodically, when you are struck with a targeted melee, range, or spell attack, your body bursts into flames. Upon receiving damage from one of the aforementioned attacks, roll a D6. On a 6, flames burst from your body, reaching all creatures within 20 feet. They must succeed on a DC 20 Dexterity Save, or suffer 5d8 fire damage, and half as much on a successful save. While under the effects of this spell, wooden objects start on fire in your grasp, and you have disadvantage when using metal objects for melee or ranged weapon attacks, as the items become superheated in your grasp.";
            break;
        case 4: 
            result = "Greater Projected Force. You feel unusual, as if a power inside you is struggling to get out. When you make a melee or ranged weapon attack, roll a D6. On a 1, the item suddenly flies from your hands, 20 feet backwards, and knocking you prone. On a 6, the attack knocks your enemy back 20 feet, and knocks yourself back 20 feet.";
            break;
        case 5: 
            result = "Greater Lightning Charged. Your hair begins to stand on end, as you feel electricity flow through your form. All of your damaging spells now deal lightning damage, no matter what their original damage type was. In addition, your touch becomes electric. Whenever you touch a creature, they must succeed on a DC 20 CON save, or suffer 4D8 lightning damage. A creature wearing metal armor automatically fails this save.";
            break;
        case 6: 
            result = "Greater Mending Touch. You feel more peaceful, as if all your cares, worries, and anger mean nothing anymore. Any time you make an attack roll, roll a D6. On a 6, your new peaceful mentality overflows, and instead of harming the target, you instead channel healing energies into it, healing it, yourself, and another creature of your choosing within the same range for 6d8 hit points. You now regard that creature as a friend instead of an enemy until the creature harms you or an ally.";
            break;
        case 7: 
            result = "Greater Necrotic Touch. You suddenly feel as if a shadow has fallen over you, and that death is right around the corner. Whenever you succeed on an attack roll or friendly spellcast, roll a d4. On a 4, you expend two hit dice, dealing that much necrotic damage to yourself, and double the amount to your target. Additionally, plantlife within 10 feet of you begins to wither and die. If you do not have any hit dice remaining, your target takes no damage, and you take the maximum value of that die as necrotic damage.";
            break;
        case 8: 
            result = "Greater Venomous Poison. Whenever you take damage from a piercing or slashing attack, your blood sprays out as venomous poison. The attacker must succeed on a DC 20 CON save, or suffer 5d8 poison damage, and be poisoned. They take half damage on a successful save, and are not poisoned. Additionally, healing potions now harm you, but consuming poisons heals you.";
            break;
        case 9: 
            result = "Greater Psionic Dissonance. You begin to hear constant mental chatter of those around you in your head. You are unable to sort out anything distinct, as your mind struggles to comprehend what you are hearing. You have disadvantage on all perception skill checks. Additionally, whenever you cast a spell, roll a D6. On a 6, instead of casting the spell (the spell slot is preserved), you suffer 4d12 psychic damage, and the targets or affected persons of your intended spell must succeed on a DC 20 INT saving throw or suffer 4d12 psychic damage as well, or half as much on a successful save.";
            break;
        case 10: 
            result = "Greater Angelic Radiance. Your alignment becomes Lawful Good. You suddenly abhor the undead, and sprout small angelic wings from your back. You gain a flight speed of 20. When attacking Undead creatures, you deal an additional 5d12 radiant damage.";
            break;
        case 11: 
            result = "Greater Thunderous Burst. Your ranged weapon and spell attacks sometimes convey a powerful thunderclap upon striking. After succeeding on a ranged or melee spell attack, roll a D6. On a 6, the impact creates a thunderous roar. All creatures within 15 feet of the target must make a DC 15 Strength saving throw or be knocked prone and suffer 3d6 thunder damage. The creature itself suffers 2d12 thunder damage. The feedback from the attack leaves you stunned until the end of your next turn.";
            break;
        case 12: 
            result = "Your eyes, hair and skin all change to random colours.";
            break;    
        case 13: 
            result = "Your eyes, hair, and skin all change to the same colour.";
            break;
        case 14: 
            result = "The symbol of a trickster god appears on your forehead. At the start of the day, you gain 1d6 + 1 luck dice. A luck die is a D6. You can choose to roll a luck die before taking an action, performing a skill check, or rolling a saving throw. On a 1, you automatically fail, and on a 6, you automatically succeed. Any other value results in a normal roll. Sometimes, you will be forced to use a luck die. ";
            break;
        case 15: 
            result = "A small portal opens above you. A tiny raincloud emerges, and constantly rains on your head. This quickly becomes very uncomfortable and distracting. Periodically during times of stress and combat, it sparks with lightning. You, and any creatures within 5 feet of you must make a DC 15 dexterity saving throw or suffer 4d12 lightning damage. Save halves.";
            break;
        case 16: 
            result = "You gain the ability to speak with animals and plants, but lose the ability to speak with humanoids.";
            break;
        case 17: 
            result = "You lose the ability to understand written language, aside from spells. You can understand all spoken languages.";
            break;
        case 18: 
            result = "You no longer understand anything when others speak to you, or write to you.";
            break;
        case 19: 
            result = "You gain the ability to speak with plants, but you lose the ability to speak with any other creatures, aside from one random nearby creature at the time of your manifestation.";
            break;
        case 20: 
            result = "You lose the ability to insult others. Whenever you do, you suffer 5d12 psychic damage, and must immediately compliment them, or suffer one point of exhaustion.";
            break;
        case 21: 
            result = "When hungry, you now hunger for the raw meat of a fresh humanoid kill. Neither rations nor cooked meats satisfy your hunger.";
            break;
        case 22: 
            result = "You are overcome by the urge to make amazing puns and battlefield jests. In combat, as a trickster god of theatrics observes your every move. In combat, if you make a pun or dramatic statement before your attack that pleases this god, you will gain advantage and deal an extra 3d10 psychic damage on hit. If you fail, the trickster god may choose to punish you by filling your head with the sounds of crowds booing, distracting you and giving you disadvantage on the attack. He may also smite you for 4d12 lightning damage.";
            break;
        case 23: 
            result = "Whenever you expend a hit dice, you must also expend another nearby willing creature's hit dice, and gain the healing of both. If you cannot find a willing creature, you cannot expend the hit die. The willing creature also takes damage equal to the value healed.";
            break;
        case 24: 
            result = "You levitate 20ft off the ground. You cannot increase or lower this height.";
            break;
        case 25: 
            result = "You suddenly find yourself unable to walk or run normally. Your walking speed is decreased to 5 feet. As a move action, you can instead teleport yourself in a direction you can see. Pick a direction or a location. You teleport 1d6 x 10ft in that direction, or to the closest unoccupied space.";
            break;
    }

    return result;
};

generators.minorMutation = function() {
    var roll = dx(26);
    var result = "";

    switch(roll)
    {
        case 1: 
            result = "Aura of Warmth: You permanently exude a low level of warmth to those close to you.";
            break;
        case 2: 
            result = "Aura of Cold: You permanently exude a low level of coolness to those around you.";
            break;
        case 3: 
            result = "Aura of Wind: You permanently have small gusts of wind blowing your hair about dramatically.";
            break;
        case 4: 
            result = "Aura of Repulsion: Creatures that spend more than five minutes next to you must perform a DC 20 Charisma saving throw or become repulsed by you.";
            break;
        case 5: 
            result = "Aura of Attraction: Creatures that spend more than five minutes next to you must succeed on a DC 20 Charisma saving throw or become more willing to interact with you, and more likely to dismiss transgressions.";
            break;
        case 6: 
            result = "Withered Presence: One of your hands becomes withered and unusable. However, Undead no longer react to your presence unless you directly attack them, or they are ordered to directly attack you.";
            break;
        case 7: 
            result = "Warp Mending: For every point of warp you gain, you heal for 1 HP.";
            break;
        case 8: 
            result = "Warp Toxicity: For every point of warp you gain, you suffer 1 damage.";
            break;
        case 9: 
            result = "Warp Shielding: Each time you gain any amount of warp, you gain 1d10 temporary hit points. These do not stack.";
            break;
        case 10: 
            result = "Warp Necrosis: Each time you gain any amount of warp, you gain an anti-healing barrier. The barrier has 1d10 hit points, and absorbs that much healing from the next healing effect used on you. After the barrier's value is reduced to 0, it disappears. This does not stack.";
            break;
        case 11: 
            result = "Warp Spelltwisting: After gaining any amount of warp, you gain a spelltwisting die (1d6). You can use this die to add to a spell hit roll, to your save DC, or to damage for a single spell. You can only have one spelltwisting die at any time.";
            break;
        case 12: 
            result = "Warp Strike: After gaining any amount of warp, you gain a warpstrike die (1d6). You can use this die to add to a hit roll, or damage for any melee or ranged (Non-spell) attack. You can only have one warpstrike die at any time.";
            break;    
        case 13: 
            result = "Thickened Skin: You gain +1 AC, but you have disadvantage on any perception checks that relate to touch.";
            break;
        case 14: 
            result = "Deformity: Your facial features distort and deform. You gain disadvantage to persuasion and diplomacy checks, but advantage to intimidation checks.";
            break;
        case 15: 
            result = "Muscular Deterioration: You gain disadvantage to all skill checks relating to strength. You are visibly thinner.";
            break;
        case 16: 
            result = "Muscular Overgrowth: You gain advantage to all skill checks relating to strength. Your muscles bulge obscenly.";
            break;
        case 17: 
            result = "Dextrous Accuity: You gain advantage to all skill checks relating to dexterity. You become more visibly toned and lithe.";
            break;
        case 18: 
            result = "Dextrous Degeneration: You gain disadvantage to all skill checks relating to dexterity. You become more clumsy.";
            break;
        case 19: 
            result = "Constitutional Fortitude: You gain advantage to all skill checks relating to constitution. You seem visibly more healthy, even when diseased.";
            break;
        case 20: 
            result = "Constitutional Putrefaction: You gain disadvantage to all skill checks relating to constitution. You always appear sickly.";
            break;
        case 21: 
            result = "Intellectual Enhancement: You gain advantage to all skill checks relating to intelligence. Your head appears to bulge as your brain grows larger.";
            break;
        case 22: 
            result = "Intellectual Decline: You gain disadvantage to all skill checks relating to intelligence. People often look at you as if you're a moron.";
            break;
        case 23: 
            result = "Improved Judgment: You gain advantage to all skill checks relating to wisdom. Things that used to anger you don't, and you find yourself to be calm even in the most stressful of times.";
            break;
        case 24: 
            result = "Impaired Judgment: You gain disadvantage to all skill checks relating to wisdom. You always seem frazzled and struggle to keep your focus on any one train of thought.";
            break;
        case 25: 
            result = "Charismatic Allure: You gain advantage to all skill checks relating to charisma. Your facial features begin to change, aligning with how you view your ideal self.";
            break;
        case 26: 
            result = "Charismatic Revulsion: You gain disadvantage to all skill checks relating to charisma. Your facial features begin to change, highlighting all the things you dislike about your apperance..";
            break;
    }

    return result;
};

generators.majorMutation = function() {
    var roll = dx(20);
    var result = "";

    switch(roll)
    {
        case 1: 
            result = "Black Dragon Scales: You grow black scales across your body. You are now resistant to acid damage, but vulnerable to dragonslaying abilities. Your alignment becomes Chaotic Evil.";
            break;
        case 2: 
            result = "Blue Dragon Scales: You grow blue scales across your body. You are now resistant to lightning damage, but vulnerable to dragonslaying abilities. Your alignment becomes Lawful Evil.";
            break;
        case 3: 
            result = "Green Dragon Scales: You grow green scales across your body. You are now resistant to poison damage, but vulnerable to dragonslaying abilities. Your alignment becomes Lawful Evil.";
            break;
        case 4: 
            result = "Red Dragon Scales: You grow red scales across your body. You are now resistant to fire damage, but vulnerable to dragonslaying abilities. Your alignment becomes Chaotic Evil.";
            break;
        case 5: 
            result = "White Dragon Scales: You grow white scales across your body. You are now resistant to cold damage, but vulnerable to dragonslaying abilities. Your alignment becomes Chaotic Evil.";
            break;
        case 6: 
            result = "Brass Dragon Scales: You grow brass scales across your body. You are now resistant to fire damage, but vulnerable to dragonslaying abilities. Your alignment becomes Chaotic Good.";
            break;
        case 7: 
            result = "Bronze Dragon Scales: You grow bronze scales across your body. You are now resistant to lightning damage, but vulnerable to dragonslaying abilities. Your alignment becomes Lawful Good.";
            break;
        case 8: 
            result = "Copper Dragon Scales: You grow copper scales across your body. You are now resistant to acid damage, but vulnerable to dragonslaying abilities. Your alignment becomes Chaotic Good.";
            break;
        case 9: 
            result = "Gold Dragon Scales: You grow golden scales across your body. You are now resistant to fire damage, but vulnerable to dragonslaying abilities. Your alignment becomes Lawful Good.";
            break;
        case 10: 
            result = "Silver Dragon Scales: You grow silver scales across your body. You are now resistant to cold damage, but vulnerable to dragonslaying abilities. Your alignment becomes Lawful Good.";
            break;
        case 11: 
            result = "Stoneskin: Your skin becomes stone. It is consider stone, not flesh, for the purposes of spells and abilities. You can still bleed through wounds. You gain +2 AC.";
            break;
        case 12: 
            result = "Extra Fingers: You gain an extra finger on both hands.";
            break;    
        case 13: 
            result = "Extra Toes: You gain extra toes on both feet.";
            break;
        case 14: 
            result = "Fur: Your body becomes covered in a thick fur of a random colour.";
            break;
        case 15: 
            result = "Small Horns: You grow two small horns on your head, about 2 inches long. They can be used to pierce when attacking, dealing 1d4 + strength piercing damage.";
            break;
        case 16: 
            result = "Large Horns: You grow two large horns on your head, about 8 inches long, and curved.";
            break;
        case 17: 
            result = "Third Eye: You grow a third eye, and it remains open at all times, watchful of your surroundings. You gain +2 to perception and passive perception checks.";
            break;
        case 18: 
            result = "Small tail: You grow a tiny, smooth tail.";
            break;
        case 19: 
            result = "Small furry tail: You grow a small cat-like furry tail.";
            break;
        case 20: 
            result = "Large tail: You grow a large, smooth tail, large enough to trip enemies. You gain the reaction: Trip. When an enemy moves and immediately attacks and hits you with a melee attack, roll a dexterity saving throw. If your dexterity saving throw is higher than their attack roll, the target is tripped and moves behind you, or into the next available space.";
            break;
    }

    return result;
};

generators.transformMutation = function () {
    var roll = dx(20);
    var result = "";

    switch(roll)
    {
        case 1: 
            result = "";
            break;
        case 2: 
            result = "";
            break;
        case 3: 
            result = "";
            break;
        case 4: 
            result = "";
            break;
        case 5: 
            result = "";
            break;
        case 6: 
            result = "";
            break;
        case 7: 
            result = "";
            break;
        case 8: 
            result = "";
            break;
        case 9: 
            result = "";
            break;
        case 10: 
            result = "";
            break;
        case 11: 
            result = "";
            break;
        case 12: 
            result = "";
            break;    
        case 13: 
            result = "";
            break;
        case 14: 
            result = "";
            break;
        case 15: 
            result = "";
            break;
        case 16: 
            result = "";
            break;
        case 17: 
            result = "";
            break;
        case 18: 
            result = "";
            break;
        case 19: 
            result = "";
            break;
        case 20: 
            result = "";
            break;
    }

    return result;
};

generators.genRace = function () {
   var races = ["Dragonborn", "Dwarf", "Elf", "Gnome", "Half-Elf", "Halfling", "Half-Orc", "Human", "Tiefling", "Aarakocra", "Genasi", "Goliath", 
                "Aasimar", "Bugbear", "Firbolg", "Goblin", "Hobgoblin", "Kenku", "Kobold", "Lizardfolk", "Orc", "Tabaxi", "Triton", "Yuan-Ti Pureblood", 
                "Gith", "Changeling", "Kalashtar", "Shifter", "Warforged", "Centaur", "Minotaur", "Human", "Human", "Human"];
   var chosenRace = races[Math.floor(Math.random()*races.length)];
   return getRaceDetails(chosenRace);
};

function getRaceDetails(chosenRace) {
    var race = {
        name: "",
        str: 0,
        dex: 0,
        con: 0,
        int: 0,
        wis: 0,
        cha: 0
   };

   if (chosenRace == "Dragonborn")
   {
        race.name = chosenRace;
        race.str = 2;
        race.cha = 1;
   }
   else if (chosenRace == "Dwarf")
   {
       race.con = 2;
       switch (dx(2))
       {
            case 1:
                race.name = "Hill Dwarf";
                race.wis = 1;
                break;
            case 2:
                race.name = "Mountain Dwarf";
                race.str = 2;
                break;
            case 3:
                race.name = "Duergar";
                race.str = 1;
                break;
       }
   }
   else if (chosenRace == "Elf")
   {
        race.dex = 2;
        switch (dx(6))
        {
            case 1:
                race.name = "High Elf";
                race.int = 1;
                break;
            case 2:
                race.name = "Wood Elf"
                race.wis = 1;
                break;
            case 3:
                race.name = "Drow";
                race.cha = 1;
                break;
            case 4:
                var seasons = ["Spring", "Summer", "Autumn", "Winter"];
                race.name = seasons[Math.floor(Math.random()*seasons.length)] + " Eladrin";
                race.cha = 1;
                break;
            case 5:
                race.name = "Sea Elf";
                race.con = 1;
                break;
            case 6:
                race.name = "Shadar-Kai";
                race.con = 1;
                break;
        }
   }
   else if (chosenRace == "Gnome")
   {
        race.int = 2;
        switch (dx(3))
        {
            case 1:
                race.name = "Deep Gnome";
                race.dex = 1;
                break;
            case 2:
                race.name = "Rock Gnome";
                race.con = 1;
                break;
            case 3:
                race.name = "Forest Gnome";
                race.dex = 1;
                break;
        }
   }
   else if (chosenRace == "Half-Elf")
   {
        var firstRoll = 0;
        race.cha = 2;
        firstRoll = dx(5);
        var secondRoll = firstRoll;
        switch (firstRoll)
        {
            case 1:
                race.str = 1;
                break;
            case 2:
                race.dex = 1;
                break;
            case 3:
                race.con = 1;
                break;
            case 4:
                race.int = 1;
                break;
            case 5:
                race.wis = 1;
                break;
        }
        while (secondRoll == firstRoll)
        {
            secondRoll = dx(5);
        }
        switch (secondRoll)
        {
            case 1:
                race.str = 1;
                break;
            case 2:
                race.dex = 1;
                break;
            case 3:
                race.con = 1;
                break;
            case 4:
                race.int = 1;
                break;
            case 5:
                race.wis = 1;
                break;
        }
   }
   else if (chosenRace == "Halfling")
   {
       race.dex = 2;
       switch(dx(2))
       {
            case 1:
                race.name = "Lightfoot Halfling";
                race.cha = 1;
                break;
            case 2:
                race.name = "Stout Halfling";
                race.con = 1;
                break;
       }
   }
   else if (chosenRace == "Half-Orc")
   {
        race.name = chosenRace;
        race.str = 2;
        race.con = 1;
   }
   else if (chosenRace == "Human")
   {
        var humanSubtypes = ["Calishite", "Chondathan", "Damaran", "Illuskan", "Mulan", "Rashemi", "Shou", "Tethyrian", "Turami"];
        race.name = humanSubtypes[Math.floor(Math.random()*humanSubtypes.length)] + " Human";
        race.str = 1;
        race.dex = 1;
        race.con = 1;
        race.int = 1;
        race.wis = 1;
        race.cha = 1;
   }
   else if (chosenRace == "Tiefling")
   {
       switch(dx(9))
       {
            case 1:
                race.name = "Asmodean Tiefling";
                race.int = 1;
                race.cha = 2;
                break;
            case 2:
                race.name = "Baalzebulian Tiefling";
                race.int = 1;
                race.cha = 2;
                break;
            case 3:
                race.name = "Dispaterian Tiefling";
                race.dex = 1;
                race.cha = 2;
                break;
            case 4:
                race.name = "Fiernan Tiefling";
                race.wis = 1;
                race.cha = 2;
                break;
            case 5:
                race.name = "Glasyan Tiefling";
                race.dex = 1;
                race.cha = 2;
                break;
            case 6:
                race.name = "Levistusian Tiefling";
                race.con = 1;
                race.cha = 2;
                break;
            case 7:
                race.name = "Mammonian Tiefling";
                race.int = 1;
                race.cha = 2;
                break;
            case 8:
                race.name = "Mephistopholesian Tiefling";
                race.int = 1;
                race.cha = 2;
                break;
            case 9:
                race.name = "Zarielian Tiefling";
                race.str = 1;
                race.cha = 2;
                break;
       }
   }
   else if (chosenRace == "Aarakocra")
   {
       race.name = chosenRace;
       race.dex = 2;
       race.wis = 1;

   }
   else if (chosenRace == "Genasi")
   {
       race.con = 2;
       switch (dx(4))
       {
            case 1:
                race.name = "Air Genasi";
                race.dex = 1;
                break;
            case 2:
                race.name = "Earth Genasi";
                race.str = 1;
                break;
            case 3:
                race.name = "Fire Genasi";
                race.int = 1;
                break;
            case 4:
                race.name = "Water Genais"
                race.wis = 1;
                break;
       }
   }
   else if (chosenRace == "Goliath")
   {
       race.name = chosenRace;
       race.str = 2;
       race.con = 1;
   }
   else if (chosenRace == "Aasimar")
   {
       race.cha = 2;
       switch (dx(3)){
           case 1:
                race.name = "Protector Aasimar";
                race.wis = 1;
                break;
            case 2:
                race.name = "Scourge Aasimar";
                race.con = 1;
                break;
            case 3:
                race.name = "Fallen Aasimar";
                race.str = 1;
                break;
       }
   }
   else if (chosenRace == "Bugbear")
   {
       race.name = chosenRace;
       race.str = 2;
       race.dex = 1;
   }
   else if (chosenRace == "Firbolg")
   {
       race.name = chosenRace;
       race.wis = 2;
       race.str = 1;
   }
   else if (chosenRace == "Goblin")
   {
        race.name = chosenRace;
        race.dex = 2;
        race.con = 1;
   }
   else if (chosenRace == "Hobgoblin")
   {
        race.name = chosenRace;
        race.con = 2;
        race.int = 1;
   }
   else if (chosenRace == "Kenku")
   {
        race.name = chosenRace;
        race.dex = 2;
        race.wis = 1;
   }
   else if (chosenRace == "Kobold")
   {
        race.name = chosenRace;
        race.dex = 2;
        race.str = -2;
   }
   else if (chosenRace == "Lizardfolk")
   {
        race.name = chosenRace;
        race.con = 2;
        race.wis = 1;
   }
   else if (chosenRace == "Orc")
   {
        race.name = chosenRace;
        race.str = 2;
        race.con = 1;
        race.int = -2;
   }
   else if (chosenRace == "Tabaxi")
   {
        race.name = chosenRace;
        race.dex = 2;
        race.cha = 1;
   }
   else if (chosenRace == "Triton")
   {
        race.name = chosenRace;
        race.str = 1;
        race.con = 1;
        race.cha = 1;
   }
   else if (chosenRace == "Yuan-Ti Pureblood")
   {
        race.name = chosenRace;
        race.cha = 2;
        race.int = 1;
   }
   else if (chosenRace == "Gith")
   {
       race.int = 1;
       switch(dx(2)){
            case 1:
                race.name = "Githyanki";
                race.str = 2;
                break;
            case 2:
                race.name = "Githzerai";
                race.wis = 2;
                break;
       }
   }
   else if (chosenRace == "Changeling")
   {
       race.name = chosenRace;
       race.cha = 2;
       switch(dx(2)){
            case 1:
                race.dex = 1;
                break;
            case 2:
                race.int = 1;
                break;
       }
   }
   else if (chosenRace == "Kalashtar")
   {
       race.name = chosenRace;
       race.wis = 1;
       race.cha = 1;
       switch (dx(6))
        {
            case 1:
                race.str = 1;
                break;
            case 2:
                race.dex = 1;
                break;
            case 3:
                race.con = 1;
                break;
            case 4:
                race.int = 1;
                break;
            case 5:
                race.wis = 2;
                break;
            case 6:
                race.cha = 2;
                break;
        }
   }
   else if (chosenRace == "Shifter")
   {
        race.dex = 1;
        switch(dx(4)){
            case 1:
                race.name = "Beasthide Shifter";
                race.con = 2;
                break;
            case 2:
                race.name = "Longtooth Shifter";
                race.str = 2;
                break;
            case 3:
                race.name = "Swiftstride Shifter";
                race.dex = 2;
                race.cha = 1;
                break;
            case 4:
                race.name = "Wildhunt Shifter";
                race.wis = 2;
                break;
    }
   }
   else if (chosenRace == "Warforged")
   {
       race.con = 1;
       switch(dx(3)){
        case 1:
            race.name = "Warforged Envoy";
            var firstRoll = dx(6);
            var secondRoll = firstRoll;
            switch (firstRoll)
            {
                case 1:
                    race.str = 1;
                    break;
                case 2:
                    race.dex = 1;
                    break;
                case 3:
                    race.con = 2;
                    break;
                case 4:
                    race.int = 1;
                    break;
                case 5:
                    race.wis = 1;
                    break;
                case 6:
                    race.cha = 1;
                    break;
            }
            while (secondRoll == firstRoll)
            {
                secondRoll = dx(6);
            }
            switch (secondRoll)
            {
                case 1:
                    race.str = 1;
                    break;
                case 2:
                    race.dex = 1;
                    break;
                case 3:
                    race.con = 2;
                    break;
                case 4:
                    race.int = 1;
                    break;
                case 5:
                    race.wis = 1;
                    break;
                case 6:
                    race.cha = 1;
                    break;
            }
            break;
        case 2:
            race.name = "Warforged Juggernaut";
            race.str = 2;
            break;
        case 3:
            race.name = "Warforged Skirmisher";
            race.dex = 2;
            break;
        }
   }
   else if (chosenRace == "Centaur")
   {
       race.name = chosenRace;
       race.str = 2;
       race.wis = 1;
   }
   else if (chosenRace == "Minotaur")
   {
       race.name = chosenRace;
       race.str = 2;
       race.con = 1;
   }
   else
   {
        race.name = "Unknown/Error";
   }

   return race;
};

generators.genAttributes = function () {
    var attrs = {
        str: 0,
        dex: 0,
        con: 0,
        int: 0,
        wis: 0,
        cha: 0
    };

    attrs.str = getAttributeRoll();
    attrs.dex = getAttributeRoll();
    attrs.con = getAttributeRoll();
    attrs.int = getAttributeRoll();
    attrs.wis = getAttributeRoll();
    attrs.cha = getAttributeRoll();

    return attrs;
};

generators.genAlignment = function () {
    var alignment = "";
    var ges = ["Good", "Neutral", "Evil"];
    var lcs = ["Lawful", "Neutral", "Chaotic"];
    var ge = ges[Math.floor(Math.random()*ges.length)];
    var lc = lcs[Math.floor(Math.random()*lcs.length)];
    if (ge == lc)
    {
        alignment = "True Neutral";
    }    
    else 
    {
        alignment = lc + " " + ge;
    }
    
    return alignment;
};

generators.genClass = function () {
    var classList = ["Barbarian", "Bard", "Cleric", "Druid", "Fighter", "Monk", "Paladin", "Ranger", "Rogue", "Sorceror", "Warlock", "Wizard"];
    return classList[Math.floor(Math.random() * classList.length)];
};

function sortNumber(a,b) {
    return a - b;
}

function getAttributeRoll() {
    var rolls = [];
    for (var i = 0; i < 4; i++ )
    {
        rolls.push(dx(6));
    }
    rolls.sort(sortNumber);
    rolls.shift();
    return rolls.pop() + rolls.pop() + rolls.pop();
};

generators.generateBackground = function () {
    var backgrounds =  ["Acolyte", "Charlatan", "Criminal", "Criminal (Spy)", "Entertainer", "Folk Hero", "Gladiator", "Guild Artisan", "Guild Artisan (Merchant)", 
                        "Hermit", "Knight", "Noble", "Outlander", "Pirate", "Sage", "Sailor", "Soldier", "Urchin", "Anthropologist", "Archaeologist"];
    return backgrounds[Math.floor(Math.random() * backgrounds.length)];
};

generators.alteredCreature = function() {
    var text = "";
    var baseCreatures = ["Frog", "Sea Horse", "Baboon", "Badger", "Bat", "Cat", "Crab", "Cranium Rat", "Deer", "Eagle", "Giant Fire Beetle",
                        "Goat", "Hawk", "Hyena", "Jackal", "Lizard", "Octopus", "Owl", "Quipper", "Rat", "Raven", "Scorpion", "Spider",
                        "Vulture", "Weasel", "Blood Hawk", "Camel", "Dolphin", "Flying Snake", "Mastiff", "Mule", "Poisonous Snake", 
                        "Pony", "Stirge", "Axe Beak", "Boar", "Constrictor Snake", "Cow", "Deep Rothe", "Dimetrodon", "Draft Horse",
                        "Elk", "Hadrosaurus", "Ox", "Panther", "Pteranodon", "Riding Horse", "Rothe", "Stench Kow", "Velociraptor",
                        "Wolf", "Ape", "Black Bear", "Crocodile", "Wasp", "Reef Shark", "Warhorse", "Brown Bear", "Deinonychus", "Dire Wolf",
                        "Lion", "Tiger", "Allosaurus", "Aurochs", "Cave Bear", "Hunter Shark", "Pleiosaurus", "Polar Bear", "Quetzalocoatlus",
                        "Rhinosceros", "Ankylosaurus", "Killer Whale", "Elephant", "Stegosaurus", "Brontosaurus", "Triceratops", "Mammoth",
                        "Tyrannosaurus Rex", "Aarakocra", "Acolyte", "Archmage", "Assassin", "Bandit", "Berserker", "Bugbear", "Bullywug",
                        "Commoner", "Cult Fanatic", "Deep Scion", "Derro", "Drow", "Druid", "Duergar", "Firenewt", "Flind", "Giff", "Githyanki",
                        "Githzerai", "Gladiator", "Gnoll", "Goblin", "Hobgoblin", "Half-Dragon (Chromatic)", "Half-Dragon (Metallic)", 
                        "Half-Dragon (Other/Misc)", "Jackalwere", "Kenku", "Knight", "Kobold", "Kuo-Toa", "Lizardfolk", "Merfolk", "Nilbog",
                        "Orc", "Noble", "Priest", "Quaggoth", "Sahuagin", "Sea Spawn", "Skulk", "Soul Monger", "Thri-Kreen", "Ant", "Tortle", 
                        "Tribal Warrior", "Troglodyte", "Weretiger", "Werewolf", "Werebear", "Yuan-Ti", "Dracolich", "Allip", "Banshee", "Zombie",
                        "Deathlock", "Death Knight", "Boneclaw", "Demilich", "Flameskull", "Ghost", "Ghast", "Ghoul", "Lich", "Mummy", "Shadow", 
                        "Skull Lord", "Sword Wraith", "Vampire", "Wight", "Wraith", "Beholder", "Slaad", "Chuul", "Choker", "Cloaker", "Elder Brain", 
                        "Flumph", "Gibbering Mouther", "Grell", "Intellect Devourer", "Mind Flayer", "Otyugh", "Star Spawn", "Ulitharid", "Deva", 
                        "Empyrean", "Solar", "Unicorn", "Planetar", "Pegasus", "Ki-Rin", "Dragon (Chromatic)", "Dragon (Metallic)", "Dragon (Misc/Other)",
                        "Air Elemental", "Earth Elemental", "Efreeti", "Dao", "Elder Tempest", "Fire Elemental", "Gargoyle", "Invisible Stalker", 
                        "Leviathan", "Marid", "Phoenix", "Water Elemental", "Water Weird", "Xorn", "Zaratan", "Hag", "Spring Eladrin", "Autumn Eladrin", 
                        "Summer Eladrin", "Winter Eladrin", "Darkling", "Blink Dog", "Dryad", "Pixie", "Quickling", "Satyr", "Sprite", "Imp", 
                        "Bearded Devil", "Hell Hound", "Barghest", "Incubus", "Shadow Demon", "Succubus", "Barlgura", "Barbed Devil", "Cambion", 
                        "Vrock", "Abishai", "Howler", "Bone Devil", "Hydroloth", "Orthon", "Horned Devil", "Erinyes", "Devourer", "Marilith", "Ogre",
                        "Ettin", "Hill Giant", "Troll", "Cyclops", "Oni", "Stone Giant", "Fomorian", "Frost Giant", "Cloud Giant", "Fire Giant", "Storm Giant", 
                        "Cockatrice", "Darkmantle", "Piercer", "Rust Monster", "Worg", "Death Dog", "Giant Strider", "Harpy", "Ankheg", "Carrion Crawler", 
                        "Centaur", "Ettercap", "Grick", "Griffon", "Mimic", "Peryton", "Basilisk", "Cave Fisher", "Choldrith", "Displacer Beast", 
                        "Hook Horror", "Minotaur", "Owlbear", "Manticore", "Phase Spider", "Yeti", "Girallon", "Lamia", "Bulette", "Gorgon", "Kruthik", 
                        "Roper", "Umber Hulk", "Remorhaz", "Chimera", "Drider", "Medusa", "Hydra", "Naga", "Behir", "Roc", "Purple Worm", 
                        "Astral Dreadnaught", "Kraken", "Tarrasque", "Oblex", "Gray Ooze", "Gelatinous Cube", "Ochre Jelly", "Black Pudding", "Rabbit", "Fox",
                        "Chameleon", "Sheep", "Goat", "Stag", "Mouse", "Kraken", "Octopus", "Ostrich", "Moose", "Horse"];

    var influences = ["the Ethereal Plane", "Planar Warp", "the Plane of Fire", "the Plane of Earth", "the Plane of Water", "the Plane of Air", "The Astral Plane",
                    "the Feywild", "the Shadowfell", "Mount Celestia", "Bytopia", "Elysium", "The Beastlands", "Arborea", "Ysgard", "Limbo", "Pandemonium", "The Abyss", 
                    "Carceri", "Hades", "Gehenna", "The Nine Hells of Baator", "Acheron", "Mechanus", "Arcadia", "the will to form civilization", "Plantlife", "Crystals",
                    "Trees", "Future", "Dreams", "Nightmares", "Blood"];
    text = "A (an) " + baseCreatures[Math.floor(Math.random()*baseCreatures.length)] + ", forever changed by the influence of " + influences[Math.floor(Math.random()*influences.length)] + ".";

    return text;
}


function dx(num){
    return Math.floor((Math.random() * num) + 1);
};

module.exports = generators;
