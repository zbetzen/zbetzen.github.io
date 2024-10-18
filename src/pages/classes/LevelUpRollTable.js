function LevelUpRollTable({ items }) {

    return (
        <>
          <table>
            <tr>
                <td>
                    1
                </td>
                <td>
                    +1 Heart, raise your hit points by 5.
                </td>
            </tr>
            {items.map((item) => <tr><td>{item.id}</td><td>+1 to your {item.advance}</td></tr>)}
          </table>
        </>
      );
  }
  
  export default LevelUpRollTable;