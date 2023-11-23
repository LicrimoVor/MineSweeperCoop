import {FC, ReactNode} from 'react';

type CountProps = {
  count: number;
  children: ReactNode;
}

/** Оборачивает компонент и назначает ширину */
const WidthCard: FC<CountProps> = ({count, children}) => {
  return (
    <div style={{width: `calc(100%/${count})`}}>
      {children}
    </div>
  )
}

export default WidthCard;