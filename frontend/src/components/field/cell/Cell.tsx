import {FC} from 'react';

import style from './Cell.module.css';
import CellType, {State} from '../types';


type CellProps = CellType & {
  change_cell: Function;
}

/** Компонент ячейки */
const Cell: FC<CellProps> = ({value, state, change_cell}) => {
  
  if (state === State.CLOSE) {
    return <div className={style.cell_close} onClick={(ev) => change_cell(ev)} ></div>
  }

  return (
    <div className={style.cell_active}>
      {value === "bomb" ? "●" : value}
    </div>  
  );
}

export default Cell;