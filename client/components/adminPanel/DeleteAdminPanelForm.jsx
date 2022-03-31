import {useState} from "react"
import SimpleInput from "../inputs/SimpleInput"
import styled from "styled-components"
import {device} from "../../constants/breakpoints"
import PrimaryBtn from "../buttons/PrimaryBtn"
import SuccessErrorMessage from "../SuccessErrorMessage"
import api from "../../api"

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

function DeleteAdminPanelForm() {
	const [formValues, setFormValues] = useState({})
	const [message, setMessage] = useState({isError: null, text: ""})

	const onSubmit = async e => {
		e.preventDefault()
		try {
			const res = await api.delete("/scholarships/delete", {
				headers: {},
				data: {
					id: formValues.id
				}
			})

			setMessage({isError: false, text: "Deleted succesfuly!"})
		} catch (e) {
			if (e?.response?.data?.msg) {
				setMessage({isError: true, text: e?.response?.data?.msg})
			} else if (e?.message) setMessage({isError: true, text: e?.message})
		}
	}

	return (
		<Form>
			<InputWrapper>
				<SimpleInput inputType="Id" formValues={formValues} setFormValues={setFormValues} />
			</InputWrapper>
			<MsgWrapper>
				{message.isError !== null && <SuccessErrorMessage isError={message.isError} msg={message.text} />}
			</MsgWrapper>
			<BtnWrapper>
				<PrimaryBtn onClick={onSubmit}>Delete Scholarship</PrimaryBtn>
			</BtnWrapper>
		</Form>
	)
}

export default DeleteAdminPanelForm
