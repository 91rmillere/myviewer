
import axios from 'axios';

const state = {
    events: [],
    selectedEvent: null
}

const getters = {
    allEvents: state => state.events, 
    selectedEvent: state => state.selectedEvent
}

const actions = {
    getAllEvents({commit}){
        axios.get('http://localhost:1323/api/v1/events').then(response =>{
            console.log(response.data);            
            commit('setEvents', response.data);
                    
        });
    }
}

const mutations = {
    setEvents (state, payload){
        console.log(payload)
        state = {
            ...state,
            events: payload,
            selectedEvent: payload[0]
        }
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}