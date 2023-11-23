export enum State {
  CLOSE,
  OPEN,
  FLAG,
}

/** Тип ячеек */
type CellType = {
  value: number|"bomb";
  state: State;
  // coord: number[];
}

export default CellType;
