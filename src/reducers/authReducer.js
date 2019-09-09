const INITIAL_STATE = {
  isLoggedIn: false
};

const checkUserAndPassword = ({ user, password }) => {
  return user === "user" && password === "password";
};

export default (state = INITIAL_STATE, {type, payload}) => {
  switch (type) {
    case "LOGIN":
      if (payload.user === "" || payload.password === "") {
        return { ...state, loginMSG: "You must fill in both fields" };
      }
      if (checkUserAndPassword(payload)) {
        return { ...state, isLoggedIn: true, loginMSG: null };
      } else {
        return { ...state, loginMSG: "Incorrect Please try again" };
      }
    case "LOGOUT":
      return {
        ...state,
        isLoggedIn: false,
        loginMSG: "You have logged out :)"
      };
    default:
      return state;
  }
};
