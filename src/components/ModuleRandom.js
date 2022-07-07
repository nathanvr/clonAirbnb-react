import Modules from './Modules';
import { useSelector } from 'react-redux';

const ModuleRandom = (props) => {
  const { album } = useSelector((state) => state.albumReducer);
  const length = album.length;

  const division = [];
  const indexes = [0];
  for (let i = 0; i < length; ) {
    let ran = Math.floor(Math.random() * (5 - 0)) + 0;
    let index = 0;

    if (length - i < 4) {
      i = i + (length - i);
      ran = length - i + 1;
    } else {
      i = i + (ran === 0 ? 1 : ran === 1 || ran === 2 ? 2 : 3);
    }

    index = index + i;
    indexes.push(index);
    division.push(ran);
    console.log('ran: ', ran, 'i: ', i, 'length: ', length);
  }

  console.log('Division: ', division, 'Indexes: ', indexes);

  const modules = division.map((item, index) => {
    console.log('Item:', item, 'Index: ', index);
    return <Modules key={index} index={indexes[index]} module={item} />;
  });
  console.log('Modulos: ', modules);

  return <div>{modules}</div>;
};

export default ModuleRandom;
