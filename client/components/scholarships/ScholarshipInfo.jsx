import Image from "next/image"
import styled from "styled-components"
import PrimaryBtn from "../buttons/PrimaryBtn"
import GrayText from "../texts/GrayText"

const Wrapper = styled.div`
	box-shadow: inset 1px 0px 0px rgba(0, 0, 0, 0.07);
	display: flex;
	justify-content: center;
	flex-direction: column;
	padding-left: 25px;
`
const InfoWrapper = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
`
const IconWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 15px;
`
const Info = styled.p``

function ScholarshipInfo({schlItem}) {
	return (
		<Wrapper>
			<InfoWrapper>
				<IconWrapper>
					<Image src="/scholarships/deadline.svg" alt="" width={24} height={24} />
				</IconWrapper>
				<div>
					<GrayText>Deadline</GrayText>
					<Info>{schlItem.deadline}</Info>
				</div>
			</InfoWrapper>
			<InfoWrapper>
				<IconWrapper>
					<Image src="/scholarships/amount.svg" alt="" width={24} height={24} />
				</IconWrapper>
				<div>
					<GrayText>Amount</GrayText>
					<Info>${schlItem.amount}</Info>
				</div>
			</InfoWrapper>
			<PrimaryBtn>Apply to scholarship</PrimaryBtn>
		</Wrapper>
	)
}

export default ScholarshipInfo
