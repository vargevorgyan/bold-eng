import styled from "styled-components"

export const GrayTextStyled = styled.p`
	font-weight: 400;
	font-size: 14px;
	color: #76788c;
`

function GrayText({children}) {
	return <GrayTextStyled>{children}</GrayTextStyled>
}

export default GrayText
