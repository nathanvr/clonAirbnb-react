import '../styles/components/AlbumModal.scss';
import Modal from 'react-modal/lib/components/Modal';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  faAngleLeft,
  faArrowUpFromBracket,
  faHeart,
} from '@fortawesome/free-solid-svg-icons';
import BrandIcon from './BrandIcon';
import TextIcon from './TextIcon';

Modal.setAppElement('#root');

const styles = {
  display: 'flex',
  justifyContent: 'space-between',
};

const AlbumModal = (props) => {
  const { site } = props;
  const [modalOpen, setModalOpen] = useState(true);

  return (
    <div>
      <Link to="#" onClick={() => setModalOpen(true)}>
        {site}
      </Link>
      <Modal isOpen={modalOpen} onRequestClose={() => setModalOpen(false)}>
        <div style={styles}>
          <BrandIcon
            iconType={faAngleLeft}
            colorIcon={{ color: '#484848' }}
            sizeIcon="16px"
          />
          <div style={styles}>
            <TextIcon
              iconType={faArrowUpFromBracket}
              colorIcon="#222222"
              sizeIcon="16px"
              text="Compartir"
            />
            <TextIcon
              iconType={faHeart}
              colorIcon="#222222"
              sizeIcon="16px"
              text="Guardar"
            />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default AlbumModal;
