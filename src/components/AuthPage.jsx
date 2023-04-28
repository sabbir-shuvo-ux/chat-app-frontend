import axios from "axios";

const AuthPage = (props) => {
  const onSubmit = (e) => {
    e.preventDefault();
    const { value } = e.target[0];

    axios
      .post("https://chat-app-fqah.onrender.com/authenticate", {
        username: value,
      })
      .then((res) => {
        props.onAuth({ ...res.data, secret: value });
      })
      .catch((err) => {
        console.log("error: ", err);
        alert("Something Wrong. Please try again");
      });
  };

  return (
    <div className="background">
      <form onSubmit={onSubmit} className="form-card">
        <div className="form-title">Welcome 👋</div>

        <div className="form-subtitle">Set a username to get started</div>

        <div className="auth">
          <div className="auth-label">Username</div>
          <input className="auth-input" name="username" />
          <button className="auth-button" type="submit">
            Enter
          </button>
        </div>
      </form>
    </div>
  );
};

export default AuthPage;
