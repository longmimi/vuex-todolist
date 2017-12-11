import actions from './actions.js'
import mutations from './mutations.js'
import getters from './getters.js'
import * as func from '../function.js'

const state = func.local.get() || {
    event: [],
    count: 0
}
export default {
    state,
    actions,
    mutations,
    getters
}