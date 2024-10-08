import LevelUpRollTable from "./LevelUpRollTable";

const Knight = () => {
  const myItems = [
    {id: 2, advance: 'Str'},
    {id: 3, advance: 'Dex'},
    {id: 4, advance: 'Con'},
    {id: 5, advance: 'Int'},
    {id: 6, advance: 'Wis'},
    {id: 7, advance: 'Cha'},
    {id: 8, advance: 'd4 Effort'},
    {id: 9, advance: 'd6 Effort'},
    {id: 10, advance: 'd8 Effort'},
    {id: 11, advance: 'd10 Effort'},
    {id: 12, advance: 'd12 Effort'}
  ];

    return (
      <>
        <h1>Knight</h1>
        <LevelUpRollTable items={myItems}/>
      </>
    );
  };
  
  export default Knight;