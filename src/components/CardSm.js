import '../styles/components/CardSm.scss';

const CardSm = (props) => {
  const { text, src } = props;
  return (
    <div className="bg-cardsm">
      <div className="rectangle-sm">
        <img loading="lazy" src={src}></img>
      </div>
      <h2 className="text-cardsm">{text}</h2>
    </div>
  );
};

export default CardSm;
