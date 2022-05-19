import Photo from './Photo';
import '../styles/components/Module2vv.scss';

const Module2vv = (props) => {
  const { album } = props;
  return (
    <div className="module2vv">
      <Photo src={album[1]} x="50%" y="100%" />
      <Photo src={album[2]} x="50%" y="100%" />
    </div>
  );
};

export default Module2vv;
