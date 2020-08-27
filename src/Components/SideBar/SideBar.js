import React from "react";
import "./SideBar.scss";
import {
  setYear,
  setSuccessfulLanding,
  setSuccessfulLaunch,
} from "../Action/Action";
import { useDispatch, useSelector } from "react-redux";

function SideBar() {
  let initialYear = 2006;
  let yearList = [];
  const year = useSelector((state) => state.year);
  const land = useSelector((state) => state.land);
  const launch = useSelector((state) => state.launch);
  const dispatch = useDispatch();

  const selectYear = (e) => {
    if (year === e.target.innerText) {
      dispatch(setYear(""));
    } else {
      dispatch(setYear(e.target.innerText));
    }
  };

  const selectLand = (e) => {
    if (land === e.target.innerText) {
      dispatch(setSuccessfulLanding(""));
    } else {
      dispatch(setSuccessfulLanding(e.target.innerText));
    }
  };

  const selectLaunch = (e) => {
    if (launch === e.target.innerText) {
      dispatch(setSuccessfulLaunch(""));
    } else {
      dispatch(setSuccessfulLaunch(e.target.innerText));
    }
  };

  while (initialYear <= 2020) {
    yearList.push(
      <div className="year" key={initialYear}>
        <button
          id={initialYear}
          onClick={(e) => selectYear(e)}
          style={{ backgroundColor: year == initialYear ? "#58a758" : "" }}
        >
          {initialYear}
        </button>
      </div>
    );
    initialYear++;
  }

  return (
    <div className="sidebar">
      <div className="sidebar-container">
        <div className="filter-label">Filters</div>
        <div className="underline-label">Launch Year</div>
        <div className="action-container">{yearList}</div>
        <div className="underline-label">Successful Launch</div>
        <div className="action-container">
          <div className="year">
            <button style={{ backgroundColor: launch.toString() === "True" ? "#58a758" : "" }} onClick={(e) => selectLaunch(e)}>True</button>
          </div>
          <div className="year">
            <button style={{ backgroundColor: launch.toString() === "False" ? "#58a758" : "" }} onClick={(e) => selectLaunch(e)}>False</button>
          </div>
        </div>
        <div className="underline-label">Successful Landing</div>
        <div className="action-container">
          <div className="year">
            <button style={{ backgroundColor: land.toString() === "True" ? "#58a758" : "" }} onClick={(e) => selectLand(e)}>True</button>
          </div>
          <div className="year">
            <button style={{ backgroundColor: land.toString() === "False" ? "#58a758" : "" }} onClick={(e) => selectLand(e)}>False</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
