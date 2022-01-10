import Nav from "@/components/Global/Nav/Nav";
import DocumentTitle from "react-document-title";

import "./Profile.css";

function Profile() {
  return (
    <>
      <DocumentTitle title="Hem"></DocumentTitle>
      <Nav />
      <div className="wrapper">
        <h1>Profil</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </>
  );
}

export default Profile;
