import {Application} from "express"
import authRouter from "./api/controllers/auth/router"
import scholarshipsRouter from "./api/controllers/scholarships/router"

export default function routes(app: Application): void {
	app.use("/auth", authRouter)
	app.use("/scholarships", scholarshipsRouter)
}
