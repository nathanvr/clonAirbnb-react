import Photo from './Photo';
import '../styles/components/Module1xx.scss';

const Module1xx = (props) => {
  const { album } = props;
  return (
    <div className="module1xx">
      <Photo src={album[1]} x="100%" y="100%" />
    </div>
  );
};

export default Module1xx;
