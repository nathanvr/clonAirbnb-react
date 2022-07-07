import '../styles/components/AlbumModal.scss';
//import Modal from 'react-modal/lib/components/Modal';
import { Modal } from '@mantine/core';
import React, { useState, useEffect, memo } from 'react';
import { Link } from 'react-router-dom';
import {
  faAngleLeft,
  faArrowUpFromBracket,
  faHeart,
} from '@fortawesome/free-solid-svg-icons';
import BrandIcon from './BrandIcon';
import TextIcon from './TextIcon';
import ModuleRandom from './ModuleRandom';
import { useDispatch, useSelector } from 'react-redux';
import { changeAlbum } from '../store/reducers/Album.reducer';

//Modal.setAppElement('#root');

const AlbumModal = (props) => {
  const dispatch = useDispatch();
  const { site } = props;
  const [modalOpen, setModalOpen] = useState(false);

  /*useEffect(() => {
    dispatch(changeAlbum(album));
  }, [album]);*/

  return (
    <div>
      <Link to="#" onClick={() => setModalOpen(true)}>
        {site}
      </Link>
      <Modal
        size="80%"
        opened={modalOpen}
        onClose={() => setModalOpen(false)}
        overlayOpacity={0.55}
        overlayBlur={3}>
        <div className="album-modal-container">
          
          <div className="album-modal-main">
            <ModuleRandom />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default AlbumModal;
