import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <form>
        <div>
          <input type="text" placeholder="Enter your Email" />
          <input type="password" placeholder="Enter your password" />
        </div>
        <div>
          <button>Submit</button>
          <link>Forgot password?</link>
          <button>
            <Link to="/signup">Signup</Link>
          </button>
        </div>
      </form>
    </>
  );
};

export default Login;
