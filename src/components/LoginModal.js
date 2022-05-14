import '../styles/components/LoginModal.scss';

const LoginModal = () => {
  return (
    <div className="loginFormContainer">
      <div>
        <h2>Te damos la bienvenida a airbnb</h2>
      </div>
      <form>
        <div className="form-row">
          <div className="form__button__country">
            <label for="country__select">
              <div>
                <div
                  for="country__select"
                  className="form__button__country--text">
                  Pais/Region
                </div>
              </div>
            </label>
            <div className="form-group">
              <select id="country__select" className="form__group__select">
                <option value="1" selected>
                  Estados Unidos (+1)
                </option>
                <option value="2">Afganistan (+93)</option>
                <option value="3">Albania (+93)</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <input className="form-control" placeholder="Numero de telefono" />
          </div>
          <div className="form__body__politics">
            <p className="form__body__politics--text">
              Te vamos a confirmar el número por teléfono o mensaje de texto.
              Sujeto a las tarifas estándar para mensajes y datos.
              <a href="#politics">Política de privacidad</a>
            </p>
          </div>
        </div>

        <div className="form__button__continue">
          <button type="submit" className="btn btn-danger">
            <strong>Continua</strong>
          </button>
        </div>
      </form>
      <div className="dropdown-divider">o</div>

      <div className="form__buttons__sm">
        <button
          type="submit"
          className="form__buttons__sm__f btn btn-outline-dark">
          <div className="form__buttons__sm__f__content">
            <div className="form__buttons__sm__f__content--icon">
              <i className="fa-brands fa-facebook"></i>
            </div>
            <div className="form__buttons__sm__f__content--text">
              Continua con Facebook
            </div>
          </div>
        </button>
        <button
          type="submit"
          className="form__buttons__sm__g btn btn-outline-dark">
          <div className="form__buttons__sm__g__content">
            <div className="form__buttons__sm__g__content--icon">
              <i className="fa-brands fa-google"></i>
            </div>
            <div lass="form__buttons__sm__g__content--text">
              Continua con Google
            </div>
          </div>
        </button>
        <button
          type="submit"
          className="form__buttons__sm__a btn btn-outline-dark">
          <div className="form__buttons__sm__a__content">
            <div className="form__buttons__sm__a__content--icon">
              <i className="fa-brands fa-apple"></i>
            </div>
            <div lass="form__buttons__sm__a__content--text">
              Continua con Apple
            </div>
          </div>
        </button>
        <button
          type="submit"
          className="form__buttons__sm__em btn btn-outline-dark">
          <div className="form__buttons__sm__em__content">
            <div className="form__buttons__sm__em__content--icon">
              <i className="fa-solid fa-envelope"></i>
            </div>
            <div lass="form__buttons__sm__em__content--text">
              Continua con el correo electronico
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};
export default LoginModal;
