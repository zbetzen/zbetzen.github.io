import StatBlock from "./StatBlock";

const VatThing = () => {
  const vatThing = 
    {
      str: 3,
      dex: 1,
      con: 3,
      int: 0,
      cha: 0,
      wis: 2,
      hearts: 2,
      morale: 4,
      d4: 4,
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
  const spitefulMutant = 
    {
      str: 2,
      dex: 1,
      con: 2,
      int: 0,
      cha: 0,
      wis: 1,
      hearts: 1,
      morale: 3,
      d4: 2,
      d6: 2,
      d8: 0,
      d10: 0,
      d12: 3,
      weapons: [
        {
          melee: true,
          title: "Claw",
          bonus: 0,
          dieFace: 4,
          dieBonus: 1,
          notes: ""
        },
        {
          melee: true,
          title: "Club",
          bonus: 1,
          dieFace: 6,
          dieBonus: 0,
          notes: "A bit of wood it found lying around."
        },
      ],
      armor: {
        title: "Rags",
        bonus: 1,
        notes: ""
      },
      abilities: [
        {
          title: "Power Attack",
          description: "In a fit of rage it strikes as hard as it can doing double damage and destroying it's weapon."
        },
      ]
    };
  const ratKing = 
    {
      str: 5,
      dex: 3,
      con: 4,
      int: 8,
      cha: 0,
      wis: 8,
      hearts: 4,
      morale: 5,
      d4: 5,
      d6: 0,
      d8: 0,
      d10: 0,
      d12: 0,
      weapons: [
        {
          melee: true,
          title: "Claw",
          bonus: 0,
          dieFace: 4,
          dieBonus: 1,
          notes: "The head of a rat on the end of an arm. Hits everyone in CLOSE range."
        },
        {
          melee: true,
          title: "Bite",
          bonus: 0,
          dieFace: 4,
          dieBonus: 3,
          notes: "Roll STR TN 16 to break free, or be grappled by a rat's head on the end of an arm for a turn."
        },
      ],
      armor: {
        title: "Rats",
        bonus: 1,
        notes: "A mix of tails, claws, and fur melded into a giant mass."
      },
      abilities: [
        {
          title: "Four wills",
          description: "The rat king can take four actions on their turn from it's four minds."
        },
      ]
    };

    return (
      <div class="bodyElement">
        <h1>Vat Thing</h1>
        <StatBlock stats={vatThing}/>
        <h1>Spiteful Mutant</h1>
        <p>Angry at the world for the crime of being born wrong.</p>
        <StatBlock stats={spitefulMutant}/>
        <h1>Rat King</h1>
        <p>Four fragments reunited. The sorcerer king is whole again, although merged with the vermin below. A giant amalgam beast of fur and rat parts with four faces of Khalat floating about it's body.</p>
        <StatBlock stats={ratKing}/>
      </div>
    );
  };

export default VatThing;