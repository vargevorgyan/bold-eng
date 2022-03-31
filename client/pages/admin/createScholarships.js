import Header from "../../components/header"
import styled from "styled-components"
import AdminPanelTitle from "../../components/adminPanel/AdminPanelTitle"
import CreateAdminPanelForm from "../../components/adminPanel/CreateAdminPanelForm"
import api from "../../api"
import {getCookie} from "cookies-next"
import {jwtKey} from "../../constants/auth/tokenCookieKey"

const Wrapper = styled.div`
	height: 100%;
	width: 100%;
`

const Main = styled.main``

function Admin() {
	return (
		<Wrapper>
			<Header whiteBg />
			<Main>
				<AdminPanelTitle>Create Scholarships</AdminPanelTitle>
				<CreateAdminPanelForm />
			</Main>
		</Wrapper>
	)
}

export default Admin

export const getServerSideProps = async ({req, res}) => {
	try {
		const token = getCookie(jwtKey, {req, res})
		const {data} = await api.post("/auth/me", {
			token
		})
		if (data?.isAdmin) {
			return {
				props: data
			}
		}
	} catch (e) {
		console.log(e)
	}
	return {
		redirect: {
			permanent: true,
			destination: "/scholarships"
		}
	}
}
