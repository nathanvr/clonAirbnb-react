import '../styles/components/Button.scss';

const Button = (props) => {
  const { text, cond, top, left } = props;
  const btn = cond ? 'btn1' : 'btn2';
  const tex = cond ? 'text1' : 'text2';
  const style = `top: ${top} left: ${left}`;

  return (
    <button className={btn}>
      <p className={tex}>{text}</p>
    </button>
  );
};

export default Button;
