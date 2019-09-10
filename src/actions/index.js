export const logIn = payload => {
    return {
        type: 'LOGIN',
        payload
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