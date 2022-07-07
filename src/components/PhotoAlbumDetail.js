import '../styles/components/PhotoAlbumDetail.scss';

const PhotoAlbumDetail = (props) => {
  const { src, key } = props;
  return (
    <div className="photoAlbum">
      <img key={`detail${key}`} loading="lazy" src={src} alt={`${src}`}></img>
    </div>
  );
};
export default PhotoAlbumDetail;
