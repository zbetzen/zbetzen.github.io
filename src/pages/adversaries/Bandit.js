import StatBlock from "./StatBlock";

const Bandit = () => {
  const myStats = 
    {
      str: 2,
      dex: 1,
      con: 2,
      int: 0,
      cha: 0,
      wis: 1,
      hearts: 1,
      d4: 3,
      d6: 2,
      d8: 0,
      d10: 0,
      d12: 1,
      weapons: [
        {
          melee: true,
          title: "Axe",
          bonus: 1,
          dieFace: 6,
          dieBonus: 2,
          notes: "can be used to chop wood"
        },
        {
          melee: false,
          title: "Sling",
          bonus: 0,
          dieFace: 6,
          dieBonus: 0,
          notes: ""
        },
      ],
      armor: {
        title: "Leather",
        bonus: 1,
        notes: "has a sigil of their bandit group painted on it"
      }
    };

    return (
      <div class="bodyElement">
        <h1>Bandit</h1>
        <StatBlock stats={myStats}/>
      </div>
    );
  };

export default Bandit;