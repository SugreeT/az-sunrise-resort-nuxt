// store/index.js
export const state = () => ({
  lang: 'en'
})

export const mutations = {
  setLang(state, code) {
    state.lang = code
  }
}

export const actions = {
  nuxtClientInit({ commit }) {
    // รันตอน client startup
    const saved = localStorage.getItem('lang') || 'en'
    commit('setLang', saved)
  },
  changeLang({ commit }, code) {
    localStorage.setItem('lang', code)
    commit('setLang', code)
  }
}
