import "./Btn.css";

function BtnSecondary({ text, onClick }) {
  return (
    <button className="btn__secondary" onClick={onClick}>
      {text}
    </button>
  );
}

export default BtnSecondary;
