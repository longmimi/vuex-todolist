export default {
    getToDo(states) {
        return states.event.filter(function(d) {
            if (d.type === 1) {   //1代表未完成的状态码
                return d
            }
        })
    },
    getDone(states){
        return states.event.filter(function (d) {
            if (d.type === 2) {   //2代表已完成的状态码
                return d
            }
        })
    },
    getCancel(states) {
        return states.event.filter(function (d) {
            if (d.type === 3) {   //2代表已完成的状态码
                return d
            }
        })
    }
}