import React from "react"
import styled from "styled-components"
import {device} from "../../constants/breakpoints"

const Wrapper = styled.div`
	width: 100%;
	height: 116px;
	padding: 0 30px;
	background-color: white;
	box-shadow: inset 0px -1px 0px rgba(0, 0, 0, 0.07);
	display: flex;
	align-items: center;
	justify-content: space-between;
	@media ${device.tablet} {
		padding: 0 90px;
	}
`
const Title = styled.h1`
	display: inline;
	font-weight: 600;
	font-size: 32px;
	color: #100826;
`

function AdminPanelTitle({children}) {
	return (
		<Wrapper>
			<Title>{children}</Title>
		</Wrapper>
	)
}

export default AdminPanelTitle
