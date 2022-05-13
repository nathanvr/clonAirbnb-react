import '../styles/components/CardXl.scss';
import { faAirbnb } from '@fortawesome/free-brands-svg-icons';
import BrandIcon from './BrandIcon';

const CardXl = (props) => {
  const { src, title, text } = props;
  return (
    <div className="bg-cardxl">
      <div className="rectangle-xl">
        <div className="iconxl">
          <BrandIcon
            iconType={faAirbnb}
            colorIcon={'#FFFFFF'}
            sizeIcon="58px"
          />
        </div>
        <img className="imagexl" loading="lazy" src={src}></img>
      </div>
      <h2 className="titlexl">{title}</h2>
      <p className="textxl">{text}</p>
    </div>
  );
};

export default CardXl;
