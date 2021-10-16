const getIsLogedIn = state => state.user.isLogedIn
const getUserName = state => state.user.user.name
const getIsRefreshing = state => state.user.isRefreshing

export {
    getIsLogedIn,
    getUserName,
    getIsRefreshing
}