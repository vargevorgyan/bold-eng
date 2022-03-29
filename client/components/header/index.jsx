import Image from "next/image"
import Link from "next/link"
import React, {useContext} from "react"
import styled, {css} from "styled-components"
import {AuthContext} from "../../context"
import Icon from "./icon"

const HeaderStyled = styled.header`
	height: 90px;
	display: flex;
	padding: 0 40px;
	justify-content: space-between;
	${props =>
		props.whiteBg &&
		css`
			background-color: white;
			box-shadow: inset 0px -1px 0px rgba(0, 0, 0, 0.07);
		`}
`
const UserIconAndAuthStatus = styled.div`
	display: flex;
`

const AuthStatus = styled.a`
	height: 100%;
	font-weight: 500;
	font-size: 14px;
	display: flex;
	align-items: center;
	color: #787878;
	margin-left: 18px;
`

function Header({whiteBg}) {
	const {authState} = useContext(AuthContext)
	console.log(authState)
	const logInOrOut = authState?.data ? "Log out" : "Log in"
	return (
		<HeaderStyled whiteBg={whiteBg}>
			<Icon />
			<UserIconAndAuthStatus>
				{authState?.data && <Image src="/auth/userIcon.svg" alt="" width={36} height={36} />}
				<Link href="/auth" passHref>
					<AuthStatus>{logInOrOut}</AuthStatus>
				</Link>
			</UserIconAndAuthStatus>
		</HeaderStyled>
	)
}

export default Header
