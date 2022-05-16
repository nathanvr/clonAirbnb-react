import Photo from './Photo';
import '../styles/components/Module3hv.scss';

const Module3hv = (props) => {
  const { album } = props;
  return (
    <div className="module3hv">
      <div className="module3h_">
        <Photo src={album[0]} x="100%" y="50%" />
        <Photo src={album[1]} x="100%" y="50%" />
      </div>
      <Photo src={album[2]} x="50%" y="100%" />
    </div>
  );
};

export default Module3hv;
