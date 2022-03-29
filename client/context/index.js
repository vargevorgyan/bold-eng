import {createContext} from "react"

export const AuthContext = createContext({
	authState: {data: null, error: null},
	setAuthState: auth => {}
})
