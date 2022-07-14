import { createStore } from 'vuex'
import axios from 'axios'

const store = createStore({
    state() {
        return {
            images: [],
        }
    },
    mutations: {

    },
    actions: {
        getData() {
            axios.get('https://api.unsplash.com/photos/random', {
                client_id: 'v0F7ccr-QO5x8jlZ2fKf8OqAYbCMjFOjUWRTyRRpwSM',
                count: 30
            }).then((a) => {
                console.log(a.data);
            })
        }

    },

})

export default store