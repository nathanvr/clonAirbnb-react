import '../styles/components/Button.scss';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import BrandIcon from './BrandIcon';

const Button = (props) => {
  const { text, cond, top } = props;
  const btn = `btn${cond}`;
  const tex = `text${cond}`;
  const color = cond != 3 ? 'transparent' : '#484848';

  return (
    <button style={{ top: top }} className={btn}>
      <p className={tex}>{text}</p>
      <BrandIcon
        right="83%"
        iconType={faAngleRight}
        colorIcon={color}
        sizeIcon="15px"
      />
    </button>
  );
};

export default Button;
