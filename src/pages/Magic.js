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
        effect: '1d10 + Effort miles'
      },
      {
        title: 'Messenger Pigeon',
        description: 'Summons a messenger pigeon that can remember a sentence spoken to it, and deliver the message to a person you have met before.',
        effect: '(1d10 + Effort) x 6 miles'
      },
      {
        title: 'Filch',
        description: 'Teleports an item you can see into your hand as long as you are strong enough to hold it one handed.',
        effect: '1d10 + Effort yards'
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