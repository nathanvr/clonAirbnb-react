import React from 'react';
import Title from '../components/Title';
import Form from '../components/FormSearchDates';
import CardMd from '../components/CardMd';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { Link } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getBookingSites } from '../store/reducers/BookingSites.reducer';

const Home = () => {
  const dispatch = useDispatch();
  const { loading, error, sites } = useSelector(
    (state) => state.bookingSitesReducer
  );
  useEffect(() => {
    dispatch(getBookingSites());
  }, []);

  if (loading === true) {
    return <p>loading...</p>;
  }

  if (error === true) {
    return <p>Lo sentimos, ha ocurrido un error. {error}</p>;
  }

  return (
    <div className="container-home">
      <div className="header">
        <Form></Form>
      </div>
      <div className="main">
        <Title title="Alojamientos en todo el mundo" />

        <section className="alojamientos-plus">
          {sites.map((site, index) => (
            <Link to={`/room/${site._id}`} key={index}>
              <CardMd service={site} />
            </Link>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Home;
