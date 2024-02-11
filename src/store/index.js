import { createStore } from 'vuex'
import contact from './modules/contact.js'
import system from './modules/system.js'

const options = {
    strict: process.env.NODE_ENV !== 'production',
    modules: {
        contact,
        system
    }
}
const store = createStore(options)
export default store