import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <>
      <main>
        <div>
          <h2>Please Signup or Login for better services</h2>
        </div>
        <div>
          <form>
            <input type="Text" placeholder="Enter First name" />
            <input type="Text" placeholder="Enter  Surname" />
            <input type="Text" placeholder="Enter Email Address" />
            <input type="password" placeholder="Enter your passowrd" />
            <input type="password" placeholder="Confirm your password" />

            <button>Submit</button>
            <button>
              <Link to="/login">Login</Link>
            </button>
          </form>
        </div>
      </main>
    </>
  );
};

export default Signup;
