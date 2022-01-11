import "./Btn.css";

function BtnSecondary({ text, onClick, icon }) {
  return (
    <button className="btn__secondary" onClick={onClick}>
      {icon ? <img src={icon} alt="icon" className="btn__icon" /> : null} {text}
    </button>
  );
}

export default BtnSecondary;
