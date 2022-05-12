import '../styles/components/Form.scss';

const Form = () => {
  return (
    <div className="searchContainerForm">
      <h2 className="searchContainerForm__title">
        Reserva alojamientos y actividades únicas.
      </h2>
      <form className="searchContainerForm__form">
        <label className="searchContainerForm__form__where">
          Donde?
          <input type="text" placeholder="En todo el mundo!"></input>
        </label>

        <div className="searchContainerForm__form__schedule">
          <label className="searchContainerForm__form__schedule__arrive">
            Llegada
            <input type="text" placeholder="dd/mm/aaaa"></input>
          </label>
          <label className="searchContainerForm__form__schedule__departure">
            Salida
            <input type="text" placeholder="dd/mm/aaaa"></input>
          </label>
        </div>

        <label className="searchContainerForm__form__travelers">
          Viajeros
          <input type="text" placeholder="Viajeros"></input>
        </label>

        <div className="searchContainerForm__button">
          <button onClick={() => alert('UwU')}> Buscar</button>
        </div>
      </form>
    </div>
  );
};
export default Form;
