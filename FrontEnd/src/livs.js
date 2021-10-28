import { useEffect } from "react";
import axios from "axios";

function Live() {
  useEffect(() => {
    const fetchData = async () => {
      await axios
        .post(
          "https://id.twitch.tv/oauth2/token?client_id=x6wdq29ufay33k2lbrg8l4j0de0uaq&client_secret=9x5ha310fawx2wxk10thfbzua0ucvw&grant_type=client_credentials"
        )
        .then((response) => console.log(response.data));
    };
    fetchData();
  });
}
export default Live;
