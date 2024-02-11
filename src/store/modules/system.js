export default {
    state() {
        return {
            isMobile: window.innerWidth <= 500,
            isMobileNavOpen: false
        }
    },
    mutations: {
        setIsMobile(state, currIsMobile) {
            state.isMobile = currIsMobile
        },
        setIsMobileNavOpen(state) {
            state.isMobileNavOpen = !state.isMobileNavOpen
        },
    },
    actions: {
    },
    getters: {
        isMobile(state) { return state.isMobile },
        isMobileNavOpen(state) { return state.isMobileNavOpen },
    }
}