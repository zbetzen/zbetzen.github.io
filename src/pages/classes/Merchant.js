import LevelUpRollTable from "./LevelUpRollTable";

const Merchant = () => {
  const myItems = [
    {id: 2, advance: 'Wis'},
    {id: 3, advance: 'Cha'},
    {id: 4, advance: 'd6 Effort'},
    {id: 5, advance: 'd10 Effort'},
    {id: 6, advance: 'd12 Effort'}
  ];

    return (
      <>
        <h1>Merchant</h1>
        <h2>Background</h2>
        <h2>Starting Equipment</h2>
        <h2>Level Up Table</h2>
        <LevelUpRollTable items={myItems}/>
      </>
    );
  };

export default Merchant;