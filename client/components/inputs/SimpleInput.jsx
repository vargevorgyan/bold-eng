import React from "react"
import styled from "styled-components"

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

function SimpleInput({inputType, formValues, setFormValues}) {
	const type = inputType.toLowerCase()
	const onChange = e => {
		setFormValues({...formValues, [type]: e.target.value})
	}

	return (
		<InputWrapper>
			<InputLabel htmlFor={inputType}>{inputType}</InputLabel>
			<Input
				id={inputType}
				placeholder={inputType}
				type={type}
				value={formValues[type] || ""}
				onChange={onChange}
				name={type}
			/>
		</InputWrapper>
	)
}

export default SimpleInput
