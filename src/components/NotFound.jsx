import { useNavigate } from "react-router";
import { customErrorMsgs } from "../utils/customErrorMsgs";

function NotFound({ costumError }) {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate("/");
  };

  const customMsg =
    costumError &&
    customErrorMsgs.hasOwnProperty(costumError.code) &&
    customErrorMsgs[costumError.code];

  return (
    <div className="notfound-block no-scroll">
      <div className="notfound-body">
        <button onClick={handleClick}>Back to main</button>
        <h2>{costumError ? costumError.code : "404"}</h2>
        <h3>{costumError ? customMsg : "Not found"}</h3>
        <p>
          {costumError ? costumError.message : "Oops! Something went wrong!"}
        </p>
      </div>
    </div>
  );
}

export default NotFound;
