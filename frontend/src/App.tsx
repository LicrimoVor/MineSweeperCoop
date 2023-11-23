import {FC} from 'react';

import Test from './components/test/Test';
import BackgroundCard from './components/cards/background/Background';

/** Любимое приложение */
const App: FC = () => {
  return (
    <div>
      <h1> Hello world</h1>
      <BackgroundCard>
         <Test /> 
      </BackgroundCard>
    </div>
  );
}

export default App;