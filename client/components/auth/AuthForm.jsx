import {useState, useContext} from "react"
import styled from "styled-components"
import {errorsText} from "../../constants/auth/authErrorsText"
import {jwtKey} from "../../constants/auth/tokenCookieKey"
import {authInputTypes} from "../../constants/auth/authInputTypes"
import {validateEmail} from "../../utils/validateEmail"
import PrimaryBtn from "../buttons/PrimaryBtn"
import LinkStyled from "../LinkStyled"
import AuthError from "./AuthError"
import AuthInput from "./AuthInput"
import api from "../../api"
import {setCookies} from "cookies-next"
import {AuthContext} from "../../context"
import {useRouter} from "next/router"

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
	const [errorMsg, setError] = useState("")
	const {setAuthState, authState} = useContext(AuthContext)
	const router = useRouter()

	const onSubmit = async () => {
		if (!formValues.email) return setError(errorsText.emialIsRequired)
		if (!formValues.password) return setError(errorsText.password)
		if (!validateEmail(formValues.email)) return setError(errorsText.notVaildEmail)
		if (authState.data) return setError("You're already loged in")
		try {
			const res = await api.post("/auth/login", {
				emailAddress: formValues.email,
				userPassword: formValues.password
			})

			setCookies(jwtKey, res.data.token)
			setAuthState(prev => ({...prev, data: {email: formValues.email, isAdmin: res.data.isAdmin}}))
			if (res.data.isAdmin) {
				//for admins
				router.push("/scholarship")
			}
			router.push("/scholarship")
		} catch (e) {
			const error = e?.response?.data?.error[0]?.msg
			if (error) setError(error)
		}
	}

	return (
		<Wrapper>
			<Title>Sign in to Bold.org</Title>
			<AuthInput formValues={formValues} setFormValues={setFormValues} inputType={authInputTypes.email} />
			<AuthInput formValues={formValues} setFormValues={setFormValues} inputType={authInputTypes.password} />
			{errorMsg && <AuthError errorText={errorMsg} />}
			<BtnWrapper>
				<PrimaryBtn onClick={onSubmit}>Sign in</PrimaryBtn>
			</BtnWrapper>
			<LinkStyled justify="center">Foreget Password ?</LinkStyled>
		</Wrapper>
	)
}

export default AuthForm
