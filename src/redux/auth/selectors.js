export const selectUser = state => state.auth.user;
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectIsRefreshing = state => state.auth.isRefreshing;
export const selectErrorRegister = state => state.auth.errorRegister;
export const selectErrorLogin = state => state.auth.errorLogin;
