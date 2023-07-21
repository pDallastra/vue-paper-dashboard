import { login } from "@/api/auth.api"

const state = {
  accessToken: ''
}

const mutations = {
  setAccessToken: (state, accessToken) => state.accessToken = `Bearer ${accessToken}`
}

const actions = {
  async login({ commit }, payload) {
    const { success, data, err } = await login(payload);

    console.log({ success, data, err })

    if (!success) {
      console.log(err);
      return { success: false };
    }

    commit('setAccessToken', data.access_token);

    return { success: true }
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}