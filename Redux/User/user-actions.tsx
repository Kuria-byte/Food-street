export const setCurrentUser = (user: any) =>({
    type : 'SET_CURRENT_USER',
    payload : user
});

export const logOut = () =>({
    type: 'LOG_OUT_USER'
});