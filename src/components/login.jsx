import  { useEffect, useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const [userValues, setUserValues] = useState({
    name: "",
    password: "",
    email: ""                                                                                                                                             
  });
  
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserValues((user) => ({ ...user, [name]: value }));
  };

  const handleChangeLogin = (e) => {
    const { name, value } = e.target;
    setUserLogin((user) => ({ ...user, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userValues)
    })
    .then((response)=>response.json())
      .then(() => {
        console.log("User created");
         // Add the correct path for navigation
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("Logging in with:", userLogin); // Add this line
    try {
      const response = await fetch("http://localhost:3000/doctorlogin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(userLogin)
      });
      const result = await response.json();
      if (response.ok) {
        alert('user is logged in successfully')
        console.log("User is logged in successfully");
        console.log("Results are: =>",result);
        navigate(`/dashboard/${result.userName}`);
      } else {
        alert(result.message)
        console.error("Login failed:", result.message);
      }
    } catch (err) {
      alert(err)
      console.error("User failed to login", err);
    }
  };
  

  useEffect(() => {
    const signUpButton = document.getElementById("signUp");
    const signInButton = document.getElementById("signIn");
    const main = document.getElementById("main");

    signUpButton.addEventListener("click", () => {
      main.classList.add("right-panel-active");
    });

    signInButton.addEventListener("click", () => {
      main.classList.remove("right-panel-active");
    });

    // Cleanup event listeners on component unmount
    return () => {
      signUpButton.removeEventListener("click", () => {
        main.classList.add("right-panel-active");
      });
      signInButton.removeEventListener("click", () => {
        main.classList.remove("right-panel-active");
      });
    };
  }, []);

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
        rel="stylesheet"
      />
      <div className="container" id="main">
        <div className="sign-up">
          <form onSubmit={handleSubmit}>
            <h1>Create Account</h1>
            <div className="social-container">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
            </div>
            <p>or use your email for registration</p>
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              onChange={(e) => handleChange(e)}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              onChange={(e) => handleChange(e)}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              onChange={(e) => handleChange(e)}
            />
            <button type="submit">Sign Up</button>
          </form>
        </div>

        <div className="sign-in">
          <form onSubmit={handleLogin}>
            <h1>Sign in</h1>
            <div className="social-container">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
            </div>
            <p>or use your account</p>
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              onChange={(e) => handleChangeLogin(e)}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              onChange={(e) => handleChangeLogin(e)}
            />
            <a href="#">Forget your password?</a>
            <button type="submit">Sign In</button>
          </form>
        </div>

        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-left">
              <h1>Welcome Back</h1>
              <p>To keep connected with us please login with your personal info</p>
              <button id="signIn">Sign In</button>
            </div>

            <div className="overlay-right">
              <h1>Hello, Friend</h1>
              <p>Enter your personal details and start your journey with us</p>
              <button id="signUp">Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
