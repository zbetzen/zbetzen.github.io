

const Bandit = () => {
  const myItems = [
    {advance: 'Str'},
    {advance: 'Dex'},
    {advance: 'Con'},
    {advance: 'Int'},
    {advance: 'Wis'},
    {advance: 'Cha'},
    {advance: 'd4 Effort'},
    {advance: 'd6 Effort'},
    {advance: 'd8 Effort'},
    {advance: 'd10 Effort'}
  ];

    return (
      <div class="bodyElement">
        <h1>Adventurer</h1>
        <h2>Background</h2>
        <h2>Starting Equipment</h2>
        <h2>Level Up Table</h2>
      </div>
    );
  };

export default Bandit;