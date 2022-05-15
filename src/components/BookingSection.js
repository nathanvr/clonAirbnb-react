import Button from './Button';

const { renderIntoDocument } = require('react-dom/test-utils');

const BookingSection = () => {
  return (
    <section className="booking">
      <div className="booking__fee">
        <div className="booking__fee__price">
          <span>muchos millones por noche</span>
        </div>
        <div className="booking__fee__rating">
          <span>aca van las calificaciones</span>
        </div>
      </div>

      <div className="booking__schedule">
        <div className="booking__schedule__calendar">
          <button>
            <div className="booking__schedule__calendar__arrive">
              <span>llegada</span>
            </div>
            <div className="booking__schedule__calendar__departure">
              <span>salida</span>
            </div>
          </button>
          <div className="booking__schedule__guest">
            <div className="booking__schedule__guest__label">
              <label className="booking__schedule__guest__label__comp">
                <span className="booking__schedule__guest__label__comp__tag">
                  huespedes
                </span>
                <span className="booking__schedule__guest__label__comp__num">
                  3 huespedes
                </span>
              </label>
            </div>
            <div>
              <>aca va el icono</>
            </div>
          </div>
        </div>
      </div>
      <div className="booking__reservation">
        <Button text="Reservar" cond="1" />
      </div>
      <div>
        <p>No se hará ningún cargo por el momento</p>
      </div>

      <div className="booking__feeDetail">
        <div className="booking__feeDetail__resume__charge">
          <button>x noches</button>
          <span>mucho diner</span>
        </div>
        <div className="booking__feeDetail__resume__cleaning">
          <button>limpieza</button>
          <span>mas dinero</span>
        </div>
        <div className="booking__feeDetail__resume__service">
          <button>servicio</button>
          <span> pffff</span>
        </div>
        <div className="booking__feeDetail__resume__bigTotal">
          <span> Total</span>
          <span> WOW </span>
        </div>
      </div>
    </section>
  );
};
export default BookingSection;
