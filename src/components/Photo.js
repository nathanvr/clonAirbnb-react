import '../styles/components/Photo.scss';

const Photo = (props) => {
  const { src, x, y } = props;
<<<<<<< HEAD
=======

>>>>>>> 2422d41b137ca47cebcc1df4601361de39a1c643
  return (
    <div style={{ width: x, height: y }} className="photo">
      <img loading="lazy" src={src} alt=""></img>
    </div>
  );
};

export default Photo;
