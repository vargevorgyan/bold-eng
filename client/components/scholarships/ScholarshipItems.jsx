import {useEffect, useState} from "react"
import api from "../../api"
import ScholarshipItem from "./ScholarshipsItem"
import styled from "styled-components"
import {device} from "../../constants/breakpoints"

const Wrapper = styled.div`
	width: 100%;
	margin-top: 56px;
	padding: 0 30px;
	@media ${device.laptop} {
		padding: 0 90px;
	}
`

function ScholarshipsItems() {
	const [schlItems, setSchlItems] = useState([])
	useEffect(() => {
		;(async () => {
			try {
				const {data} = await api.get("/scholarships/get")
				setSchlItems(data)
			} catch (e) {
				console.log({e})
			}
		})()
	}, [])
	console.log(schlItems)
	return (
		<Wrapper>
			{schlItems.map(({id}, i) => (
				<ScholarshipItem key={id} schlItem={schlItems[i]} />
			))}
		</Wrapper>
	)
}

export default ScholarshipsItems
