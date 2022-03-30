import {Request, Response} from "express"
import ScholarshipsService from "../../services/scholarshipsService"

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
			const scholarships = await new ScholarshipsService().create(model)
			res.status(201).json(scholarships)
		} catch (error) {
			next(new Error(error))
		}
	}

	async deleteScholarships(req: Request, res: Response, next: any) {
		try {
			const id = req.body.id

			const scholarships = await new ScholarshipsService().delete(id)
			res.json(scholarships)
		} catch (error) {
			next(new Error(error))
		}
	}
}

export default new ScholarshipsController()
