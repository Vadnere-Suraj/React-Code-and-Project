import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Protected({ children, authentication = true }) {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    if (authentication && authStatus !== authentication) {
      navigate("/login");
    } else if (!authentication && authStatus !== authentication) {
      navigate("/");
    }

    setLoader(false);
  }, [navigate, authStatus, authentication]);

  return loader ? <h1>Wait Loading .... </h1> : <>{children}</>;
}


