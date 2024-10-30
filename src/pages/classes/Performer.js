import LevelUpRollTable from "./LevelUpRollTable";

const Performer = () => {
  const myItems = [
    {id: 2, advance: 'Dex'},
    {id: 3, advance: 'Cha'},
    {id: 4, advance: 'Cha'},
    {id: 5, advance: 'd6 Effort'},
    {id: 6, advance: 'd12 Effort'}
  ];

    return (
      <div class="bodyElement">
        <h1>Performer</h1>
        <h2>Background</h2>
        <h2>Starting Equipment</h2>
        <h2>Level Up Table</h2>
        <LevelUpRollTable items={myItems}/>
      </div>
    );
  };

export default Performer;