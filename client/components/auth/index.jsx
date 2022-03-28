import React from "react"
import styled from "styled-components"

const Form = styled.form`
	max-width: 90%;
	width: 432px;
	height: 388px;
	background: #ffffff;
	box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.05), 0px 1px 5px rgba(0, 0, 0, 0.04);
	border-radius: 4px;
	padding: 0 44px;
`

const Title = styled.form`
	font-weight: 600;
	font-size: 28px;
	color: #100826;
	margin-top: 40px;
`

function AuthForm() {
	return (
		<Form>
			<Title>Sign in to Bold.org</Title>
		</Form>
	)
}

export default AuthForm
