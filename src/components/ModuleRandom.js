import { useState } from 'react';
import Module1xx from './Module1xx';
import Module2hh from './Module2hh';
import Module2vv from './Module2vv';
import Module3hv from './Module3hv';
import Module3vv from './Module3vv';

const ModuleRandom = (props) => {
  const { length, album } = props;
  const division = [];
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
  const moduleList = [
    [<Module1xx album={album} />, <Module1xx album={album} />],
    [<Module2hh album={album} />, <Module2vv album={album} />],
    [<Module3hv album={album} />, <Module3vv album={album} />],
  ];
  console.log('Division: ', division);

  const modules = division.map((item, index) => {
    console.log('Item:', item);

    return moduleList[item][0];
  });
  return <div>{modules}</div>;
};

export default ModuleRandom;
