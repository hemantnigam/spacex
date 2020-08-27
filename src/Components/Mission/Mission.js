/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./Mission.scss";

function Mission({ mission }) {
  return (
    <div className="mission">
      <div className="mission-logo">
        <img
          src={mission.links && mission.links.mission_patch}
          alt="No Image Available"
        />
      </div>
      <div className="mission-name">{`${mission.mission_name} #${mission.flight_number}`}</div>
      <div className="mission-ids">
        <label>Mission Ids:</label>
        {mission.mission_id &&
        mission.mission_id.length &&
        mission.mission_id.length > 0 ? (
          <ul>
            {mission.mission_id.map((id, index) => (
              <li key={index}>{id}</li>
            ))}
          </ul>
        ) : (
          <label className="na">Not Available</label>
        )}
      </div>
      <div className="mission-year">
        <span>Launch Year:</span>
        <span>{mission.launch_year || "Not Available"}</span>
      </div>
      <div className="successful-launch">
        <span>Successful Launch:</span>
        <span>{JSON.stringify(mission.launch_success) || "Not Available"}</span>
      </div>
      <div className="successful-landing">
        <span>Successful Landing:</span>
        <span>
          {mission.rocket.first_stage.cores[0].land_success
            ? JSON.stringify(mission.rocket.first_stage.cores[0].land_success)
            : "Not Available"}
        </span>
      </div>
    </div>
  );
}

export default Mission;
