function StatBlock({ stats }) {
  const hearts = [];
  for (let i = 0; i < stats.hearts; i++) {
    hearts.push(<img src="/images/heart.png" width="16" height="16"/>);
  }

    return (
        <span>
          {hearts}
          <h2>Attributes</h2>
          <table>
            <tr>
              <td class='tableHeader'>Attribute</td>
              <td class='tableHeader'>Bonus</td>
              <td class='tableHeader'>(TN)</td>
            </tr>
            <tr>
              <td>Str</td>
              <td>+{stats.str}</td>
              <td>({stats.str + 11})</td>
            </tr>
            <tr>
              <td>Dex</td>
              <td>+{stats.dex}</td>
              <td>({stats.dex + 11})</td>
            </tr>
            <tr>
              <td>Con</td>
              <td>+{stats.con}</td>
              <td>({stats.con + 11})</td>
            </tr>
            <tr>
              <td>Int</td>
              <td>+{stats.int}</td>
              <td>({stats.int + 11})</td>
            </tr>
            <tr>
              <td>Cha</td>
              <td>+{stats.cha}</td>
              <td>({stats.cha + 11})</td>
            </tr>
            <tr>
              <td>Wis</td>
              <td>+{stats.wis}</td>
              <td>({stats.wis + 11})</td>
            </tr>
          </table>
          <p>HP: {stats.hearts*10+stats.con}</p>
          <h2>Weapons</h2>
          <table>
            <tr>
              <td class='tableHeader'>Title</td>
              <td class='tableHeader'>To Hit</td>
              <td class='tableHeader'>(TN)</td>
              <td class='tableHeader'>Dice</td>
              <td class='tableHeader'>(Average)</td>
              <td class='tableHeader'>Notes</td>
            </tr>
            {stats.weapons.map((item) => 
              <tr>
                <td>{item.title}</td>
                <td>{item.melee ? 'str + ' + item.bonus : 'dex + ' + item.bonus}</td>
                <td>{item.melee ? '(' + (item.bonus + stats.str + 11) + ')' : '(' + (item.bonus + stats.dex + 11) + ')'}</td>
                <td>d{item.dieFace + '+' + item.dieBonus}</td>
                <td>({item.dieFace/2 + item.dieBonus})</td>
                <td>{item.notes}</td>
              </tr>
            )}
          </table>
          <h2>Armor</h2>
          <table>
            <tr>
              <td class='tableHeader'>Title</td>
              <td class='tableHeader'>Defense</td>
              <td class='tableHeader'>(TN)</td>
              <td class='tableHeader'>Notes</td>
            </tr>
            <tr>
                <td>{stats.armor.title}</td>
                <td>Con + {stats.armor.bonus}</td>
                <td>({stats.armor.bonus+stats.con+11})</td>
                <td>{stats.armor.notes}</td>
            </tr>
          </table>
        </span>
      );
  }
  
  export default StatBlock;