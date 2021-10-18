/* eslint-disable no-empty-pattern */

import { getMockData } from "@/services/callService.js"
import { CreateFeed } from "@/services/callService.js"

const state = {
    data: []
  }
  
  const getters = { 
    getData (state) {
        return state.data
      }
}
  
const actions = {
    async getMockData({ commit }) {
        const resp = await getMockData();
        commit("GET_DATA", resp);
      },
      
      async CreateFeed( {  } ,data) {
        await CreateFeed(data);
      },  
}

const mutations = {
    GET_DATA (state, payload) {
        state.data = payload
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}