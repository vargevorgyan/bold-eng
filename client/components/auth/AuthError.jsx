import styled from "styled-components"

const AuthErrorWrapper = styled.div`
	background: #ff7171;
	border: 2px solid #ff4646;
	border-radius: 5px;
	padding: 8px;
	margin-top: 10px;
`

function AuthError({errorText}) {
	return <AuthErrorWrapper>{errorText}</AuthErrorWrapper>
}

export default AuthError
