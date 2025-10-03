import SpellBlock from "./SpellBlock";

const Magic = () => {
  const mySpells = 
    [
      {
        title: 'Thicket',
        description: 'Summons a thicket of dense shrubbery and trees in a wall.',
        effect: '(1d10 + Effort) x 30 feet long, 5 feet wide, 10 feet tall'
      },
      {
        title: 'Mirror Walk',
        description: 'Allows you to travel through two mirrors that you have touched today, you must be able to fit through the mirrors.',
        effect: '(1d10 + Effort) miles'
      },
      {
        title: 'Messenger Pigeon',
        description: 'Summons a messenger pigeon that can remember a sentence spoken to it, and deliver the message to a person you have met before.',
        effect: '(1d10 + Effort) x 6 miles'
      },
      {
        title: 'Filch',
        description: 'Roll INT vs WIS, Teleports an item you can see into your hand as long as you are strong enough to hold it one handed.',
        effect: '(1d10 + Effort) yards'
      },
      {
        title: 'Second Impression',
        description: 'When meeting someone for the first time, roll INT vs WIS, and the subject will feel as they already know you and are on good terms. When the spell runs out they will realize you are strangers.',
        effect: '(1d10 + Effort) hours'
      },
      {
        title: 'Miniaturize',
        description: 'Shrink a creature you touch down to the size of a mouse.',
        effect: 'INT vs WIS, lasts (1d10 + Effort) hours'
      },
      {
        title: 'Arcane Armor',
        description: 'Wreathe yourself in a haze of faint blue light that protects you from harm.',
        effect: 'Add (1d10 + Effort) temporary hit points. The light and hit points fade away at the next sunrise.'
      },
      {
        title: 'Swap',
        description: 'With a flash of light and smoke switch positions with another person that you can see.',
        effect: "INT vs WIS, teleport to another character's position and them to yours within (1d10 + Effort) yards."
      },
      {
        title: 'Allure',
        description: 'Through subtle magics you can bend a crowd to your will.',
        effect: "Roll INT vs the highest WIS in a crowd. Effects (1d10 + Effort) people. All social rolls are easy against anyone effected. Lasts until the following sunrise."
      },
    ];
    return (
      <div class="bodyElement">
        <h1>Spells</h1>
        <SpellBlock spells={mySpells}/>
      </div>
    );
  };
  
  export default Magic;