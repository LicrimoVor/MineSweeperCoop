import {FC, useState} from 'react';

import Field from '../field/Field';

/** Компанент всемогущего теста */
const Test: FC = () => {

  return (
  <div>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Dolor, et quod beatae harum minus quos? Non aliquam, rerum
      corporis vero magnam maiores vel molestias delectus dolores 
      similique fuga a earum.
    </p>
    <Field size={[15,15]} count_bombs={0}/>
  </div>
  );
}

export default Test;