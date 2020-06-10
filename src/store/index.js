import browser from 'webextension-polyfill'
import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex)

const vuexPersist = new VuexPersistence({
  storage: browser.storage.local,
  asyncStorage: true,
  restoreState: async (key, storage) => {
    const result = await storage.get(key)
    const json = result[key]

    let state = {}
    try {
      state = JSON.parse(json)
    } catch (e) {} // eslint-disable-line no-empty

    return {
      ...state,
      __storageReady: true
    }
  },
  saveState: async (key, state, storage) => {
    const json = JSON.stringify(state)
    await storage.set({ [key]: json })
  }
})

const initialState = {
  projects: [],
  bots: []
}

const config = {
  state: {
    ...initialState
  },
  mutations: {
    addProject(state, { projects }) {
      const id =
        Math.max.apply(null, [0, ...state.projects.map((item) => item.id)]) + 1

      state.projects = [
        ...state.projects,
        {
          id: id + 1,
          ...projects
        }
      ]
    },
    addBot(state, { bots }) {
      const id =
      Math.max.apply(null, [0, ...state.bots.map((item) => item.id)]) + 1

      state.bots = [
        ...state.bots,
        {
          id: id + 1,
          ...bots
        }
      ]
    },
    removeBot(state, { id }) {
      state.bots = state.bots.filter((item) => item.id !== id)
    },
    setBot(state, { id, bots }) {
      state.bots = state.bots.map((item) => {
        if (item.id !== id) {
          return item
        }
        return {
          ...item,
          ...bots
        }
      })
    },
    removeProject(state, { id }) {
      state.projects = state.projects.filter((item) => item.id !== id)
    },
    setProject(state, { id, projects }) {
      state.projects = state.projects.map((item) => {
        if (item.id !== id) {
          return item
        }
        return {
          ...item,
          ...projects
        }
      })
    }
  },
  plugins: [
    vuexPersist.plugin,
    (store) => {
      store.subscribe(() => {
        browser.runtime.sendMessage({ id: 'settingsChanged' })
      })
    }
  ]
}

export default function createStore(waitStorageReady = false) {
  return new Promise((resolve) => {
    const store = new Vuex.Store(config)
    if (!waitStorageReady) {
      resolve(store)
      return
    }

    const timeout = Date.now() + 1000
    const timer = setInterval(() => {
      if (store.state.__storageReady || Date.now() > timeout) {
        clearInterval(timer)
        resolve(store)
      }
    }, 100)
  })
}
