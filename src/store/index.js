import { createStore } from 'vuex'
import contact from './modules/contact.js'

const options = {
    modules: {
        contact,
    }
}
const store = createStore(options)
export default store