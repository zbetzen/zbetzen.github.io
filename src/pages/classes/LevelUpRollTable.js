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
            <tr>
                <td>
                    2
                </td>
                <td>
                    { items[0].advance }
                </td>
            </tr>
            <tr>
                <td>
                    3
                </td>
                <td>
                    { items[1].advance }
                </td>
            </tr>
            <tr>
                <td>
                    4
                </td>
                <td>
                    { items[2].advance }
                </td>
            </tr>
            <tr>
                <td>
                    5
                </td>
                <td>
                    { items[3].advance }
                </td>
            </tr>
            <tr>
                <td>
                    6
                </td>
                <td>
                    { items[4].advance }
                </td>
            </tr>
            <tr>
                <td>
                    7
                </td>
                <td>
                    { items[5].advance }
                </td>
            </tr>
            <tr>
                <td>
                    8
                </td>
                <td>
                    { items[6].advance }
                </td>
            </tr>
            <tr>
                <td>
                    9
                </td>
                <td>
                    { items[7].advance }
                </td>
            </tr>
            <tr>
                <td>
                    10
                </td>
                <td>
                    { items[8].advance }
                </td>
            </tr>
            <tr>
                <td>
                    11
                </td>
                <td>
                    { items[9].advance }
                </td>
            </tr>
            <tr>
                <td>
                    12
                </td>
                <td>
                    { items[10].advance }
                </td>
            </tr>
          </table>
        </>
      );
  }
  
  export default LevelUpRollTable;