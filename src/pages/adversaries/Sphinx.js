import StatBlock from "./StatBlock";

const Sphinx = () => {
  const myStats = 
    {
      str: 7,
      dex: 5,
      con: 8,
      int: 10,
      cha: 3,
      wis: 3,
      hearts: 4,
      morale: 5,
      d4: 7,
      d6: 0,
      d8: 0,
      d10: 10,
      d12: 10,
      weapons: [
        {
          melee: true,
          title: "Claw",
          bonus: 0,
          dieFace: 4,
          dieBonus: 0,
          notes: "can hit all targets engaged in melee with the sphinx"
        },
        {
          melee: true,
          title: "Consume",
          bonus: 0,
          dieFace: 10,
          dieBonus: 0,
          notes: "acts as a grapple, the target must win an opposed STR roll to break free. If they run out of hitpoints from Consume then they are eaten and their spells memorized."
        },
      ],
      armor: {
        title: "Hide",
        bonus: 0,
        notes: ""
      },
      abilities: [
        {
          title: "Vancian caster",
          description: "Memorized 1d4 spells"
        },
        {
          title: "Spell Burn",
          description: "Whenever someone casts a spell in the Sphinx's presence, as a free action, the sphinx will turn his gaze upon them. Roll WIS against the Sphinx's INT. On a failure use up one spell per day / spell slot"
        },
      ]
    };

    return (
      <div class="bodyElement">
        <h1>Sphinx</h1>
        <StatBlock stats={myStats}/>
      </div>
    );
  };

export default Sphinx;