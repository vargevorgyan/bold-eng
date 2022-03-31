import {useState} from "react"
import SimpleInput from "../inputs/SimpleInput"
import styled from "styled-components"
import {device} from "../../constants/breakpoints"
import PrimaryBtn from "../buttons/PrimaryBtn"
import SuccessErrorMessage from "../SuccessErrorMessage"
import api from "../../api"
import {scholarshipProps} from "../../constants/Scholarship/scholarshipPropereties"

const Form = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 0 30px;
	@media ${device.tablet} {
		padding: 0 90px;
	}
`

const InputWrapper = styled.div`
	width: 100%;
`

const BtnWrapper = styled.div`
	margin-top: 20px;
	width: 100%;
	max-width: 400px;
`
const MsgWrapper = styled.div`
	width: 100%;
	max-width: 400px;
`

function CreateAdminPanelForm() {
	const [formValues, setFormValues] = useState({})
	const [message, setMessage] = useState({isError: null, text: ""})

	const onSubmit = async e => {
		e.preventDefault()
		for (let i = 0; i < scholarshipProps.length; i++) {
			if (!formValues[scholarshipProps[i].toLowerCase()])
				return setMessage({isError: true, text: `Missing ${scholarshipProps[i]}!`})
		}
		if (!Number(formValues["amount"])) return setMessage({isError: true, text: "Amount must be number!"})

		try {
			const res = await api.put("/scholarships/create", {
				model: formValues
			})
			setMessage({isError: false, text: "Created succesfuly!"})
		} catch (e) {
			console.log(e)
		}
	}

	return (
		<Form>
			{scholarshipProps.map(prop => (
				<InputWrapper key={prop}>
					<SimpleInput inputType={prop} formValues={formValues} setFormValues={setFormValues} />
				</InputWrapper>
			))}
			<MsgWrapper>
				{message.isError !== null && <SuccessErrorMessage isError={message.isError} msg={message.text} />}
			</MsgWrapper>
			<BtnWrapper>
				<PrimaryBtn onClick={onSubmit}>Create Scholarship</PrimaryBtn>
			</BtnWrapper>
		</Form>
	)
}

export default CreateAdminPanelForm
