import '../styles/components/CardSm.scss';
import {Link} from "react-router-dom";

const CardSm = (props) => {
  const { text } = props;
  const { src } = props;
  const {link} = props;
  return (
    <Link to={link}> 
    <div className="bg-cardsm">
      <div className="rectangle-sm">
        <img loading="lazy" src={src} alt=""></img>
      </div>
      <h2 className="text-cardsm" >{text}</h2>
    </div>
    </Link>
  );
};

export default CardSm;
