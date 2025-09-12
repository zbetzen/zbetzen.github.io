import StatBlock from "./StatBlock";

const Brainlet = () => {
  const myStats = 
    {
      str: 0,
      dex: 3,
      con: 0,
      int: 2,
      cha: 0,
      wis: 1,
      hearts: 1,
      morale: 6,
      d4: 0,
      d6: 0,
      d8: 0,
      d10: 0,
      d12: 3,
      weapons: [
        {
          melee: true,
          title: "Tendril",
          bonus: 0,
          dieFace: 4,
          dieBonus: 0,
          notes: ""
        },
      ],
      armor: {
        title: "Evasion",
        bonus: 3,
        notes: "The brainlet will wriggle away, clinging to any surface it can jump to."
      },
      abilities: [
        {
          title: "Brainwaves",
          description: "Your vision blurs and your ears rumble as psychic waves enter your head. Roll WIS vs the Brainlet's INT or lose your next turn."
        },
        {
          title: "Dying memory",
          description: "When the Brainlet dies it releases it's last memories as a person into the nearest mind. Roll WIS vs the Brainlet's INT or lose your next turn."
        },
      ]
    };

    return (
      <div class="bodyElement">
        <h1>Brainlet</h1>
        <StatBlock stats={myStats}/>
      </div>
    );
  };

export default Brainlet;