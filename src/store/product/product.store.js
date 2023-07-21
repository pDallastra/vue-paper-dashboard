import { getProducts } from "@/api/product.api"

const state = {
  prodcuts: []
}

const mutations = {
  setProducts: (state, prodcuts) => state.prodcuts = prodcuts
}

const actions = {
  async getProducts({ commit, rootState }) {
    console.log('test2')
    const { success, data, err } = await getProducts(rootState.auth.accessToken);

    if (!success) {
      return { success };
    }

    commit('setProducts', data);

    console.log('test5', { success })
    return { success }
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}