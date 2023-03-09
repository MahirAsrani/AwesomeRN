import {
  FETCH_ALL_STREAMS,
  SELECT_STREAM_ID,
  SET_LOADING,
} from '../../constants';

export const fetchAllStreams = data => {
  return {
    type: FETCH_ALL_STREAMS,
    payload: data,
  };
};

export const setStream = id => {
  return {
    type: SELECT_STREAM_ID,
    payload: id,
  };
};

export const setStreamLoading = bool => {
  return {
    type: SET_LOADING,
    payload: bool,
  };
};
