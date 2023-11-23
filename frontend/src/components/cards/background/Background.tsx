import {FC, ReactNode} from 'react';

import style from './Background.module.css';

type ChildProps = {
  children: ReactNode;
}

/** Оборачивает компонент и задает цвет backgraound */
const BackgroundCard: FC<ChildProps> = ({children}) => {
  return (
    <div className={style.background}>{children}</div>
  );
}

export default BackgroundCard;