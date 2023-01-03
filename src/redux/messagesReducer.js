import { createAsyncThunk } from "@reduxjs/toolkit";

const FETCH_RANDOM_MESSAGE = 'FETCH_RANDOM_MESSAGE';

export const fetchRandomMessage = createAsyncThunk(
  FETCH_RANDOM_MESSAGE,
  async(args, { dispatch }) => {
    const response = await fetch('http://127.0.0.1:3000/random_message/index', {
      mode: 'no-cors',
      method: 'GET',
      header: {
        'Access-Control-Allow-Origin': '*',
      }
    });
    const data = await response.json();
    console.log('Data => ', data);
    dispatch({
      type: FETCH_RANDOM_MESSAGE,
      payload: data,
    });
  },
);

// export const fetchRandomMessage = createAsyncThunk(
//   FETCH_RANDOM_MESSAGE,
//   async(args, { dispatch }) => {
//     const options = {
//       origin: 'http://127.0.0.1:3000',
//       url: `http://127.0.0.1:3000/random_message/index`,
//       method: 'GET',
//       headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application/json',
//         'Access-Control-Allow-Origin': '*'
//       }
//     };
//     const response = await axios(options);
//     console.log(response)
//     const data = await response.json();
//     dispatch({
//       type: FETCH_RANDOM_MESSAGE,
//       payload: data,
//     });
//   },
// );

const messagesReducer = (initialState = {}, action) => {
  switch (action.type) {
    case FETCH_RANDOM_MESSAGE:
      return {...action.payload}  
    default: {
      return initialState
    }
  }
};

export default messagesReducer;
