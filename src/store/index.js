import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({

  state: {
    products: [],
    productsInBag: [],
  },

  mutations: {
    loadProducts(state, products) {
      console.log(products)
      state.products = products
    },
    addToBag(state, product) {
      state.productsInBag.push(product)
    }
  },

  actions: {
    loadProducts({ commit }) {
      axios.get('https://fakestoreapi.com/products')
      .then(resp => {
        commit('loadProducts', resp.data)
      })
    },
    addToBag({ commit }, product) {
      commit('addToBag', product)
    }
  },

  modules: {
  }

})
