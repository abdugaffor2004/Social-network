export const getProfile = (state) =>{
    return state.profilePage.profile
}

export const getProfileStatus = (state) =>{
    return state.profilePage.profileStatus
}

export const getAuthorizedUserId = (state) =>{
    return state.auth.id
}

export const getIsAuth = (state) => {
    return state.auth.isAuth
}