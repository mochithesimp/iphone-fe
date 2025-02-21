import { signInWithEmailAndPassword } from "firebase/auth";
import ResgiterForm from "./Register-form";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { auth } from "../components/Firebase";
import { toast } from "react-toastify";
import GoogleLogin from "../GoogleLogin";
import "../Style.css";
interface LoginFormProps {
  activeForm: "login" | "register" | "forget";
  setActiveForm: (form: "login" | "register" | "forget") => void;
}
const LoginForm: React.FC<LoginFormProps> = ({ activeForm, setActiveForm }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in Successfully");
      window.location.href = "/profile";
      toast.success("User logged in Successfully", {
        position: "top-center",
      });
    } catch (error) {
      console.log(error);

      toast.error((error as Error).message, {
        position: "bottom-center",
      });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div
          className="login-form"
          style={{
            left: activeForm === "login" ? "50%" : "150%",
            opacity: activeForm === "login" ? 1 : 0,
          }}
        >
          <div className="form-title">
            <span>Sign In</span>
          </div>
          <div className="form-inputs">
            <div className="input-box">
              <input
                type="text"
                className="input-field"
                placeholder="email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <i className="bx bx-user icon"></i>
            </div>
            <div className="input-box">
              <input
                type={showPassword ? "text" : "password"}
                className="input-field"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <i
                className={`bx ${
                  showPassword ? "bx-lock-open" : "bx-lock-alt"
                } icon`}
                onClick={() => setShowPassword(!showPassword)}
              ></i>
            </div>
            <div className="forgot-pass">
              <NavLink
                to="/ForgetPass"
                className={`${activeForm === "forget" ? "active-btn" : ""}`}
                onClick={() => setActiveForm("forget")}
              >
                Forgot Password?
              </NavLink>
            </div>
            <div className="input-box">
              <button className="input-submit">
                <span>Sign In</span>
                <i className="bx bx-right-arrow-alt"></i>
              </button>
            </div>
          </div>
          <div className="social-login">
            <GoogleLogin />
            <i className="bx bxl-facebook"></i>
            <i className="bx bxl-github"></i>
          </div>
        </div>       
      </form>
      <ResgiterForm activeForm={activeForm} />
    </div>
  );
};
export default LoginForm;
