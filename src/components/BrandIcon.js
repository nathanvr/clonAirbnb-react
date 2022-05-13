import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const BrandIcon = (props) => {
  const { iconType, colorIcon, sizeIcon, right } = props;
  return (
    <FontAwesomeIcon
      icon={iconType}
      style={{
        color: colorIcon,
        fontSize: sizeIcon,
        paddingLeft: right,
      }}
    />
  );
};
export default BrandIcon;
