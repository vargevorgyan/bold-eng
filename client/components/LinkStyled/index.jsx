import styled, {css} from "styled-components"

const LinkWrapper = styled.div`
	font-size: 14px;
	line-height: 17px;
	color: #5d57fb;
	${props =>
		props.justify &&
		css`
			display: flex;
			justify-content: ${props.justify};
		`}
`

function LinkStyled({children, justify}) {
	return <LinkWrapper justify={justify}>{children}</LinkWrapper>
}

export default LinkStyled
