import React from "react"
import styled from "styled-components"
import Icon from "./icon"

const HeaderStyled = styled.header`
	height: 90px;
	display: flex;
	margin: 0 40px;
`

function Header() {
	return (
		<HeaderStyled>
			<Icon />
		</HeaderStyled>
	)
}

export default Header
