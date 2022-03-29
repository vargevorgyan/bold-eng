import {Request, Response} from "express"
import ScholarshipsModel from "../../../../shared/models/ScholarshipsModel"
import knex from "../../../common/database"

class ScholarshipsController {
	async getScholarships(req: Request, res: Response, next: any) {
		try {
			const [scholarships] = await knex<ScholarshipsModel>("scholarships").limit(10)
			console.log({scholarships})

			return scholarships
		} catch (error) {
			next(new Error(error))
		}
	}
}

export default new ScholarshipsController()
