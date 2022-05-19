import Photo from './Photo';
import '../styles/components/Module2hh.scss';

const Module2hh = (props) => {
  const { album } = props;
  return (
    <div className="module2hh">
      <Photo src={album[1]} x="50%" y="100%" />
      <Photo src={album[2]} x="50%" y="100%" />
    </div>
  );
};

export default Module2hh;
