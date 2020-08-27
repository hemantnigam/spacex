import {
  SET_YEAR,
  SET_SUCCESSFUL_LAUNCH,
  SET_SUCCESSFUL_LANDING,
} from "../Constant/constant";

export function setYear(payload) {
  return {
    type: SET_YEAR,
    payload,
  };
}

export function setSuccessfulLaunch(payload) {
  return {
    type: SET_SUCCESSFUL_LAUNCH,
    payload,
  };
}

export function setSuccessfulLanding(payload) {
  return {
    type: SET_SUCCESSFUL_LANDING,
    payload,
  };
}
