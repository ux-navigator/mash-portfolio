export interface State {
  isScrolled: boolean
}

export type Action = ReturnType<typeof setScrolled>

interface SetScrolledPayload {
  isScrolled: boolean
}

export const initialState: State = {
  isScrolled: false
}

const SET_SCROLLED = 'SET_SCROLLED'

export const setScrolled = (payload: SetScrolledPayload) => ({
  type: SET_SCROLLED,
  payload,
})

function globalReducer(state: State, action: Action) {
  switch (action.type) {
    case SET_SCROLLED:
      return {
        ...state,
        isScrolled: action.payload.isScrolled
      }
    default:
      return state
  }
}

export default globalReducer