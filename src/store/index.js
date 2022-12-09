import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    // Endpoints of API
    endpointLastBlogs: 'https://api.barissonmez.com.tr/api/v1/posts/6/limit',
    endpointTags: 'https://api.barissonmez.com.tr/api/v1/tags',
    endpointHomeReferences: 'https://api.barissonmez.com.tr/api/v1/posts/4/limit',

    // States
    token: 'TOKEN_WILL_BE_HERE',
    lastBlogs: [],
    tags: [],
    homeServices: [],
    homeReferences: []
  },
  mutations: {
    _setLastBlogs(state, payload) {
      state.lastBlogs = payload;
    },
    _setTags(state, payload) {
      state.tags = payload;
    },
    _setHomeServices(state, payload) {
      state.homeServices = payload;
    },
    _setHomeReferences(state, payload) {
      state.homeReferences = payload;
    }
  },
  actions: {
    async setLastBlogs({ commit }) {
      try {
        const response = await axios.get(this.state.endpointLastBlogs, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + this.state.token
          },
          params: {
            type: 1
          }
        });
        commit('_setLastBlogs', response.data.data);
      } catch (err) {
        console.log(err);
      }
    },
    async setTags({ commit }) {
      try {
        const response = await axios.get(this.state.endpointTags, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + this.state.token
          },
          params: {
            type: 1
          }
        });
        commit('_setTags', response.data.data);
      } catch (err) {
        console.log(err);
      }
    },
    setHomeServices({ commit }) {
      commit('_setHomeServices', [
        {
          title: 'web uygulamalar',
          url: '/hizmetler/web-uygulamalari'
        },
        {
          title: 'mobil uygulamalar',
          url: '/hizmetler/mobil-uygulamalari'
        },
        {
          title: 'gomülü sistemler',
          url: '/hizmetler/gomulu-sistemler'
        },
        {
          title: 'grafik tasarım',
          url: '/hizmetler/grafik-tasarim'
        }
      ]);
    },
    async setHomeReferences({ commit }) {
      try {
        const response = await axios.get(this.state.endpointHomeReferences, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + this.state.token
          },
          params: {
            type: 3,
            is_headline: 1
          }
        });
        commit('_setHomeReferences', response.data.data);
      } catch (err) {
        console.log(err);
      }
    }
  },
  getters: {
    lastBlogs(state) {
      return state.lastBlogs;
    },
    getTags(state) {
      return state.tags;
    },
    getHomeServices(state) {
      return state.homeServices;
    },
    getHomeReferences(state) {
      return state.homeReferences;
    }
  },
  modules: {
  }
});
