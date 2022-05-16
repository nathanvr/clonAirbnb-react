import Modal from 'react-modal/lib/components/Modal';
import Loader from './Loader';
import Module2vv from './Module2vv';
import Module3hv from './Module3hv';
import Module3vv from './Module3vv';
import '../styles/components/Moto.scss';

const Moto = () => {
  const album = Loader();
  return (
    <div className="moto2">
      <Modal isOpen={true}>
        {album.map(() => {
          return (
            <div className="moto">
              <Module3hv album={album.slice(0, 3)} />
              <Module2vv album={album.slice(3, 6)} />
              <Module3vv album={album.slice(6, 10)} />
              <Module3hv album={album.slice(6, 10)} />
            </div>
          );
        })}
      </Modal>
    </div>
  );
};

export default Moto;
