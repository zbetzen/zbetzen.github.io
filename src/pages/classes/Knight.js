import LevelUpRollTable from "./LevelUpRollTable";

const Knight = () => {
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
    {advance: 'd10 Effort'},
    {advance: 'd12 Effort'}
  ];

    return (
      <>
        <h1>Knight</h1>
        <LevelUpRollTable items={myItems}/>
      </>
    );
  };
  
  export default Knight;