import {useState} from "react"
import styled from "styled-components"
import {errorsText} from "../../constants/auth/authErrorsText"
import {authInputTypes} from "../../constants/auth/authInputTypes"
import {validateEmail} from "../../utils/validateEmail"
import PrimaryBtn from "../buttons/PrimaryBtn"
import LinkStyled from "../LinkStyled"
import AuthError from "./AuthError"
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
	const [formValues, setFormValues] = useState({email: "", password: ""})
	const [error, setError] = useState("")

	const onSubmit = () => {
		if (!formValues.email) return setError(errorsText.emialIsRequired)
		if (!formValues.password) return setError(errorsText.password)
		if (!validateEmail(formValues.email)) return setError(errorsText.notVaildEmail)
	}

	return (
		<Wrapper>
			<Title>Sign in to Bold.org</Title>
			<AuthInput formValues={formValues} setFormValues={setFormValues} inputType={authInputTypes.email} />
			<AuthInput formValues={formValues} setFormValues={setFormValues} inputType={authInputTypes.password} />
			{error && <AuthError errorText={error} />}
			<BtnWrapper>
				<PrimaryBtn onClick={onSubmit}>Sign in</PrimaryBtn>
			</BtnWrapper>
			<LinkStyled justify="center">Foreget Password ?</LinkStyled>
		</Wrapper>
	)
}

export default AuthForm
