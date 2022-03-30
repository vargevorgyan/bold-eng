import Image from "next/image"
import styled from "styled-components"
import {GrayTextStyled} from "../texts/GrayText"

const Wrapper = styled.div``
const Title = styled.h1`
	font-weight: 600;
	font-size: 20px;
	color: #100826;
`
const FunderWrapper = styled.div`
	display: flex;
	margin-top: 8px;
	margin-bottom: 16px;
	align-items: center;
`
const FoundedBy = styled(GrayTextStyled)`
	font-weight: 400;
	font-size: 14px;
	color: #76788c;
	margin-right: 8px;
`

const Funder = styled.p`
	font-weight: 400;
	font-size: 14px;
	margin-left: 8px;
	color: #100826;
`
const ScholarshipDesc = styled(GrayTextStyled)`
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 4;
	-webkit-box-orient: vertical;
`
function ScholarshipContent({schlItem}) {
	return (
		<Wrapper>
			<Title>{schlItem.title}</Title>
			<FunderWrapper>
				<FoundedBy>Founded by</FoundedBy>
				<Image src="/auth/userIcon.svg" width={28} height={28} alt="" />
				<Funder>{schlItem.funder}</Funder>
			</FunderWrapper>
			<ScholarshipDesc>{schlItem.description}</ScholarshipDesc>
		</Wrapper>
	)
}

export default ScholarshipContent
