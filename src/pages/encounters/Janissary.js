import StatBlock from "./StatBlock";

const Janissary = () => {
  const myStats = 
    {
      str: 1,
      dex: 2,
      con: 2,
      int: 0,
      cha: 0,
      wis: 1,
      hearts: 1,
      morale: 4,
      d4: 1,
      d6: 1,
      d8: 1,
      d10: 0,
      d12: 1,
      weapons: [
        {
          melee: true,
          title: "Sword",
          bonus: 0,
          dieFace: 8,
          dieBonus: 1,
          notes: ""
        },
        {
          melee: false,
          title: "Bow",
          bonus: 1,
          dieFace: 8,
          dieBonus: 0,
          notes: ""
        },
      ],
      armor: {
        title: "Shield",
        bonus: 1,
        notes: "Can be sacrificed to avoid taking damage"
      },
      abilities: []
    };

    return (
      <div class="bodyElement">
        <h1>Janissary</h1>
        <StatBlock stats={myStats}/>
      </div>
    );
  };

export default Janissary;