import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Module1xx from './Module1xx';
import Module2hh from './Module2hh';
import Module2vv from './Module2vv';
import Module3hv from './Module3hv';
import Module3vv from './Module3vv';
import { changeAlbum } from '../store/reducers/Album.reducer';

const ModuleRandom = (props) => {
  const dispatch = useDispatch();
  const { length, album } = props;
  let albumSplit = album;
  let ind = 0;
  const division = [];
  const lista = [0, 1];
  for (let i = 0; i < length; ) {
    let ran = Math.floor(Math.random() * (3 - 1)) + 1;
    if (length - i < 4) {
      ran = length - i;
      i = i + ran;
    }
    i = i + ran;
    division.push(ran - 1);
    console.log(ran);
  }
  /*const moduleList = [
    [<Module1xx />, <Module1xx />],
    [<Module2hh />, <Module2vv />],
    [<Module3hv />, <Module3vv />],
  ];*/
  const module = (ind) => {
    switch (ind) {
      case 0:
        return <Module1xx />;
      case 1:
        return <Module2hh />;
      case 2:
        return <Module2vv />;
      case 3:
        return <Module3hv />;
      case 4:
        return <Module3vv />;
      default:
        return <Module1xx />;
    }
  };
  //console.log('Module:', moduleList[2][0].props);
  console.log('Division: ', division);

  const modules = division.map((item, index) => {
    console.log('Item:', item, 'Ind', ind);
    albumSplit = albumSplit.slice(item);
    console.log('albumSplit:', albumSplit);
    dispatch(changeAlbum(albumSplit));
    //console.log('albumSplit:', albumSplit, 'moduleList: ', moduleList);
    //moduleList[item][0].props.album = { value: albumSplit, writable: true };
    return module(item);
  });

  return <div>{modules}</div>;
};

export default ModuleRandom;
