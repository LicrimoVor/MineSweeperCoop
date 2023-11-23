import CellType, {State} from "../components/field/types";

export type FieldSettings = {
  size: number[],
  count_bombs: number,
}

/** Возвращает поле ячеек для сапера */
export function GenerateField({size, count_bombs}: FieldSettings): CellType[][] {
  let cell_field: CellType[][] = [];

  for (let i = 0; i < size[0]; ++i){
    let cell_row: CellType[] = [];

    for (let j = 0; j < size[1]; ++j){
      const cell: CellType = {
        value: Math.round(Math.random()*10),
        state: State.CLOSE,
        // coord: [i,j],
      }
      cell_row.push(cell);
    }

    cell_field.push(cell_row);
  }

  return cell_field;
}
