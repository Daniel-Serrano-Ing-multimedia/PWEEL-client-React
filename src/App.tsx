import { Icon, Intent } from '@blueprintjs/core';
import { IconNames } from '@blueprintjs/icons';
import './App.scss';

function App() : JSX.Element {
  return (
    <>
      <Icon icon="cross" />
      <Icon icon="cross" iconSize={20} />
 

      <Icon icon={IconNames.CROSS} iconSize={Icon.SIZE_LARGE} intent={Intent.PRIMARY} color="red" />
    </>
  );
}

export default App;
