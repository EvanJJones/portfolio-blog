import './src/styles/global.css';
import useDarkStore from './src/state/useDarkStore';

export const onClientEntry = () => {
  console.log(useDarkStore);
};
