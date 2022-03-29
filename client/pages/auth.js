import Header from "../components/header"
import styled from "styled-components"
import AuthForm from "../components/auth/AuthForm"

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

export default function Auth() {
	return (
		<Wrapper>
			<Header />
			<Main>
				<AuthForm />
			</Main>
		</Wrapper>
	)
}

// export const getServerSideProps = ({req, res}) => {
// 	// send to auth/me
// }
