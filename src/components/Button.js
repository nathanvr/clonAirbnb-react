import '../styles/components/Button.scss';

const Button = (props) => {
  const { text, cond } = props;
  const btn = cond ? 'btn1' : 'btn2';
  const tex = cond ? 'text1' : 'text2';
  console.log(`btn: ${btn} tex: ${tex} cnd: ${cond}`);
  return (
    <button className={btn}>
      <p className={tex}>{text}</p>
    </button>
  );
};

export default Button;
