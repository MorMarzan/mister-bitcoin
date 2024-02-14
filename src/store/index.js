import { createStore } from 'vuex'
import contact from './modules/contact.js'
import system from './modules/system.js'
import user from './modules/user.js'

const options = {
    strict: process.env.NODE_ENV !== 'production',
    modules: {
        contact,
        system,
        user
    }
}
const store = createStore(options)
export default store