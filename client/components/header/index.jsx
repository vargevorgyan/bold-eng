import {removeCookies} from "cookies-next"
import Image from "next/image"
import Link from "next/link"
import React, {useContext} from "react"
import styled, {css} from "styled-components"
import {jwtKey} from "../../constants/auth/tokenCookieKey"
import {device} from "../../constants/breakpoints"
import {AuthContext} from "../../context"
import Icon from "./icon"

const HeaderStyled = styled.header`
	height: 90px;
	display: flex;
	padding: 0 30px;
	justify-content: space-between;
	${props =>
		props.whiteBg &&
		css`
			background-color: white;
			box-shadow: inset 0px -1px 0px rgba(0, 0, 0, 0.07);
		`}
	@media ${device.tablet} {
		padding: 0 90px;
	}
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
	const {authState, setAuthState} = useContext(AuthContext)
	const logInOrOut = authState?.data ? "Log out" : "Log in"

	const logOut = () => {
		if (authState?.data) {
			removeCookies(jwtKey)
			setAuthState({data: null, error: null})
		}
	}

	return (
		<HeaderStyled whiteBg={whiteBg}>
			<Icon />
			<UserIconAndAuthStatus>
				{authState?.data && <Image src="/auth/userIcon.svg" alt="" width={36} height={36} />}
				<Link href="/auth" passHref>
					<AuthStatus onClick={logOut}>{logInOrOut}</AuthStatus>
				</Link>
			</UserIconAndAuthStatus>
		</HeaderStyled>
	)
}

export default Header
