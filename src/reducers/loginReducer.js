const INITIAL_STATE = {
  isLoggedIn: false,
  username: "",
  password: "",
  loginMSG: null
};

// Authentication for user and password
const checkUserAndPassword = ({ user, password }) => {
  console.log(`user: ${user} password:${password}`);
  console.log(user === "user" && password === "password");

  return user === "user" && password === "password";
};


export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "LOGIN":
      if (action.payload.user === "" || action.payload.password === "") {
        return { ...state, loginMSG: "You must fill in both fields" };
      }
      if (checkUserAndPassword(action.payload)) {
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
    case "USERNAME":
      return { ...state, username: action.payload };
    case "PASSWORD":
      return { ...state, password: action.payload };
    default:
      return state;
  }
};
