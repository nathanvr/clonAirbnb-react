import BrandIcon from './BrandIcon';

const TextIcon = (props) => {
  const { iconType, colorIcon, sizeIcon, right, text } = props;
  const styles = {
    color: colorIcon,
    fontSize: sizeIcon,
    paddingLeft: right,
  };
  return (
    <div>
      <p style={{ textDecoration: 'underline', color: colorIcon }}>
        <span style={{ paddingRight: '5px' }}>
          <BrandIcon
            iconType={iconType}
            colorIcon={colorIcon}
            sizeIcon={sizeIcon}
          />
        </span>
        {text}
      </p>
    </div>
  );
};

export default TextIcon;
