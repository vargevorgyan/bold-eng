import Header from "../components/header"
import styled from "styled-components"
import SearchScholarships from "../components/scholarships/SearchScholarships"
import {useEffect} from "react"
import api from "../api"

const Wrapper = styled.div`
	height: 100%;
	width: 100%;
`

const Main = styled.main``

export default function Scholarships() {
	useEffect(() => {
		;(async () => {
			try {
				const res = await api.get("/scholarships/get")
				console.log({res})
			} catch (e) {
				console.log({e})
			}
		})()
	}, [])
	return (
		<Wrapper>
			<Header whiteBg />
			<Main>
				<SearchScholarships />
			</Main>
		</Wrapper>
	)
}
