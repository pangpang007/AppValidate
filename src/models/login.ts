export default {
  namespace: 'login',
  state: { userInfo: undefined, isLogin: false },
  reducers: {
    login(state, { payload: userInfo }) {
      state.userInfo = userInfo;
      state.isLogin = true;
      return state;
    },
  },
};
