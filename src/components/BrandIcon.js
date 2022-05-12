import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const BrandIcon = (props) => {
  const { iconType, colorIcon, sizeIcon } = props;
  return (
    <FontAwesomeIcon
      icon={iconType}
      style={{ color: colorIcon, fontSize: sizeIcon }}
    />
  );
};
export default BrandIcon;
