import React, { useState, useEffect } from "react";
import "./Main.scss";
import "../Mission/Mission";
import Mission from "../Mission/Mission";
import { useSelector, useDispatch } from "react-redux";

function Main() {
  const year = useSelector((state) => state.year);
  const land = useSelector((state) => state.land);
  const launch = useSelector((state) => state.launch);
  const dispatch = useDispatch();
  const baseURL = "https://api.spaceXdata.com/v3/launches?limit=100";
  let [missionData, setMissionData] = useState([]);
  let [url, setURL] = useState(baseURL);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setMissionData(data))
      .catch((err) => console.log(err));
  }, [url]);

  useEffect(() => {
    const filter = {
      year: year,
      land: land,
      launch: launch,
    };

    let url = baseURL;

    for (let key in filter) {
      if (filter[key] !== "" && key === "year") {
        url = `${url}&launch_year=${filter[key]}`;
      } else if (filter[key] !== "" && key === "land") {
        url = `${url}&land_success=${filter[key]}`;
      } else if (filter[key] !== "" && key === "launch") {
        url = `${url}&launch_success=${filter[key]}`;
      }
    }
    setURL(url);
  }, [year, land, launch]);

  return (
    <div className="main">
      {missionData.map((mission, index) => {
        return (
          <div key={index} className="mission-container">
            <Mission mission={mission} />
          </div>
        );
      })}
    </div>
  );
}

export default Main;
