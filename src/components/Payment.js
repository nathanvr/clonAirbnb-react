import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

const handler = window.ePayco.checkout.configure({
  key: '3bbadb534f44b2ae75a9574c00c30a89',
  test: true,
});

const Payment = (props) => {
  const { totalPay } = props;
  const { bookingSiteData } = useSelector((state) => state.bookingSiteReducer);
  const { name, lastname } = useSelector((state) => state.userReducer);
  const fullName = name + ' ' + lastname;
  const invoiceNumber = uuidv4();
  console.log('desde el pago se carga el user', bookingSiteData);

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
      extra1: 'extra1',
      extra2: 'extra2',
      extra3: 'extra3',
      // confirmation: 'http://secure2.payco.co/prueba_curl.php',
      response: `http://localhost:3000/response`,

      //Atributos cliente
      name_billing: fullName,
      address_billing: 'Carrera 19 numero 14 91',
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
