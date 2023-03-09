import {
  FETCH_ALL_STREAMS,
  SELECT_STREAM_ID,
  SET_LOADING,
} from '../../constants.js';

const initialState = {
  data: [],
  loading: true,
  selectedStreamId: null,
  videoStreamLoad: false,
};

const tvReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_STREAMS:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    case SELECT_STREAM_ID:
      return {
        ...state,
        selectedStreamId: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        videoStreamLoad: action.payload,
      };

    default:
      return state;
  }
};
export default tvReducer;
