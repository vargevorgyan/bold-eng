import Image from "next/image"
import {useRouter} from "next/router"

function Icon() {
	const router = useRouter()
	const redirect = () => router.push("/scholarships")
	return (
		<Image
			priority
			src="/bold-eng.svg"
			alt=""
			width={133}
			height={20}
			onClick={redirect}
			style={{cursor: "pointer"}}
		/>
	)
}

export default Icon
