import Photo from '../components/Photo';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import '../styles/components/Module1xx.scss';

const Modules = (props) => {
  const { index, module } = props;
  const { album } = useSelector((state) => state.albumReducer);

  /*useEffect(() => {
    setAlbumLocal(album);
  }, [album]);*/

  const renderSwitch = (module) => {
    switch (module) {
      case 0:
        console.log('Module0');
        return (
          <div className="module1xx">
            <Photo src={album[index]} x="100%" y="100%" />
          </div>
        );
      case 1:
        console.log('Module1');
        return (
          <div className="module2vv">
            <Photo src={album[index]} x="50%" y="100%" />
            <Photo src={album[index + 1]} x="50%" y="100%" />
          </div>
        );
      case 2:
        console.log('Module2');
        return (
          <div className="module2hh">
            <Photo src={album[index]} x="50%" y="100%" />
            <Photo src={album[index + 1]} x="50%" y="100%" />
          </div>
        );
      case 3:
        console.log('Module3');
        return (
          <div className="module3hv">
            <div className="module3h_">
              <Photo src={album[index]} x="100%" y="50%" />
              <Photo src={album[index + 1]} x="100%" y="50%" />
            </div>
            <Photo src={album[index + 2]} x="50%" y="100%" />
          </div>
        );
      case 4:
        console.log('Module4');
        return (
          <div className="module3vv">
            <Photo src={album[index]} x="66%" y="100%" />
            <div className="module3_v">
              <Photo src={album[index + 1]} x="100%" y="50%" />
              <Photo src={album[index + 2]} x="100%" y="50%" />
            </div>
          </div>
        );
      default:
        console.log('Moduledef');
        return (
          <div className="module1xx">
            <Photo src={album[index]} x="100%" y="100%" />
          </div>
        );
    }
  };

  return (
    <>
      <h2>{renderSwitch(module)}</h2>
    </>
  );
};

export default Modules;
