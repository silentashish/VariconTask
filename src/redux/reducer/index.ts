import {
  GET_DATA_FAILURE,
  GET_DATA_SUCCESS,
  GET_DATA_REQUEST,
} from "../constants";

const INITIAL_STATE = {
  loading: false,
  data: {},
};

const LoadReducer: any = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case GET_DATA_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case GET_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };

    case GET_DATA_FAILURE:
      return {
        ...state,
        loading: false,
      };
  }
};

export default LoadReducer;
