export const inbox = {
  state: {
    inbox: {
      uiState: 'LOADING',
      mails: [],
      error: {},
    },
  },
  mutations: {
    setInboxFields (state, payload) {
      state.inbox = {
        ...state.inbox,
        ...payload,
      };
    },
  },
  getters: {
    isInboxLoading (state) {
      return state.inbox.uiState === 'LOADING';
    },
    getInboxMails (state) {
      return state.inbox.mails;
    },
    getInboxError (state) {
      return state.inbox.error;
    },
  },
  actions: {
    async fetchMails({commit}) {
      commit ('setInboxFields', {uiState: 'LOADING'});
      try {
        const mails = await fetch (
          'https://jsonplaceholder.typicode.com/posts'
        ).then (res => {
          if (res.status >= 400) {
            throw new Error (res.statusText);
          }
          return res.json ();
        });
        commit ('setInboxFields', {mails, uiState: 'LOADED'});
      } catch (err) {
        commit ('setInboxFields', {
          uiState: 'LOADED',
          error: {message: err.message},
        });
      }
    },
  },
};
