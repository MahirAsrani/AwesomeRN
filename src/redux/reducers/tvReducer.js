import {FETCH_ALL_STREAMS, SELECT_STREAM_ID} from '../../constants.js';

const initialState = {
  data: [],
  loading: true,
  selectedStreamId: null,
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
      if (data.find(({meta}) => meta.id === action.payload))
        return {
          ...state,
          selectedStreamId: action.payload,
        };

    default:
      return state;
  }
};
export default tvReducer;
