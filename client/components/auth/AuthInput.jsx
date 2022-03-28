import React from "react"
import styled from "styled-components"
const InputWrapper = styled.div`
	margin-top: 20px;
`
const InputLabel = styled.label`
	font-weight: 400;
	font-size: 14px;
	line-height: 142%;
	color: #100826;
`

const Input = styled.input`
	border: 1px solid #dcdde5;
	border-radius: 3px;
	width: 100%;
	height: 40px;
`

function AuthInput({}) {
	return (
		<InputWrapper>
			<Input />
		</InputWrapper>
	)
}

export default AuthInput
