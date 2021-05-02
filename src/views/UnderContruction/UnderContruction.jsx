import "./UnderContruction.css";
import logo from "../../assets/images/UnderContruction/under-construction-illustration.svg";

function UnderContruction() {
  return (
    <div className="UnderContruction">
      <header className="UnderContruction-header">
        <div className="UnderContruction-h1">under contruction</div>
        <div className="UnderContruction-h2">We'll be back soon!</div>

        <img src={logo} className="UnderContruction-logo" alt="logo" />

        <div className="UnderContruction-h3">
          We are doing important maintenance work on the website and will be
          back shortly.
          <br />
          We apologise for any inconvenience caused.
        </div>
      </header>
    </div>
  );
}

export default UnderContruction;
