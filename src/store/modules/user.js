import { userService } from '@/services/user.service'

export default {
    state() {
        return {
            user: userService.getLoggedinUser()[0],
        }
    },
    mutations: {
        setUser(state, { user }) {
            state.user = user
        }
    },
    actions: {
        async signup({ commit }, { userName }) {
            try {
                const user = await userService.signup(userName)
                commit({ type: 'setUser', user })
            } catch (err) {
                console.error(err)
                throw err
            }
        },
        logout({ commit }) {
            try {
                userService.logout()
                commit({ type: 'setUser', user: null })
            } catch (err) {
                console.error(err)
                throw err
            }
        },
        async updateUserBalance({ commit }, { toContact, amount }) {
            try {
                const user = await userService.transferFunds(toContact, amount)
                commit({ type: 'setUser', user })
            } catch (err) {
                console.error(err)
                throw err
            }

        }
    },
    getters: {
        user(state) { return state.user },
    }
}