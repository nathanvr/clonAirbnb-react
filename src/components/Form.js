const Form = () => {
  return (
    <div>
      <h2>Reserva alojamientos y actividades únicas.</h2>
      <form>
        <label>
          Donde?
          <input type="text" placeholder="En todo el mundo!"></input>
        </label>
        <br />

        <div>
          <label>
            Llegada
            <input type="text" placeholder="dd/mm/aaaa"></input>
          </label>
          <label>
            Salida
            <input type="text" placeholder="dd/mm/aaaa"></input>
          </label>
        </div>

        <label>
          Viajeros
          <input type="text" placeholder="Viajeros"></input>
        </label>

        <div>
          <button onClick={() => alert('UwU')}> Buscar</button>
        </div>
      </form>
    </div>
  );
};
export default Form;
