export interface State {
  isScrolled: boolean
  currentPage: number
}

export type Action =
  ReturnType<typeof setScrolled>
  | ReturnType<typeof setCurrentPage>

interface SetScrolledPayload {
  isScrolled: boolean
}

interface SetCurrentPagePayload {
  currentPage: number
}

export const initialState: State = {
  isScrolled: false,
  currentPage: 0,
}

const SET_SCROLLED = 'SET_SCROLLED' as const
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE' as const

export const setScrolled = (payload: SetScrolledPayload) => ({
  type: SET_SCROLLED,
  payload,
})

export const setCurrentPage = (payload: SetCurrentPagePayload) => ({
  type: SET_CURRENT_PAGE,
  payload,
})

function globalReducer(state: State, action: Action) {
  switch (action.type) {
    case SET_SCROLLED:
      return {
        ...state,
        isScrolled: action.payload.isScrolled,
      }
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload.currentPage,
      }
    default:
      return state
  }
}

export default globalReducer