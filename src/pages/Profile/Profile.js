import { useState, useEffect } from "react";
import axios from "axios";

import Nav from "@/components/Global/Nav/Nav";
import DocumentTitle from "react-document-title";

import "./Profile.css";

function Profile() {
  const url = process.env.REACT_APP_API_BASE_URL + "/user/profile";
  const [profileData, setProfileData] = useState([]);

  // TODO: Breakout this
  const getBikes = async () => {
    try {
      const res = await axios.get(url);
      setProfileData(res);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getBikes();
  }, []);

  return (
    <>
      <DocumentTitle title="Ebike - Profil"></DocumentTitle>
      <Nav />
      <div className="wrapper">
        <h1>Profil</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </>
  );
}

export default Profile;
