import { useState, useEffect } from "react";
import DocumentTitle from "react-document-title";
import Api from "@/helper/api";

// Components
import Nav from "@/components/Global/Nav/Nav";
import ErrorNotice from "@/components/Global/ErrorNotice/ErrorNotice";
import BtnBack from "@/components/Global/BtnBack/BtnBack";

function Travels() {
  const [error, setError] = useState("");
  const [travelData, setTravelData] = useState([]);

  // const api = new Api();
  // const user = "temp";

  // const getUserTravels = () => {
  //   api
  //     .getUserTravels(user)
  //     .then((res) => {
  //       setTravelData(res.data.user);
  //     })
  //     .catch((err) => {
  //       setError(err);
  //     });
  // };

  // useEffect(() => {
  //   getUserTravels();
  // }, []);

  return (
    <>
      <DocumentTitle title="Ebike - Resor"></DocumentTitle>
      <Nav />
      <div className="wrapper"></div>
      <div className="wrapper">
        <BtnBack url={"/"} />
        <h1>Mina resor</h1>
        <p>Här hittar du information om dina tidigare resor.</p>
        {error ? <ErrorNotice error={error} /> : null}
      </div>
    </>
  );
}

export default Travels;
