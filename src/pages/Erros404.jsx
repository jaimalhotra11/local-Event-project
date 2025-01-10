import { useNavigate } from "react-router-dom";
import error from "../assets/images/error.jpg";
import "./Errors404.css";
function Erros404() {
  const navigate = useNavigate();
  const GoToHome = () => {
    navigate("/");
  };
  return (
    <>
      <div className="error-container">
        <div className="error-container-img">
          <img src={error} alt="erro" className="error-img" />
        </div>
        <div className="error-container-heading error-container-img">
          <h1 className="error-heading">Page Not Found</h1>
        </div>
        <div className="error-container-button error-container-img">
          <button className="error-button" onClick={GoToHome}>
            Back To Home!
          </button>
        </div>
      </div>
    </>
  );
}

export default Erros404;
