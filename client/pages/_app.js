import {useState, useEffect} from "react"
import {getCookie} from "cookies-next"
import api from "../api"
import HeadSeo from "../components/HeadSeo"
import {jwtKey} from "../constants/auth/tokenCookieKey"
import {AuthContext} from "../context"
import GlobalStyle from "../styled/global.js"

function MyApp({Component, pageProps}) {
	const [authState, setAuthState] = useState(null)
	useEffect(() => {
		;(async () => {
			try {
				const token = getCookie(jwtKey)
				if (!token) return

				const {data} = await api.post("/auth/me", {
					token
				})
				console.log({data})
				setAuthState({data})
			} catch (error) {
				setAuthState({data: null, error})
			}
		})()
	}, [])

	return (
		<AuthContext.Provider value={{authState, setAuthState}}>
			<GlobalStyle />
			<HeadSeo />
			<Component {...pageProps} />
		</AuthContext.Provider>
	)
}

export default MyApp
