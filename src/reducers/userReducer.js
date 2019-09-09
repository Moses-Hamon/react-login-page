const INITIAL_STATE = {
  userEmail: ""
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case "USER_NAME":
      return { ...state, payload };
    default:
      return state;
  }
};
