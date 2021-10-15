const getIsLogedIn = state => state.user.isLogedIn

const getUserName = state => state.user.user.name

const getIsRefreshing = state => state.user.isRefreshing

const getError = state => state.user.error


export {
    getIsLogedIn,
    getUserName,
    getIsRefreshing,
    getError
}