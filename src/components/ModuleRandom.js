import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Modules from './Modules';

const ModuleRandom = (props) => {
  const dispatch = useDispatch();
  const { length, album } = props;

  const division = [];
  const indexes = [0];
  try {
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

    //indexes.pop();
    console.log('Division: ', division, 'Indexes: ', indexes);

    const modules = division.map((item, index) => {
      console.log('Item:', item, 'Index: ', index);

      //dispatch(changeAlbum(albumSplit));
      //console.log('albumSplit:', albumSplit, 'moduleList: ', moduleList);
      //moduleList[item][0].props.album = { value: albumSplit, writable: true };
      return <Modules key={index} index={indexes[index]} module={item} />;
    });
    console.log('Modulos: ', modules);

    return <div>{modules}</div>;
  } catch (err) {
    console.log('Error: ', err);
  }
};

export default ModuleRandom;
