import CellType, {State} from "../components/field/types";

export type FieldSettings = {
  size: number[],
  count_bombs: number,
}

/** Возвращает поле ячеек для сапера */
export function GenerateField({size, count_bombs}: FieldSettings): CellType[][] {
  let cell_field: CellType[][] = [];

  for (let i = 0; i < size[0]; ++i) {
    let cell_row: CellType[] = [];
    for (let j = 0; j < size[1]; ++j){
      cell_row.push({value: 0, state: State.CLOSE});
    }
    cell_field.push(cell_row);
  }

  for (let i = 0; i < count_bombs; ++i) {
    const indx_i = Math.round(Math.random()*(size[0]-1));
    const indx_j = Math.round(Math.random()*(size[1]-1));
   
    cell_field[indx_i][indx_j].value = "bomb";
  }

  for (let i = 0; i < size[0]; ++i){
    for (let j = 0; j < size[1]; ++j){
      const cell: CellType = cell_field[i][j];

      if (cell.value !== "bomb") {
        let _value = 0;
        for (let di_2 = -1; di_2 <= 1; ++di_2){
          for (let dj_2 = -1; dj_2 <= 1; ++dj_2){
            const i_2 = i + di_2;
            const j_2 = j + dj_2;
            if (i_2 < 0 || j_2 < 0 || i_2 === size[0] || j_2 === size[1]) continue;
            const _cell: CellType = cell_field[i_2][j_2];
            if (_cell.value === "bomb") ++_value;
          }
        }
        // console.log(_value);
        cell.value = _value;
      }
  
    }
  }
  return cell_field;
}
