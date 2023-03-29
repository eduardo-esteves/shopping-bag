import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({

  state: {
    products: []
  },

  mutations: {
    loadProducts(state, products) {
      console.log(products)
      state.products = products
    }
  },

  actions: {
    loadProducts({ commit }) {
      axios.get('https://fakestoreapi.com/products')
      .then(resp => {
        commit('loadProducts', resp.data)
      })
    }
  },

  modules: {
  }

})
