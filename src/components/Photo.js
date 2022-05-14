import '../styles/components/Photo.scss';

const Photo = (props) => {
  const { src, x, y } = props;
  return (
    <div style={{ width: x, height: y }} className="photo">
      <img loading="lazy" src={src} alt=""></img>
    </div>
  );
};

export default Photo;
