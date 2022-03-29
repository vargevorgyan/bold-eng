import Header from "../components/header"
import styled from "styled-components"

const Wrapper = styled.div`
	height: 100%;
	width: 100%;
`

const Main = styled.main`
	height: 100%;
	display: flex;
	justify-content: center;
	padding-top: 50px;
`

export default function Scholarship() {
	return (
		<Wrapper>
			<Header whiteBg />
		</Wrapper>
	)
}
