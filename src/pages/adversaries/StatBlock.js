function StatBlock({ stats }) {
  const hearts = [];
  for (let i = 0; i < stats.hearts; i++) {
    hearts.push(<img src="/images/heart.png" width="16" height="16"/>);
  }

  function damage(weapon) {
    switch(weapon.dieFace) {
      case 4:
        return weapon.dieFace/2+weapon.dieBonus+stats.d4;
      case 6:
        return weapon.dieFace/2+weapon.dieBonus+stats.d6;
      case 8:
        return weapon.dieFace/2+weapon.dieBonus+stats.d8;
      case 10:
        return weapon.dieFace/2+weapon.dieBonus+stats.d10;
      case 12:
        return weapon.dieFace/2+weapon.dieBonus+stats.d12;
      default:
        return 'incorrect die face';
    }
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
            <tr>
              <td>D4 Effort</td>
              <td>+{stats.d4}</td>
              <td/>
            </tr>
            <tr>
              <td>D6 Effort</td>
              <td>+{stats.d6}</td>
              <td/>
            </tr>
            <tr>
              <td>D8 Effort</td>
              <td>+{stats.d8}</td>
              <td/>
            </tr>
            <tr>
              <td>D10 Effort</td>
              <td>+{stats.d10}</td>
              <td/>
            </tr>
            <tr>
              <td>D12 Effort</td>
              <td>+{stats.d12}</td>
              <td/>
            </tr>
          </table>
          <p>HP: {stats.hearts*10+stats.con}</p>
          <p>Morale: {stats.morale}</p>
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
                <td>d{item.dieFace + '+' + item.dieBonus} + effort</td>
                <td>({damage(item)})</td>
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
          {stats.abilities.length ? <h2>Abilities</h2> : ''}
          {stats.abilities.map((item) => 
            <span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </span>
          )}
        </span>
      );
  }
  
  export default StatBlock;