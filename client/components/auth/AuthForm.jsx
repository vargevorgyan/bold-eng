import styled from "styled-components"
import {authInputTypes} from "../../constants/auth/authInputTypes"
import PrimaryBtn from "../buttons/PrimaryBtn"
import Link from "../Link"
import AuthInput from "./AuthInput"

const Wrapper = styled.div`
	max-width: 90%;
	width: 432px;
	height: fit-content;
	background: #ffffff;
	box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.05), 0px 1px 5px rgba(0, 0, 0, 0.04);
	border-radius: 4px;
	padding: 0 44px 28px;
`

const Title = styled.h1`
	font-weight: 600;
	font-size: 28px;
	color: #100826;
	margin-top: 40px;
`
const BtnWrapper = styled.div`
	margin-top: 30px;
	margin-bottom: 20px;
`

function AuthForm() {
	return (
		<Wrapper>
			<Title>Sign in to Bold.org</Title>
			<AuthInput inputType={authInputTypes.email} />
			<AuthInput inputType={authInputTypes.password} />
			<BtnWrapper>
				<PrimaryBtn>Sign in</PrimaryBtn>
			</BtnWrapper>
			<Link center>Foreget Password ?</Link>
		</Wrapper>
	)
}

export default AuthForm
