import { useState, FC } from "react";

import style from "./Field.module.css";
import WidthCard from "../cards/width/Width";
import Cell from "./cell/Cell";
import CellType, {State} from "./types";
import {FieldSettings, GenerateField} from "../../utils/minesweeper"; 
import { partial } from "../../utils/func";


type ReturnFC = ReturnType<FC>;

/** Компонент поля ячеек сапера */
const Field: FC<FieldSettings> = (settings) => {
  const [field, setField] = useState<CellType[][]>(GenerateField(settings));  

  const CellHundler = (indx_i: number, indx_j: number, event: unknown): void => {
    
    let cell: CellType = field[indx_i][indx_j];
    console.log(event);
    cell.state = State.OPEN;
    const cell_row: CellType[] = [
      ...field[indx_i].slice(0, indx_j),
      cell,
      ...field[indx_i].slice(indx_j+1),
    ]
    const cell_field: CellType[][] = [
      ...field.slice(0, indx_i),
      cell_row,
      ...field.slice(indx_i+1),
    ];
    setField(cell_field);
  }

  return (
    <div className={style.field}>
      {
        field.map((cell_row: CellType[], indx_i: number) => {

          let comp_row: ReturnFC[] = cell_row.map((cell: CellType, indx_j: number): ReturnFC  => {
            return (
              <WidthCard count={settings.size[0]}>
                <Cell
                value={cell.value}
                state={cell.state}
                change_cell={partial(CellHundler, indx_i, indx_j)}
              />
              </WidthCard>
              
            );
          })

          return comp_row;
        })
      }
    </div>
  );
}



export default Field;