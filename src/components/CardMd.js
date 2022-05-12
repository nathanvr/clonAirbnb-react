import '../styles/components/CardMd.scss';
import {Link} from 'react-router-dom'

const CardMd = (props) => {
  const { src, country, texth3, textp, score } = props;
  return (
    <div className="bg-cardmd">
      <div className="rectangle-md">
        <img loading="lazy" src={src} alt=""></img>
      </div>
      <h2 className="country">{country}</h2>
      <Link to="#"><h3 className="cmdtexth3">{texth3}</h3></Link>
      <p className="cmdtextp">{textp}</p>
      <p className="score">{score}★</p>
    </div>
  );
};

export default CardMd;
