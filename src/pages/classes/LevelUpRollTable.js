function LevelUpRollTable({ items }) {

    return (
        <div class="bodyElement">
          <table>
            <tr><td>Die Roll</td><td>Advance</td></tr>
            {items.map((item, index) => <tr><td>{index + 1}</td><td>+1 to your {item.advance}</td></tr>)}
          </table>
        </div>
      );
  }
  
  export default LevelUpRollTable;