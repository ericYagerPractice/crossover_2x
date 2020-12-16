export function reducer (state, action) {
    switch(action.type) {
      case 'setUser':
        return { ...state, user: action.user, loading: false }
      case 'loaded':
        return { ...state, loading: false }
      default:
        return state
    }
  }
  