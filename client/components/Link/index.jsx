import {default as NextLink} from "next/link"
import styled, {css} from "styled-components"

const StyledLink = styled.a`
	font-size: 14px;
	line-height: 17px;
	color: #5d57fb;
`
const LinkWrapper = styled.div`
	${props =>
		props.center &&
		css`
			display: flex;
			justify-content: center;
		`}
`

function Link({children, url = "/", center}) {
	return (
		<LinkWrapper center={center}>
			<NextLink href={url} passHref>
				<StyledLink>{children}</StyledLink>
			</NextLink>
		</LinkWrapper>
	)
}

export default Link
