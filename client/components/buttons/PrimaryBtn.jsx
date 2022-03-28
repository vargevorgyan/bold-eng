import styled from "styled-components"

const Button = styled.button`
	width: 100%;
	height: ${props => (props.small ? "44px" : "36px")};
	background: #5d57fb;
	border-radius: 4px;
	color: white;
	display: flex;
	justify-content: center;
	align-items: center;
`

function PrimaryBtn({children, onClick, small = false}) {
	return (
		<Button small={small} onClick={onClick}>
			{children}
		</Button>
	)
}

export default PrimaryBtn
