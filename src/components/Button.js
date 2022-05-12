import '../styles/components/Button.scss';

const Button = (props) => {
  const { text, cond, top } = props;
  const btn = cond ? 'btn1' : 'btn2';
  const tex = cond ? 'text1' : 'text2';

  return (
    <button style={{ top: top }} className={btn}>
      <p className={tex}>{text}</p>
    </button>
  );
};

export default Button;
