import React from 'react';

import Button from './components/Button';
import { ButtonSize, ButtonType } from './components/Button';

const App: React.FC = () => {
  return (
    <>
      <Button>default</Button>
      <Button buttonType={ButtonType.Danger} disabled>
        danger
      </Button>
      <Button size={ButtonSize.Large}>large</Button>
      <Button buttonType={ButtonType.Link} href="#" disabled>
        link
      </Button>
    </>
  );
};

export default App;
