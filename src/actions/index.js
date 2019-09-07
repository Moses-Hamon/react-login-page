export const logIn = (admin, password) => {
    return {
        type: 'LOGIN',
        payload: { user: admin, password }
    };
};

export const logOut = () => {
    return {
        type: "LOGOUT"
    };
};

export const updateUsername = username => {
    return {
        type: "USERNAME",
        payload: username
    };
};

export const updatePassword = password => {
    return {
        type: "PASSWORD",
        payload: password
    };
};