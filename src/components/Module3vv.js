import Photo from './Photo';
import '../styles/components/Module3vv.scss';

const Module3vv = (props) => {
  const { album } = props;
  return (
    <div className="module3vv">
      <Photo src={album[0]} x="66%" y="100%" />
      <div className="module3_v">
        <Photo src={album[1]} x="100%" y="50%" />
        <Photo src={album[2]} x="100%" y="50%" />
      </div>
    </div>
  );
};

export default Module3vv;
