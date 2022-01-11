import "./ErrorNotice.css";
import icon__error from "@/assets/img/icons/icon__error.svg";

function ErrorNotice({ error }) {
  return (
    <>
      <div className="errornotice__outer-wrapper">
        <img src={icon__error} alt="Error" className="error__icon" />
        {error}
      </div>
    </>
  );
}

export default ErrorNotice;
