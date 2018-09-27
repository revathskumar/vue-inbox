export const filters = {
  state: {
    fields: {},
    appliedFilters: {},
  },
  mutations: {
    setFilter (state, payload) {
      console.log ('setFilter :: ', payload);
      state[payload.key] = payload.value;
    },
    setFilterFields (state, payload) {
      console.log ('setFilterFields :: ', payload);
      state.fields = {
        ...state.fields,
        ...payload,
      };
    },
    setAppliedFilters (state, payload) {
      state.appliedFilters = {...state.appliedFilters, ...payload};
    },
  },
};
