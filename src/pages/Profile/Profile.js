import { useState, useEffect } from "react";
import Api from "@/helper/api";

// Components
import Nav from "@/components/Global/Nav/Nav";
import DocumentTitle from "react-document-title";
import BtnBack from "@/components/Global/BtnBack/BtnBack";
import ErrorNotice from "@/components/Global/ErrorNotice/ErrorNotice";

// CSS
import "./Profile.css";

function Profile() {
  const [profileData, setProfileData] = useState([]);
  const [error, setError] = useState("");

  // const api = new Api();
  // const user = "temp";

  // const getUserData = () => {
  //   api
  //     .getUserProfile(user)
  //     .then((res) => {
  //       setProfileData(res.data.user);
  //     })
  //     .catch((err) => {
  //       setError(err);
  //     });
  // };

  // useEffect(() => {
  //   getUserData();
  // }, []);

  return (
    <>
      <DocumentTitle title="Ebike - Profil"></DocumentTitle>
      <Nav />
      <div className="wrapper">
        <BtnBack url={"/"} />
        <h1>Profil</h1>
        {error ? <ErrorNotice error={error} /> : null}
      </div>
    </>
  );
}

export default Profile;
