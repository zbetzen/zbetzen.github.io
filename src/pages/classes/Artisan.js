import LevelUpRollTable from "./LevelUpRollTable";

const Artisan = () => {
  const myItems = [
    {id: 2, advance: 'Str'},
    {id: 3, advance: 'Int'},
    {id: 4, advance: 'Wis'},
    {id: 5, advance: 'd8 Effort'},
    {id: 6, advance: 'd12 Effort'}
  ];

    return (
      <div class="bodyElement">
        <h1>Artisan</h1>
        <h2>Background</h2>
        <h2>Starting Equipment</h2>
        <h2>Level Up Table</h2>
        <LevelUpRollTable items={myItems}/>
      </div>
    );
  };

export default Artisan;