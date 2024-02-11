import { createStore } from 'vuex'
import contact from './modules/contact.js'

const options = {
    strict: process.env.NODE_ENV !== 'production',
    modules: {
        contact,
    }
}
const store = createStore(options)
export default store