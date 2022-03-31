import {useState, useContext} from "react"
import styled from "styled-components"
import {errorsText} from "../../constants/auth/authErrorsText"
import {jwtKey} from "../../constants/auth/tokenCookieKey"
import {AuthInputTypes} from "../../constants/auth/AuthInputTypes"
import {validateEmail} from "../../utils/validateEmail"
import PrimaryBtn from "../buttons/PrimaryBtn"
import LinkStyled from "../LinkStyled"
import SuccessErrorMessage from "../SuccessErrorMessage"
import SimpleInput from "../inputs/SimpleInput"
import api from "../../api"
import {setCookies} from "cookies-next"
import {AuthContext} from "../../context"
import {useRouter} from "next/router"

const Form = styled.form`
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
	const redirectToSchl = isAdmin =>
		isAdmin ? router.replace("/admin/createScholarships") : router.push("/scholarships")

	const onSubmit = async e => {
		e.preventDefault()
		if (!formValues.email) return setError(errorsText.emialIsRequired)
		if (!formValues.password) return setError(errorsText.password)
		if (!validateEmail(formValues.email)) return setError(errorsText.notVaildEmail)
		if (authState?.data) return redirectToSchl(authState?.isAdmin)

		try {
			const res = await api.post("/auth/login", {
				emailAddress: formValues.email,
				userPassword: formValues.password
			})
			setCookies(jwtKey, res.data.token)
			setAuthState(prev => ({...prev, data: {email: formValues.email, isAdmin: res.data.isAdmin}}))
			redirectToSchl(res.data.isAdmin)
		} catch (e) {
			const error = e?.response?.data?.error[0]?.msg
			if (error) setError(error)
		}
	}

	return (
		<Form name="authorization">
			<Title>Sign in to Bold.org</Title>
			<SimpleInput formValues={formValues} setFormValues={setFormValues} inputType={AuthInputTypes.email} />
			<SimpleInput formValues={formValues} setFormValues={setFormValues} inputType={AuthInputTypes.password} />
			{errorMsg && <SuccessErrorMessage msg={errorMsg} isError />}
			<BtnWrapper>
				<PrimaryBtn onClick={onSubmit}>Sign in</PrimaryBtn>
			</BtnWrapper>
			<LinkStyled justify="center">Foreget Password ?</LinkStyled>
		</Form>
	)
}

export default AuthForm
