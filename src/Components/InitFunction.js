export const setUserId = (userId) => {
    return {
        type: 'SetUserId',
        payload: userId
    }
}

export const setRole = (role) => {
    return {
        type: 'SetRole',
        payload: role
    }
}