import instance from "."

const login = ({emailAddress, userPassword}) => {
	return instance.post("/login", {
		emailAddress,
		userPassword
	})
}

const register = ({emailAddress, userPassword}) => {
	return instance.post("/register", {
		emailAddress,
		userPassword
	})
}
