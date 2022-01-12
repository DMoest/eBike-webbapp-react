import "./Btn.css";

function BtnPrimary({ text, onClick, icon }) {
  return (
    <button className="btn__primary" onClick={onClick}>
      {icon ? <img src={icon} alt="icon" className="btn__icon" /> : null} {text}
    </button>
  );
}

export default BtnPrimary;
