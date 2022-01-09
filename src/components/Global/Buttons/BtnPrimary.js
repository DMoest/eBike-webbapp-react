import "./Btn.css";

function BtnPrimary({ text, onClick }) {
  return (
    <button className="btn__primary" onClick={onClick}>
      {text}
    </button>
  );
}

export default BtnPrimary;
