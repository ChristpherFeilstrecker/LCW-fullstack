
import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../constants/BaseURL";
import GlobalContext from "../global/globalContext";

export const useProtectedPage = () => {
  let navigate = useNavigate();
  const data = useContext(GlobalContext);
  let token = data.token

  let urlLink = BASE_URL+"/validator"
  let body = {
    token: token
  }

  if (token) {

    axios
      .post(urlLink, body)
      .then((response) => {

      })
      .catch((error) => {

        if (error.response.data === "invalid token" || error.response.data === "jwt malformed" || error.response.data === "jwt expired") {
          navigate("/admin");
        }
      });
  }

  if (token === null) {
    navigate("/admin");
  }

} 