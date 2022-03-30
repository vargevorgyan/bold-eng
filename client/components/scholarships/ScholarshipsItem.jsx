import React from "react"
import styled from "styled-components"
import ScholarshipContent from "./ScholarshipContent"
import ScholarshipInfo from "./ScholarshipInfo"

const ScholarshipItemStyled = styled.article`
	background: #ffffff;
	box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.05), 0px 1px 5px rgba(0, 0, 0, 0.04);
	border-radius: 4px;
	margin-bottom: 30px;
	min-height: 205px;
	padding: 25px;
	display: grid;
	grid-template-columns: 160px 1fr 215px;
	column-gap: 25px;
`
// in future normal image
const Img = styled.div`
	width: 160px;
	height: 100%;
	background: #c4c4c4;
`

function ScholarshipsItem({schlItem}) {
	return (
		<ScholarshipItemStyled>
			<Img />
			<ScholarshipContent schlItem={schlItem} />
			<ScholarshipInfo schlItem={schlItem} />
		</ScholarshipItemStyled>
	)
}

export default ScholarshipsItem
