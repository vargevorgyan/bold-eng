import Header from "../../components/header"
import styled from "styled-components"
import AdminPanelTitle from "../../components/adminPanel/AdminPanelTitle"
import DeleteAdminPanelForm from "../../components/adminPanel/DeleteAdminPanelForm"
import {getCookie} from "cookies-next"
import {jwtKey} from "../../constants/auth/tokenCookieKey"
import api from "../../api"

const Wrapper = styled.div`
	height: 100%;
	width: 100%;
`

const Main = styled.main``

function DeleteScholarships() {
	return (
		<Wrapper>
			<Header whiteBg />
			<Main>
				<AdminPanelTitle>Delete Scholarships</AdminPanelTitle>
				<DeleteAdminPanelForm />
			</Main>
		</Wrapper>
	)
}

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

export default DeleteScholarships
