import Loader1 from './Loader';
import Photo from './Photo';
import '../styles/components/Module5xx.scss';

const Module5xx = (props) => {
  const { album } = props;
  return (
    <div className="module5xx">
      <Photo className="module5xx-item1" src={album[0]} x="50%" y="100%" />
      <div className="module5_x">
        <Photo className="module5xx-itrm2" src={album[1]} x="50%" y="50%" />
        <Photo className="module5xx-itrm2" src={album[2]} x="50%" y="50%" />
        <Photo className="module5xx-itrm2" src={album[3]} x="50%" y="50%" />
        <Photo className="module5xx-itrm2" src={album[4]} x="50%" y="50%" />
      </div>
    </div>
  );
};

export default Module5xx;
