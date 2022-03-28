import HeadSeo from "../components/HeadSeo"
import GlobalStyle from "../styled/global.js"

function MyApp({Component, pageProps}) {
	return (
		<>
			<GlobalStyle />
			<HeadSeo />
			<Component {...pageProps} />
		</>
	)
}

export default MyApp
