import {
  FETCH_ALL_STREAMS,
  SELECT_STREAM_ID,
  SET_LOADING,
} from '../../constants';

export const fetchAllStreams = () => async (dispatch, getState) => {
  const streams = await new Promise((res, rej) =>
    setTimeout(() => res(require('../../dummy.json')), 3000),
  );

  dispatch({
    type: FETCH_ALL_STREAMS,
    payload: streams.data.results,
  });
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
