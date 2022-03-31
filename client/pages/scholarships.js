import Header from "../components/header"
import styled from "styled-components"
import SearchScholarships from "../components/scholarships/ScholarshipsSearch"
import ScholarshipsItems from "../components/scholarships/ScholarshipItems"

const Wrapper = styled.div`
	height: 100%;
	width: 100%;
`

const Main = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-bottom: 30px;
`

export default function Scholarships() {
	return (
		<Wrapper>
			<Header whiteBg />
			<Main>
				<SearchScholarships />
				<ScholarshipsItems />
			</Main>
		</Wrapper>
	)
}
