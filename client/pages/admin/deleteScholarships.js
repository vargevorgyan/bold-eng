import {useEffect, useContext} from "react"
import Header from "../../components/header"
import styled from "styled-components"
import AdminPanelTitle from "../../components/adminPanel/AdminPanelTitle"
import DeleteAdminPanelForm from "../../components/adminPanel/DeleteAdminPanelForm"
import {AuthContext} from "../../context"
import {useRouter} from "next/router"

const Wrapper = styled.div`
	height: 100%;
	width: 100%;
`

const Main = styled.main``

function Admin() {
	const {authState} = useContext(AuthContext)
	const router = useRouter()

	useEffect(() => {
		if (authState?.data?.isAdmin === false) router.push("/")
	}, [authState?.data?.isAdmin, router])

	return (
		<Wrapper>
			<Header whiteBg />
			<Main>
				<AdminPanelTitle>
					{authState?.data?.isAdmin === null
						? "Please await"
						: authState?.data?.isAdmin && "Delete Scholarships"}
				</AdminPanelTitle>
				{authState?.data?.isAdmin && <DeleteAdminPanelForm />}
			</Main>
		</Wrapper>
	)
}

export default Admin