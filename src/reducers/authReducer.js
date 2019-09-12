const INITIAL_STATE = {
  isLoggedIn: false
};

const checkUserAndPassword = ({ username, password }) => {
  return username === "user@email.com" && password === "password";
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case "LOGIN":
      if (checkUserAndPassword(payload)) {
        return { ...state, isLoggedIn: true };
      }
      return state;
    case "LOGOUT":
      return { ...state, isLoggedIn: false };
    default:
      return state;
  }
};
