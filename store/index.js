export const state = () => ({
    isLoggedIn: false,
    user: { },
    temp: {},
})

export const mutations = {
    login (state) {
        state.isLoggedIn = true;
    },
    logout(state) {
        state.isLoggedIn = false;
    },
    setUser(state, user) {
        state.user = JSON.parse(JSON.stringify(user));
    }
}

export const getters = {
    isLoggedIn: s => !!s.isLoggedIn,
    user: s => s.user,
    // temp: s => s.temp,
}
