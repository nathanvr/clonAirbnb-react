import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/components/PaymentRes.scss';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { LoadingOverlay, Button } from '@mantine/core';

const url = new URLSearchParams(window.location.search);
const payId = url.get('ref_payco');

const PaymentRes = () => {
  const [dataRes, setDataRes] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const payRes = async () => {
      setLoading(true);
      setVisible(true);
      try {
        const res = await axios({
          method: 'GET',
          url: `https://secure.epayco.co/validation/v1/reference/${payId}`,
        });

        if (res.data.data.x_cod_response === 1) {
          const dates = [];
          dates.push(res.data.data.x_extra1);
          dates.push(res.data.data.x_extra2);
          const token = localStorage.getItem('token');
          const body = {
            bookingSiteId: res.data.data.x_extra4,
            date: dates,
            invoiceNum: res.data.data.x_id_invoice,
            description: res.data.data.x_description,
            amount: res.data.data.x_amount,
            currency: res.data.data.x_currency_code,
          };

          try {
            const response = await axios.post(
              'https://clonairbnb-backend.herokuapp.com/bookings',
              body,
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              }
            );

            setVisible(false)
            setLoading(false)

          } catch (error) {
            setVisible(false)
            setLoading(false)
          }
        }

        setDataRes(res.data.data);
        setLoading(false);
        setVisible(false);
      } catch (error) {
        setError(true);
        setVisible(false);
        setLoading(false);
        console.log(error);
      }
    };

    payRes();
  }, []);

  const dates = [];
  dates.push(dataRes.x_extra1);
  dates.push(dataRes.x_extra2);
  console.log(dataRes.x_cod_response);

  console.log('respuesta', dataRes);

  if (loading) {
    return (
      <div className="loading" style={{ width: 400 }}>
        <LoadingOverlay
          loaderProps={{ size: 'sm', color: 'pink', variant: 'bars' }}
          visible={visible}
        />
        {/* ...other content */}
      </div>
    );
  }
  if (error) {
    return <p>Lo sentimos, ha ocurrido un error. {error}</p>;
  }

  //////////////////////////////////////////////

  //{new Date(item.date[1]).getDate()}/
  //{new Date(item.date[1]).getMonth() + 1}/
  //{new Date(item.date[1]).getFullYear()

  if (dataRes.x_cod_response === 1) {
    return (
      <div className="contianer-paymentres">
        <div className="resContainer">
          <div className="resContainer__title">
            <h2>Pago realizado satisfactoriamente</h2>
          </div>
          <div className="resContainer__body">
            <div>
              <span>Factura No:</span> {dataRes.x_id_invoice}
            </div>
            <div>
              <span>Descripcion:</span> {dataRes.x_description}
            </div>
            <div>
              <span>Llegada:</span> {new Date(dataRes.x_extra1).getDate()}/
              {new Date(dataRes.x_extra1).getMonth() + 1}/
              {new Date(dataRes.x_extra1).getFullYear()}
            </div>
            <div>
              <span>Salida:</span> {new Date(dataRes.x_extra2).getDate()}/
              {new Date(dataRes.x_extra2).getMonth() + 1}/
              {new Date(dataRes.x_extra2).getFullYear()}
            </div>
            <div>
              <span>Total noches:</span> {dataRes.x_extra3}
            </div>
            <div>
              <span>Total pagado:</span> $ {dataRes.x_amount}{' '}
              {dataRes.x_currency_code}
            </div>
          </div>
          <Link to={'/booking'}>
            <Button variant="light" color="pink">
              Ir a tus reservas
            </Button>
          </Link>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <h2 className="resContainer__title">respuesta: hubo problemas</h2>
      </div>
    );
  }
};

export default PaymentRes;
