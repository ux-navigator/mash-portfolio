/* External dependencies */
import React, { createContext } from 'react'
import { noop } from 'lodash-es'

/* Internal dependencies */
import { State, Action, initialState } from 'reducers/globalReducer'

interface GlobalContextAttr {
  state: State
  dispatch: React.Dispatch<Action>
}

export const GlobalContext = createContext<GlobalContextAttr>({ state: initialState, dispatch: noop })