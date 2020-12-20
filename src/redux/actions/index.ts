import { getAllData } from "../../services/api";
import {
  GET_DATA_FAILURE,
  GET_DATA_SUCCESS,
  GET_DATA_REQUEST,
} from "../constants";

export const GetDataApi = () => (dispatch: any, getState: any) => {
  dispatch({ type: GET_DATA_REQUEST });
  getAllData()
    .then((response) => {
      if (response.status === 200) {
        dispatch({ type: GET_DATA_SUCCESS, payload: response.data });
      } else {
        dispatch({ type: GET_DATA_FAILURE });
      }
    })
    .catch((error) => {
      dispatch({ type: GET_DATA_FAILURE });
    });
};
