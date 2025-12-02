import StatBlock from "./StatBlock";

const VatThing = () => {
  const myStats = 
    {
      str: 2,
      dex: 1,
      con: 2,
      int: 0,
      cha: 0,
      wis: 1,
      hearts: 2,
      morale: 4,
      d4: 2,
      d6: 0,
      d8: 0,
      d10: 0,
      d12: 3,
      weapons: [
        {
          melee: true,
          title: "Claw",
          bonus: 2,
          dieFace: 4,
          dieBonus: 1,
          notes: ""
        },
        {
          melee: true,
          title: "Bite",
          bonus: 0,
          dieFace: 4,
          dieBonus: 3,
          notes: "Roll STR TN 13 to break free, or be grappled a turn."
        },
      ],
      armor: {
        title: "Carapace",
        bonus: 2,
        notes: ""
      },
      abilities: [
        {
          title: "Vat Fluid Vomit",
          description: "Fresh from the vat it vomits up vat fluid at you. Roll Defense TN 12, or be hit with fluid mutating and taking one wound."
        },
      ]
    };

    return (
      <div class="bodyElement">
        <h1>Vat Thing</h1>
        <StatBlock stats={myStats}/>
      </div>
    );
  };

export default VatThing;