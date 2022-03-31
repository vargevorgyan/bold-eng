import styled from "styled-components"
const MsgWrapper = styled.div`
	background: ${props => (props.isError ? "#ff7171" : "#28a745")};
	border: 2px solid ${props => (props.isError ? "#ff4646" : "#007b10")};
	border-radius: 5px;
	padding: 8px;
	color: white;
	margin-top: 10px;
	width: 100%;
`

function SuccessErrorMessage({msg, isError}) {
	return <MsgWrapper isError={isError}>{msg}</MsgWrapper>
}

export default SuccessErrorMessage
