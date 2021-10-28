import React, { useState, useContext, useEffect } from "react";
import AuthContext from "../context/auth/authContext";

const Home = ({ history }) => {
  const [search, setSearch] = useState("");

  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
    //eslint-disable-next-line
  }, []);

  const getStreamer = (e) => {
    e.preventDefault();
    if (search === "") {
      alert("Please Search the right Sreamer");
    } else {
      sessionStorage.setItem("channel", search.split("/")[3]);
      setSearch("");
      history.push("/stream");
      // <Live />;
      // new Twitch.Embed("ppv", {
      //   width: 854,
      //   height: 480,
      //   channel: sessionStorage.getItem('creator_name'),
      //   parent:"localhost"
      //     });
    }
  };
  return (
    <div className="home">
      <h4>PASTE ANY LINK OF YOUR FAVORITE CREATOR</h4>
      <form onSubmit={getStreamer}>
        <input
          type="url"
          name={search}
          placeholder="e.g  https://www.twitch.tv/swagg"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="btn btn-dark color-white">Search</button>
      </form>
      <p>Search on platforms like Youtube, TikTok, and Twitter!</p>
    </div>
  );
};

export default Home;
