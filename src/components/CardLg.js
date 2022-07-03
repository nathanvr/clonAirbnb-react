import '../styles/components/CardLg.scss';
import Button from './Button';

const CardLg = (props) => {
  const { src, textbtn, city, score, text } = props;
  return (
    <div className="bg-cardlg">
      <div className="rectangle-lg">
        <img loading="lazy" src={src} alt=""></img>
      </div>
      <Button text={textbtn} top="206px"  cond="2"  />
      <h2 className="city-lg">{city}</h2>
      <span className="star-lg">★</span>
      <p className="score-lg">{score}</p>
      <p className="text-lg">{text}</p>
    </div>
  );
};

export default CardLg;
