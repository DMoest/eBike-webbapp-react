import axios from "axios";
// import { getCookie } from "./utils";

export default class Api {
  constructor() {
    this.api_token = null;
    this.client = null;
    this.api_url = "http://localhost:8000/api/v1";
  }

  init = () => {
    // this.api_token = getCookie("ACCESS_TOKEN");

    let headers = {
      Accept: "application/json",
    };

    if (this.api_token) {
      headers.Authorization = `Bearer ${this.api_token}`;
    }

    this.client = axios.create({
      baseURL: this.api_url,
      timeout: 31000,
      headers: headers,
    });

    return this.client;
  };

  // Customer
  getUserProfile = (params) => {
    return this.init().get("/user/profile", { params: params });
  };

  getUserTravels = (params) => {
    return this.init().get("/user/travels", { params: params });
  };

  // Bike
  getBikeData = (id) => {
    return this.init().get("/bike/" + id);
  };

  postFinishedTravel = (params) => {
    return this.init().post("/travel" + { params: params });
  };
}
