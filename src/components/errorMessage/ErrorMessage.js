import error from "../../img/error.gif";

const ErrorMessage = () => {
  <img
    src={error}
    style={{
      display: "block",
      width: "250px",
      height: "250px",
      objectFit: "contain",
      margin: "0 auto",
    }}
    alt="errorMessage"
  />;
};

export default ErrorMessage;
