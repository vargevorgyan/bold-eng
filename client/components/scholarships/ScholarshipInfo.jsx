import {useContext} from "react"
import Image from "next/image"
import styled from "styled-components"
import {device} from "../../constants/breakpoints"
import PrimaryBtn from "../buttons/PrimaryBtn"
import GrayText from "../texts/GrayText"
import {useRouter} from "next/router"
import {AuthContext} from "../../context"

const Wrapper = styled.div`
	width: 100%;
	border-top: 1px solid rgba(0, 0, 0, 0.07);
	display: flex;
	justify-content: center;
	flex-direction: column;
	padding-top: 8px;
	margin-top: 10px;
	@media ${device.laptopS} {
		margin-top: 0;
		padding-top: 0;
		padding-left: 25px;
		border-top: none;
		border-left: 1px solid rgba(0, 0, 0, 0.07);
	}
`
const InfoWrapper = styled.div`
	display: flex;
	align-items: center;
`
const InfosWrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	justify-items: center;
	margin-bottom: 10px;
	@media ${device.laptopS} {
		margin-bottom: 0;
		display: block;
	}
`
const IconWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: 8px;
	@media ${device.laptopS} {
		margin-right: 0;
		padding: 15px;
		width: auto;
	}
`
const Info = styled.p``

function ScholarshipInfo({schlItem}) {
	const {authState} = useContext(AuthContext)
	const router = useRouter()
	const onClick = () => {
		if (authState.data) return router.push("/auth")
	}
	return (
		<Wrapper>
			<InfosWrapper>
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
			</InfosWrapper>
			<PrimaryBtn onClick={onClick}>Apply to scholarship</PrimaryBtn>
		</Wrapper>
	)
}

export default ScholarshipInfo
