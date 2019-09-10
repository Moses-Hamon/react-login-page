const INITIAL_STATE = {
  userEmail: ""
};

export default (state = INITIAL_STATE, { type, payload }) => {
  console.log('reducer', payload);
  
  switch (type) {
    case "USERNAME":
      return { ...state, userEmail: payload };
    default:
      return state;
  }
};
