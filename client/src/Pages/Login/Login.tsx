import React, { ChangeEvent, useState } from "react";
import styles from "./style.module.css";
import LucideIcons from "../../Assets/Icons/Icons";
import Login_User from "../../APIs/Login";
import { Bad_Request, Home_Route, LocalStorageKey, Request_Succesfull, ToastError } from "../../Utils/Constant";
import { useDispatch } from "react-redux";
import { LoginSlice } from "../../Store/slices/UserSlice";
import { JWTDecode } from "../../Utils/Function";
import { toast } from "react-toastify";
import Logo from "../../Assets/Images/logo.png";
import { useNavigate } from "react-router-dom";
function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isPasswordHide, setIsPasswordHide] = useState<boolean>(true);
  const [inputValues, setInputValues] = useState<{ email: string; password: string }>({
    email: "",
    password: "",
  });
  const [DBError, setDBError] = useState<{ email: boolean; password: boolean }>({
    email: false,
    password: false,
  });
  const [isRememberMe, setIsRememberMe] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const handleCheck = (e: ChangeEvent<HTMLInputElement>) => {
    setIsRememberMe(!isRememberMe);
  };

  const handlePasswordVisibility = () => {
    setIsPasswordHide(!isPasswordHide);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name == "email") {
      setDBError((prev) => ({ ...prev, email: false }));
    } else {
      setDBError((prev) => ({ ...prev, password: false }));
    }
    setInputValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    const res = await Login_User({ ...inputValues, remember: isRememberMe });
  
    if (res?.status == Request_Succesfull) {
      localStorage.setItem(LocalStorageKey, res?.token);
      const decode = JWTDecode(res?.token);
      dispatch(LoginSlice({ id: decode.id, name: decode.name }));
      navigate(Home_Route);
    } else if (res?.response?.status == Bad_Request) {
      toast.error(res?.response?.data?.message, ToastError);
      if (res?.response?.data?.message.includes("User")) {
        setDBError((prev) => ({ ...prev, email: true }));
      }
      if (res?.response?.data?.message.includes("password")) {
        setDBError((prev) => ({ ...prev, password: true }));
      }
    } else {
      toast.error("Something went wrong!", ToastError);
    }
    setLoading(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.logo}>
          <img src={Logo} alt="" width="100%" height="100%" />
        </div>
        <div className={styles.title}>Form Generator System</div>
        <form onSubmit={handleSubmit}>
          <div className={styles.heading}>Login</div>
          <div className={styles.label}>Email</div>
          <input
            type="email"
            value={inputValues.email}
            name="email"
            onChange={handleChange}
            className={`${styles.input} ${DBError.email && styles.error}`}
            required
            autoComplete="off"
          />
          <div className={styles.passwordBox}>
            <div className={styles.label}>Password</div>
            <div className={styles.eye} onClick={handlePasswordVisibility}>
              {isPasswordHide ? <LucideIcons name="hide" size={18} /> : <LucideIcons name="unhide" size={18} />}
            </div>
          </div>
          <input
            value={inputValues.password}
            name="password"
            onChange={handleChange}
            required
            type={isPasswordHide ? "password" : "text"}
            className={`${styles.input} ${DBError.password && styles.error}`}
            minLength={8}
            maxLength={20}
          />

          <div className={styles.remeberBox}>
            <input type="checkbox" checked={isRememberMe} onChange={handleCheck} className={styles.remeberInput} />
            <div className={styles.remeberText}>Remember me</div>
          </div>

          <button type="submit" className={styles.btn}>
            {loading ? <span className={styles.loader}></span> : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
