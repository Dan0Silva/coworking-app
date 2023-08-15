import React, { ReactNode, createContext, useReducer } from 'react'

interface State {
  user: UserType | null
  auth: boolean
}

interface Reducers {
  [key: string]: (state: State, action: Action) => State
}

interface AuthContextValue {
  state: State
  dispatch: React.Dispatch<Action>
}

interface Props {
  children: ReactNode
}

const initialState: State = {
  user: null,
  auth: false,
}

const reducers: Reducers = {
  LogIn(state, action) {
    const newState = { ...state }

    newState.user = action.payload
    newState.auth = true

    return { ...newState }
  },

  LogOff(state, action) {
    return {
      ...initialState,
    }
  },
}

export const AuthContext = createContext<AuthContextValue>(
  {} as AuthContextValue,
)

const UserProvider: React.FC<Props> = (props) => {
  const mainReducer = (state: State, action: Action) => {
    const reducerFunction = reducers[action.type]
    return reducerFunction ? reducerFunction(state, action) : state
  }

  const [state, dispatch] = useReducer(mainReducer, initialState)

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default UserProvider
