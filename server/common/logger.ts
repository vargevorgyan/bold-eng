import morgan from "morgan"

morgan.token("req-body", function (req, res) {
	//make sure to redact the password:
	if (req.body["userPassword"]) req.body["userPassword"] = "******"
	return JSON.stringify(req.body)
})
morgan.token("res-body", function (req, res) {
	return JSON.stringify(res.json)
})

const logger = morgan(":date[iso] :method :url :status - :response-time ms Request= :req-body", {
	skip: (req, res) => {
		return res.statusCode < 400
	}
})

export default logger
