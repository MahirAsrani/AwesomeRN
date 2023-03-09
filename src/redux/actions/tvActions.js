import {FETCH_ALL_STREAMS} from '../../constants';

export const fetchAllStreams = data => {
  return {
    type: FETCH_ALL_STREAMS,
    payload: data,
  };
};
