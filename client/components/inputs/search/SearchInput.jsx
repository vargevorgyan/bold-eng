import Image from "next/image"
import React from "react"
import styled from "styled-components"
import {device} from "../../../constants/breakpoints"

const Wrapper = styled.div`
	width: 100%;
	height: 40px;
	background-color: #f0f1f5;
	border-radius: 4px;
	display: grid;
	grid-template-columns: 17px 1fr;
	column-gap: 5px;
	padding: 0 14px;
	@media ${device.tabletS} {
		width: 215px;
	}
`
const Input = styled.input`
	height: 100%;
	border-radius: 4px;
	background-color: #f0f1f5;
`
const Label = styled.label`
	height: 100%;
	display: flex;
	align-items: center;
`

function SearchInput() {
	return (
		<Wrapper>
			<Label htmlFor="searchInput">
				<Image src="/search/searchIcon.svg" width={17} height={17} alt="" />
			</Label>
			<Input id="searchInput" />
		</Wrapper>
	)
}

export default SearchInput
