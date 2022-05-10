import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { faAirbnb } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(fas, faAirbnb);

const Icon = () => {
  return (
    <div>
      <FontAwesomeIcon icon="fa-brands fa-airbnb" />
    </div>
  );
};
export default Icon;
