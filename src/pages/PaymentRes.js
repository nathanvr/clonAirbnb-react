import React, { useEffect, useState } from 'react';
import axios from 'axios';
const url = new URLSearchParams(window.location.search);
const payId = url.get('ref_payco');

const PaymentRes = () => {
  const [dataRes, setDataRes] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const payRes = async () => {
      setLoading(true);
      try {
        const res = await axios({
          method: 'GET',
          url: `https://secure.epayco.co/validation/v1/reference/${payId}`,
        });

        if (res.data.data.x_cod_response) {
          const dates = [];
          dates.push(res.data.data.x_extra1);
          dates.push(res.data.data.x_extra2);
          const token = localStorage.getItem('token');
          const body = {
            bookingSiteId: res.data.data.x_extra4,
            date: dates,
          };

          try {
            const response = await axios.post(
              'http://localhost:8080/bookings',
              body,
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              }
            );
            console.log('respuesta', response);
          } catch (error) {
            console.log('Error', error);
          }
        }

        setDataRes(res.data.data);
        setLoading(false);
      } catch (error) {
        setError(true);
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

  // useEffect(() => {
  //   const bookingSave = async () => {
  //     if (dataRes.x_cod_response === 1) {
  //       const token = localStorage.getItem('token');
  //       const body = {
  //         bookingSiteId: dataRes.x_extra4,
  //         date: dates,
  //       };

  //       try {
  //         const response = await axios.post(
  //           'http://localhost:8080/bookings',
  //           body,
  //           {
  //             headers: {
  //               Authorization: `Bearer ${token}`,
  //             },
  //           }
  //         );
  //         console.log('respuesta', response);
  //       } catch (error) {
  //         console.log('Error', error);
  //       }
  //     }
  //   };
  //   bookingSave();
  // }, []);

  console.log(dataRes);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Lo sentimos, ha ocurrido un error. {error}</p>;
  }

  //////////////////////////////////////////////
  if (dataRes.x_cod_response === 1) {
    return (
      <div>
        <div>
          <h2>Pago realizado satisfactoriamente</h2>
        </div>

        <div>Factura No: {dataRes.x_id_invoice}</div>
        <div>Descripcion: {dataRes.x_description}</div>
        <div>Llegada: {dataRes.x_extra1}</div>
        <div>Salida: {dataRes.x_extra2}</div>
        <div>Total noches: {dataRes.x_extra3}</div>
      </div>
    );
  } else {
    return (
      <div>
        <div>respuesta: hubo problemas</div>
      </div>
    );
  }
};

export default PaymentRes;
