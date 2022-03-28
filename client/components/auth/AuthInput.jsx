import React from "react"
import styled from "styled-components"
import {authInputTypes} from "../../constants/auth/authInputTypes"

const InputWrapper = styled.div`
	margin-top: 20px;
`
const InputLabel = styled.label`
	font-weight: 400;
	font-size: 14px;
	color: #100826;
`

const Input = styled.input`
	margin-top: 8px;
	border: 1px solid #dcdde5;
	border-radius: 3px;
	width: 100%;
	height: 40px;
	font-size: 14px;
	padding: 16px;
`

function AuthInput({inputType}) {
	const type = authInputTypes.password === inputType ? authInputTypes.password : "text"

	return (
		<InputWrapper>
			<InputLabel>{inputType}</InputLabel>
			<Input placeholder={inputType} type={type} />
		</InputWrapper>
	)
}

export default AuthInput
