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

export const updateUsername = payload => {
    return {
        type: "USERNAME",
        payload
    };
};
