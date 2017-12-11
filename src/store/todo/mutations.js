import * as type from './mutations_types.js'
import * as func from '../function'

export default {
    [type.ADDEVENT](states, obj) {
        states.count++
        obj.items.id = states.count
        states.event.unshift(obj.items)
    },
    [type.EVENTDONE](states, obj) {
        for (let i = 0; i < states.event.length; i++) {
            if (states.event[i].id === obj.id) {
                states.event[i].type = 2
                states.event[i].time = func.getDate()
                var item = states.event[i]
                states.event.splice(i, 1)
                break
            }
        }
        states.event.unshift(item)
        func.local.set(states)
    },
    [type.EVENTTODO](states, obj) {
        for (let i = 0; i < states.event.length; i++) {
            if (states.event[i].id === obj.id) {
                states.event[i].type = 1   //1 未完成
                var item = states.event[i]
                states.event.splice(i, 1)
                break
            }
        }
        states.event.unshift(item)
        func.local.set(states)
    },
    [type.EVENTCANCEL](states,obj){
        for (let i = 0; i < states.event.length; i++) {
            if (states.event[i].id === obj.id) {
                states.event[i].type = 3
                var item = states.event[i]
                states.event.splice(i, 1)
                break
            }
        }
        states.event.unshift(item);
        func.local.set(states);
    }
}