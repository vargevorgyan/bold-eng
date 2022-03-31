import jwt from "jsonwebtoken"
import {Request, Response} from "express"
import ScholarshipsService from "../../services/scholarshipsService"

const secret = process.env.JWT_SECRET || "def_secret"

class ScholarshipsController {
	async getScholarships(req: Request, res: Response, next: any) {
		try {
			const scholarships = await new ScholarshipsService().get()

			res.json(scholarships)
		} catch (error) {
			next(new Error(error))
		}
	}
	async createScholarships(req: Request, res: Response, next: any) {
		try {
			const model = req.body.model
			const token = req.cookies.jwt

			jwt.verify(token, secret, async (err, verifiedJwt) => {
				if (err) {
					res.status(404).send(err.message)
				} else {
					const scholarships = await new ScholarshipsService().create(model)
					res.status(201).json(scholarships)
				}
			})
		} catch (error) {
			next(new Error(error))
		}
	}

	async deleteScholarships(req: Request, res: Response, next: any) {
		try {
			const id = req.body.id
			const token = req.cookies.jwt

			jwt.verify(token, secret, async (err, verifiedJwt) => {
				if (err) {
					res.status(404).send(err.message)
				} else {
					const scholarships = await new ScholarshipsService().delete(id)
					res.json(scholarships)
				}
			})
		} catch (error) {
			next(new Error(error))
		}
	}
}

export default new ScholarshipsController()
