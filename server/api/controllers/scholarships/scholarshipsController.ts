import {Request, Response} from "express"

export class ScholarshipsController {
	async getScholarships(req: Request, res: Response, next) {
		try {
			console.log("will get schsips")
		} catch (error) {
			next(new Error(error))
		}
	}
}

export default new ScholarshipsController()
