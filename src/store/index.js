import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    // Endpoints of API
    apiURL: 'https://api.barissonmez.com.tr/api/v1/',
    apiBaseURL: 'https://api.barissonmez.com.tr/',

    // States
    token: 'TOKEN_WILL_BE_HERE',
    lastBlogs: [],
    tags: [],
    homeServices: [],
    homeReferences: [],
    blogPost: [],
    servicePost: [],
    socials: []
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
    },
    _setBlogPost(state, payload) {
      state.blogPost = payload;
    },
    _setServicePost(state, payload) {
      state.servicePost = payload;
    },
    _setSocials(state, payload) {
      state.socials = payload;
    }
  },

  actions: {
    async setLastBlogs({ commit }) {
      try {
        const url = `${this.state.apiURL}posts/6/limit`;
        const response = await axios.get(url, {
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
        const url = `${this.state.apiURL}tags`;
        const response = await axios.get(url, {
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
          url: '/hizmetler/web-uygulamalar'
        },
        {
          title: 'mobil uygulamalar',
          url: '/hizmetler/mobil-uygulamalar'
        },
        {
          title: 'gomülü sistemler',
          url: '/hizmetler/gomulu-sistemler'
        },
        {
          title: 'UI/grafik tasarım',
          url: '/hizmetler/ui-grafik-tasarim'
        }
      ]);
    },
    setSocials({ commit }) {
      commit('_setSocials', [
        { name: 'github', url: 'https://github.com/sonmez-baris' },
        { name: 'twitter', url: 'https://twitter.com/sonmezbaris' },
        { name: 'linkedin', url: 'https://www.linkedin.com/in/barissonmez/' },
        { name: 'medium', url: 'https://medium.com/@sonmez.baris' }
      ]);
    },
    async setHomeReferences({ commit }) {
      try {
        const url = `${this.state.apiURL}posts/4/limit`;
        const response = await axios.get(url, {
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
    },
    async setBlogPost({ commit }, payload) {
      try {
        const url = `${this.state.apiURL}posts/${payload.seflink}`;
        const response = await axios.get(url, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + this.state.token
          }
        });
        commit('_setBlogPost', response.data.data);
      } catch (err) {
        console.log(err);
      }
    },
    async setServicePost({ commit }, payload) {
      try {
        const url = `${this.state.apiURL}posts/${payload.seflink}`;
        const response = await axios.get(url, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + this.state.token
          }
        });
        commit('_setServicePost', response.data.data);
      } catch (err) {
        console.log(err);
      }
    }
  },

  getters: {
    getApiBaseURL(state) {
      return state.apiBaseURL;
    },
    getApiURL(state) {
      return state.apiURL;
    },
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
    },
    getBlogPost(state) {
      return state.blogPost;
    },
    getServicePost(state) {
      return state.servicePost;
    },
    getSocials(state) {
      return state.socials;
    }
  },

  modules: {
  }

});
