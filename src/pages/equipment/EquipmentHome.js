const EquipmentHome = () => {
  return (
    <div class="bodyElement">
      <h1>
        Comissioning Equipment
      </h1>
      <p>
        To commission a piece of equipment to be built you will need to find a crafter capable of building the piece, pay in advance, and wait an amount of time determined by the GM for them to finish their work.
      </p>
      <p>
        The total bonus can be split between the d20 check to use an item and the effort die roll in an attempt. This is called accuracy and damage for weapons, and check bonus and effort bonus for other equipment. You may only add 5 to either bonus through crafting. So a sword that naturally has an accuracy of 1d20 + Dexterity +1 and a damage of 1d8 + Effort can only go up to 1d20 + Dexterity +6 and a damage of 1d8 + Effort + 5 through crafting. And it will cost 3072 coins, 3 * 1024.
      </p>
      <table>
        <tr>
          <td>
            Total Bonus
          </td>
          <td>
            Crafter level
          </td>
          <td>
            Cost multiplier
          </td>
          <td>
            Extra requirements
          </td>
        </tr>
        <tr>
          <td>
            +1
          </td>
          <td>
            5
          </td>
          <td>
            x2
          </td>
          <td>
          </td>
        </tr>
        <tr>
          <td>
            +2
          </td>
          <td>
            7
          </td>
          <td>
            x4
          </td>
          <td>
          </td>
        </tr>
        <tr>
          <td>
            +3
          </td>
          <td>
            9
          </td>
          <td>
            x8
          </td>
          <td>
          </td>
        </tr>
        <tr>
          <td>
            +4
          </td>
          <td>
            11
          </td>
          <td>
            x16
          </td>
          <td>
          </td>
        </tr>
        <tr>
          <td>
            +5
          </td>
          <td>
            13
          </td>
          <td>
            x32
          </td>
          <td>
            Iron
          </td>
        </tr>
        <tr>
          <td>
            +6
          </td>
          <td>
            15
          </td>
          <td>
            x64
          </td>
          <td>
          </td>
        </tr>
        <tr>
          <td>
            +7
          </td>
          <td>
            17
          </td>
          <td>
            x128
          </td>
          <td>
          </td>
        </tr>
        <tr>
          <td>
            +8
          </td>
          <td>
            19
          </td>
          <td>
            x256
          </td>
          <td>
            Rare materials
          </td>
        </tr>
        <tr>
          <td>
            +9
          </td>
          <td>
            21
          </td>
          <td>
            x512
          </td>
          <td>
          </td>
        </tr>
        <tr>
          <td>
            +10
          </td>
          <td>
            23
          </td>
          <td>
            x1024
          </td>
          <td>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default EquipmentHome;