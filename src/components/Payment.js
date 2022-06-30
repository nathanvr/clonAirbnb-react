import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

const handler = window.ePayco.checkout.configure({
  key: '3bbadb534f44b2ae75a9574c00c30a89',
  test: true,
});

const Payment = (props) => {
  const { totalPay, startDate, finishDate, totalNigths } = props;
  const { bookingSiteData } = useSelector((state) => state.bookingSiteReducer);
  const { name, lastname } = useSelector((state) => state.userReducer);
  const fullName = name + ' ' + lastname;
  const invoiceNumber = uuidv4();

  // console.log(bookingSiteData.data._id);
  function handleClick() {
    handler.open({
      //Parametros compra (obligatorio)
      name: bookingSiteData.data.description_type,
      description: bookingSiteData.data.title,
      invoice: invoiceNumber,
      currency: 'cop',
      amount: totalPay,
      tax_base: '0',
      tax: '0',
      country: 'co',
      lang: 'es',

      //Onpage="false" - Standard="true"
      external: 'false',

      //Atributos opcionales
      extra1: startDate, //fecha inicio
      extra2: finishDate, //fecha fin
      extra3: totalNigths, //total de noches
      extra4: bookingSiteData.data._id, //id del bookingsite

      // confirmation: 'http://secure2.payco.co/prueba_curl.php',
      response: `http://localhost:3000/response`,

      //Atributos cliente
      name_billing: fullName,
      address_billing: '',
      type_doc_billing: 'cc',
      mobilephone_billing: '3050000000',
      number_doc_billing: '100000000',

      //atributo deshabilitación metodo de pago
      methodsDisable: ['PSE', 'SP'],
    });
  }

  return (
    <button type="button" onClick={handleClick}>
      Reserva
    </button>
  );
};

export default Payment;
