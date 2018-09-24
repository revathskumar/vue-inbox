export const inbox = {
  state: {
    inbox: {
      uiState: 'LOADING',
      mails: [],
      error: {},
    },
    newMail: {
      mail: {},
      error: {},
      uiState: '',
      fieldErrors: {},
    },
  },
  mutations: {
    setInboxFields (state, payload) {
      state.inbox = {
        ...state.inbox,
        ...payload,
      };
    },
    setNewMailFields (state, payload) {
      state.newMail = {
        ...state.newMail,
        ...payload,
      };
    },
  },
  getters: {
    isInboxLoading (state) {
      return state.inbox.uiState === 'LOADING';
    },
    isNewMailLoading (state) {
      return state.newMail.uiState === 'LOADING';
    },
    getInboxMails (state) {
      return state.inbox.mails;
    },
    getInboxError (state) {
      return state.inbox.error;
    },
    newMail (state) {
      return state.newMail.mail;
    },
    fieldErrors (state) {
      return state.newMail.fieldErrors;
    },
  },
  actions: {
    async handleSubmit ({commit, state}, params) {
      commit ('setNewMailFields', {uiState: 'LOADING'});
      try {
        const newMail = await fetch (
          'https://jsonplaceholder.typicode.com/posts',
          {
            method: 'POST',
            body: JSON.stringify (params),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          }
        ).then (res => {
          if (res.status !== 201) {
            throw new Error (res.statusText);
          }
          return res.json ();
        });
        commit ('setNewMailFields', {mail: {}, uiState: 'LOADED'});
        commit ('setInboxFields', {mails: [newMail, ...state.inbox.mails]});
        return newMail;
      } catch (err) {
        commit ('setNewMailFields', {
          uiState: 'LOADED',
          error: {message: err.message},
        });
      }
    },
    async fetchMails (context) {
      const {commit, state} = context;
      if (state.inbox.mails.length > 0) {
        return;
      }
      console.log (context);
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
