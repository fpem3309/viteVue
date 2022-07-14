import { createStore } from 'vuex'
import axios from 'axios'

const store = createStore({
    state() {
        return {
            images: [],
        }
    },
    mutations: {
        setMore(state, data) {
            state.more = data
        }
    },
    actions: {
        getData() {
            axios.get('https://api.unsplash.com/photos/random', {
                params: {
                    client_id: 'LMocYADsnYRNA7-0pBbIZ8f2MqK7ArTnN7Bx1RXNzK4',
                    count: 30
                }
            }).then((a) => {
                console.log(a.data);
                this.commit('setMore', a.data)
            })
        }

    },

})

export default store