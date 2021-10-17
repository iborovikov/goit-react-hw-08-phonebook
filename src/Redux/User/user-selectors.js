const getIsLogedIn = state => state.user.isLogedIn
const getUserName = state => state.user.user.name
const getIsRefreshing = state => state.user.isRefreshing
const getIsPasswordCorrect = state => state.user.isPasswordCorrect
const getIsUserAlradyRegister = state => state.user.isUserAlradyRegister

export {
    getIsLogedIn,
    getUserName,
    getIsRefreshing,
    getIsPasswordCorrect,
    getIsUserAlradyRegister
}