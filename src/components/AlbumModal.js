import '../styles/components/AlbumModal.scss';
//import Modal from 'react-modal/lib/components/Modal';
import { Modal } from '@mantine/core';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  faAngleLeft,
  faArrowUpFromBracket,
  faHeart,
} from '@fortawesome/free-solid-svg-icons';
import BrandIcon from './BrandIcon';
import TextIcon from './TextIcon';
import ModuleRandom from './ModuleRandom';
import Module2vv from './Module2vv';

const styles = {
  display: 'flex',
  justifyContent: 'space-between',
};

const AlbumModal = (props) => {
  const { site, album } = props;
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div>
      <Link to="#" onClick={() => setModalOpen(true)}>
        {site}
      </Link>
      <Modal
        size="80%"
        withCloseButton={false}
        opened={modalOpen}
        onClose={() => setModalOpen(false)}
        overlayOpacity={0.55}
        overlayBlur={3}>
        <div className="album-modal-container">
          <div className="album-modal-header">
            <BrandIcon
              iconType={faAngleLeft}
              colorIcon={{ color: '#484848' }}
              sizeIcon="16px"
            />
            <div>
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
          <div className="album-modal-main">
            <ModuleRandom album={album} length={album.length + 1} />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default AlbumModal;
