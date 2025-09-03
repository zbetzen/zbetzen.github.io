function LevelUpRollTable({ items }) {

    return (
        <div class="bodyElement">
          <p>Every 10 levels gain another heart. To a max of 3 at level 20</p>
          <table>
            <tr><td class='tableHeader'>Die Roll</td><td class='tableHeader'>Advance</td></tr>
            {items.map((item, index) => <tr><td>{index + 1}</td><td>+1 to your {item}</td></tr>)}
          </table>
        </div>
      );
  }
  
  export default LevelUpRollTable;